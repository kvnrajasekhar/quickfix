import React from "react";
import { Image } from "react-bootstrap";

function Footer() {
  const logo = require("../assets/logo.png");
  return (
    <footer className="bg-gray-100 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="">
            <Image
              src={logo}
              alt="Logo"
              className=" mx-auto md:mx-0 rounded"
              style={{ position: 'static', width: '150px', height: '150px' }}
            />
          </div>

          <div className="text-center">
            <h5 className="text-lg font-semibold text-gray-800 mb-2">
              Quick Links
            </h5>
            <ul className="list-none p-0">
              <li className="mb-1">
                <a href="/" className="text-gray-600 hover:text-blue-500">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a href="/about" className="text-gray-600 hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a href="/raise" className="text-gray-600 hover:text-blue-500">
                  Raise a Request
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h5 className="text-lg font-semibold text-gray-800 mb-2">
              Contact Us
            </h5>
            <p className="text-gray-600 text-sm">
              <b>Email</b>: info.quickfix@gmail.com
            </p>
            <p className="text-gray-600 text-sm">
              <b>Phone</b>: +91 7793932038
            </p>
            <div className="mt-2">
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
          © {new Date().getFullYear()} Quickfix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
