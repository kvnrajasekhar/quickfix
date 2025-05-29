import { useState } from 'react';
import translations from '../lang/translations'; 

const defaultLanguage = 'en'; 

export const useTranslation = () => {
  const [lang, setLang] = useState(defaultLanguage);

  // Function to get translated text
  const t = (componentKey, textKey) => {
    // Fallback to default language if translation not found for current lang
    return translations[componentKey]?.[lang]?.[textKey] || translations[componentKey]?.[defaultLanguage]?.[textKey] || '';
  };

  // Function to change language
  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return { t, lang, changeLanguage };
};