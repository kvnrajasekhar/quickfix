import React, { useContext } from 'react'; 
import { AlertCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import { LanguageContext } from '../index'; 

const PageNotFound = () => {
    const { t } = useContext(LanguageContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {t('PageNotFound', 'heading')} 
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                {t('PageNotFound', 'description')} 
            </p>
            <img src={logo} style={{ position: 'static'}} alt={t('PageNotFound', 'logo_alt_text')} className="w-48 h-auto rounded-full" /> 
        </div>
    );
};

export default PageNotFound;