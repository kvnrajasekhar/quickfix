import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Raise from "./components/Raise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import IntitalRaise from "./components/InitailRaise"; 
import App from "./App";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import ComplaintStatusPage from "./components/ComplaintStatusPage";
import PageNotFound from "./components/PageNotFound";
import LanguageSelector from "./components/LanguageSelector"; 
import translations from './lang/translations'; 
import ScrollToTop from './components/ScrollToTop';

export const LanguageContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));

const MainApplication = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('appLanguage') || 'en'
  );
  // State to check if language has been explicitly selected (for the first-time screen)
  const [languageSelected, setLanguageSelected] = useState(
    !!localStorage.getItem('appLanguage') // True if language already in local storage
  );

  useEffect(() => {
    localStorage.setItem('appLanguage', currentLanguage);
  }, [currentLanguage]);

  const handleLanguageSelect = (langCode) => {
    setCurrentLanguage(langCode);
    setLanguageSelected(true); 
  };

  // Helper function to get translated text
  const t = (componentKey, textKey, replacements = {}) => {
    let translatedText = translations[componentKey]?.[currentLanguage]?.[textKey] || translations[componentKey]?.['en']?.[textKey] || '';

    // Perform replacements if any are provided
    for (const key in replacements) {
      if (replacements.hasOwnProperty(key)) {
        const placeholder = `{${key}}`;
        translatedText = translatedText.replace(new RegExp(placeholder, 'g'), replacements[key]);
      }
    }
    return translatedText;
  };


  if (!languageSelected) {
    return <LanguageSelector onLanguageSelect={handleLanguageSelect} />;
  }

  return (
    <React.StrictMode>
      <LanguageContext.Provider value={{ lang: currentLanguage, t, setLang: setCurrentLanguage }}>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<App />} />
                <Route path="/complaint" element={<Raise />} />
                <Route path="/raise" element={<IntitalRaise />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/status" element={<ComplaintStatusPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageContext.Provider>
    </React.StrictMode>
  );
};

root.render(<MainApplication />);

reportWebVitals();