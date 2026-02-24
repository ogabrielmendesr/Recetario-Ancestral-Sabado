import React, { useEffect, useState } from 'react';

interface PriceDisplayProps {
  basePrice: number;
}

interface GeoData {
  countryCode: string;
  currencyCode: string;
  rate?: number;
  timestamp: number;
}

const CACHE_KEY = 'geo_currency_data';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Manual mapping for common countries to ensure we get a currency even if API only gives country
const COUNTRY_CURRENCY_MAP: Record<string, string> = {
  'AR': 'ARS', // Argentina
  'BO': 'BOB', // Bolivia
  'BR': 'BRL', // Brazil
  'CL': 'CLP', // Chile
  'CO': 'COP', // Colombia
  'CR': 'CRC', // Costa Rica
  'CU': 'CUP', // Cuba
  'DO': 'DOP', // Dominican Republic
  'EC': 'USD', // Ecuador (Uses USD)
  'SV': 'USD', // El Salvador (Uses USD)
  'GT': 'GTQ', // Guatemala
  'HN': 'HNL', // Honduras
  'MX': 'MXN', // Mexico
  'NI': 'NIO', // Nicaragua
  'PA': 'USD', // Panama (Uses USD/PAB)
  'PY': 'PYG', // Paraguay
  'PE': 'PEN', // Peru
  'ES': 'EUR', // Spain
  'UY': 'UYU', // Uruguay
  'VE': 'VES', // Venezuela
  'US': 'USD', // USA
};

const PriceDisplay: React.FC<PriceDisplayProps> = ({ basePrice }) => {
  const [localPrice, setLocalPrice] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string>('');

  useEffect(() => {
    const init = async () => {
      // 1. Check Cache
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const data: GeoData = JSON.parse(cached);
          if (Date.now() - data.timestamp < CACHE_DURATION) {
            if (data.currencyCode === 'USD') return; // No conversion needed
            
            setCountryCode(data.countryCode);
            
            if (data.rate) {
              formatAndSetPrice(basePrice, data.rate, data.currencyCode);
              return;
            }
          }
        } catch (e) {
          localStorage.removeItem(CACHE_KEY);
        }
      }

      // 2. Fetch Geo Data (3-layer fallback)
      let country = '';
      let currency = '';

      try {
        // Layer 1: geojs.io (Fastest)
        const geoRes = await fetch('https://get.geojs.io/v1/ip/country.json');
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          country = geoData.country; // "US", "MX"
        }
      } catch (e) { console.log('GeoJS failed, trying fallback...'); }

      if (!country) {
        try {
          // Layer 2: ipwho.is
          const whoRes = await fetch('https://ipwho.is/');
          if (whoRes.ok) {
            const whoData = await whoRes.json();
            if (whoData.success) {
              country = whoData.country_code;
              currency = whoData.currency?.code;
            }
          }
        } catch (e) { console.log('IPWho failed, trying fallback...'); }
      }

      if (!country) {
        try {
          // Layer 3: ipapi.co
          const apiRes = await fetch('https://ipapi.co/json/');
          if (apiRes.ok) {
            const apiData = await apiRes.json();
            country = apiData.country_code;
            currency = apiData.currency;
          }
        } catch (e) { console.log('IPApi failed.'); }
      }

      if (!country) return; // Could not detect country

      // Determine Currency
      if (!currency) {
        currency = COUNTRY_CURRENCY_MAP[country] || 'USD';
      }

      if (currency === 'USD') {
        // Cache USD result so we don't check again
        saveCache(country, 'USD');
        return;
      }

      // 3. Fetch Exchange Rate
      try {
        const rateRes = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        if (rateRes.ok) {
          const rateData = await rateRes.json();
          const rate = rateData.rates[currency];
          
          if (rate) {
            formatAndSetPrice(basePrice, rate, currency);
            setCountryCode(country);
            saveCache(country, currency, rate);
          }
        }
      } catch (e) {
        console.error('Exchange rate failed', e);
      }
    };

    init();
  }, [basePrice]);

  const formatAndSetPrice = (base: number, rate: number, currency: string) => {
    const converted = base * rate;
    try {
      const formatter = new Intl.NumberFormat(navigator.language || 'es-ES', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      setLocalPrice(formatter.format(converted));
    } catch (e) {
      // Fallback formatting if Intl fails
      setLocalPrice(`${currency} ${converted.toFixed(2)}`);
    }
  };

  const saveCache = (country: string, currency: string, rate?: number) => {
    const data: GeoData = {
      countryCode: country,
      currencyCode: currency,
      rate,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  };

  // Helper to get flag emoji
  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode) return '';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <div className="bg-white rounded-[2rem] shadow-xl border-2 border-blue-100 p-4 md:p-8 w-full relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>
        
        <h4 className="text-gray-900 font-bold text-lg md:text-3xl mb-2 leading-tight text-center">
          Precio Especial HOY de Lanzamiento:
        </h4>
        
        <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#22c55e] tracking-tighter leading-none mb-4 md:mb-6 drop-shadow-sm text-center whitespace-nowrap">
          US$ {basePrice}
        </div>

        {localPrice && countryCode && (
          <div className="flex justify-center mb-6 w-full">
            <div className="inline-flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 shadow-sm animate-fade-in whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
              <span className="text-gray-500 font-medium text-[10px] sm:text-xs md:text-sm shrink-0">
                En tu moneda local
              </span>
              <span className="text-base md:text-lg shrink-0" role="img" aria-label={`Bandera de ${countryCode}`}>
                {getFlagEmoji(countryCode)}
              </span>
              <span className="text-gray-900 font-bold text-xs md:text-sm truncate">
                {localPrice}
              </span>
            </div>
          </div>
        )}
        
        <p className="text-[#f87171] font-bold text-xs md:text-base text-center leading-snug uppercase px-2">
          APROVECHA AHORA: NO ENCONTRARÁS ESTE PRECIO MÁS ADELANTE.
        </p>
      </div>
    </div>
  );
};

export default PriceDisplay;
