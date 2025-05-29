import React from 'react';
import { motion } from 'framer-motion'; 
import logo from '../assets/logo.png'; 
import { TypeAnimation } from "react-type-animation";

const LanguageSelector = ({ onLanguageSelect }) => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'hi', name: 'हिन्दी (Hindi)' },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="min-h-screen  from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={logo}
        alt="Quickfix Logo"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mb-8"
        variants={itemVariants}
        style={{ position: 'static' }} 
      />

      <motion.h1
        className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center"
        variants={itemVariants}
      >
        
        <TypeAnimation
                className="neon-shadow"
                sequence={[
                  "Welcome to Quickfix!",
                  2000,
                  "క్విక్‌ఫిక్స్‌కు స్వాగతం!",
                  2000,
                  "क्विकफिक्स में आपका स्वागत है!",
                  2000,
                ]}
                wrapper="span"
                speed={100}
                repeat={Infinity}
              />
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-md"
        variants={itemVariants}
      >
                
        <br />
        Please select your preferred language to continue.
        <br />
        దయచేసి కొనసాగడానికి మీ ప్రాధాన్య భాషను ఎంచుకోండి.
        <br />
        जारी रखने के लिए कृपया अपनी पसंदीदा भाषा चुनें।
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            className="bg-[#090270] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            onClick={() => onLanguageSelect(lang.code)}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {lang.name}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LanguageSelector;