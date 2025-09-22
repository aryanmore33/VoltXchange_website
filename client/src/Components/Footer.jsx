import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        
     
        <div className="flex gap-6 mb-4 sm:mb-0">
          <a href="#quick-links" className="hover:text-black">
            Quick Links
          </a>
          <a href="#legal" className="hover:text-black">
            Legal
          </a>
        </div>

   
        <div className="flex gap-4 text-gray-500">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-5 h-5 hover:text-black" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-5 h-5 hover:text-black" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-5 h-5 hover:text-black" />
          </a>
        </div>
      </div>

    
      <div className="border-t text-center py-3 text-xs text-gray-400">
        Made with <span className="font-semibold">Visily</span>
      </div>
    </footer>
  );
};

export default Footer;
