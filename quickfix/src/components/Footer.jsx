import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import { LanguageContext } from '../index'; // Import LanguageContext

function Footer() {
  const { t } = useContext(LanguageContext); // Access the translation function
  const logo = require("../assets/logo.png"); // Make sure this path is correct

  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="">
            <Image
              src={logo}
              alt="Logo"
              className="mx-auto md:mx-0 rounded"
              style={{ position: 'static', width: '150px', height: '150px' }}
            />
          </div>

          <div className="text-center">
            <h5 className="text-lg font-semibold text-gray-800 mb-2">
              {t('Footer', 'quick_links_heading')}
            </h5>
            <ul className="list-none p-0">
              <li className="mb-1">
                <a href="/" className="text-gray-600 hover:text-blue-500">
                  {t('Footer', 'home_link')}
                </a>
              </li>
              <li className="mb-1">
                <a href="/about" className="text-gray-600 hover:text-blue-500">
                  {t('Footer', 'about_link')}
                </a>
              </li>
              <li className="mb-1">
                <a href="/raise" className="text-gray-600 hover:text-blue-500">
                  {t('Footer', 'raise_request_link')}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-blue-500"
                >
                  {t('Footer', 'contact_link')}
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h5 className="text-lg font-semibold text-gray-800 mb-2">
              {t('Footer', 'contact_heading')}
            </h5>
            <p className="text-gray-600 text-sm">
              <b>{t('Footer', 'email_label')}</b>: {t('Footer', 'email_address')}
            </p>
            <p className="text-gray-600 text-sm">
              <b>{t('Footer', 'phone_label')}</b>: {t('Footer', 'phone_number')}
            </p>
            <div className="mt-2">
              {/* Note: These social links are hardcoded, you might want to consider if they need translation or external configuration */}
              <a href="/" className="text-gray-600 hover:text-blue-500 mr-4">
                Facebook
              </a>
              <a href="/" className="text-gray-600 hover:text-blue-500 mr-4">
                Twitter
              </a>
              <a href="/" className="text-gray-600 hover:text-blue-500">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        {/* Copyright Notice */}
        <div className="text-center mt-4 text-gray-600 text-sm">
          {t('Footer', 'copyright_text', { year: currentYear })} {/* Pass year as a variable */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;