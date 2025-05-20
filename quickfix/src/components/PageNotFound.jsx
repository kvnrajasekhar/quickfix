import React from 'react';
import { AlertCircle } from 'lucide-react'; 
import logo from '../assets/logo.png';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
            <img src={logo} style={{ position: 'static'}} alt="Company Logo" className="w-48 h-auto rounded-full" />
        </div>
    );
};

export default PageNotFound;
