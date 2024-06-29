import React from 'react'
import mylogo1 from '../../assets/mylogo1.png';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-richblack-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <img src={mylogo1} alt="My Logo" className="w-32" />
          </div>
          {/* Links Section */}
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <a href="#terms" className="text-gray-400 mx-2 hover:text-white">Terms and Conditions</a>
            <a href="#privacy" className="text-gray-400 mx-2 hover:text-white">Privacy Policy</a>
          </div>
          {/* Email and Social Media Links */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-4">
              <p className="text-gray-400">Email: <a href="mailto:tspathan012@gmail.com" className="hover:text-white">tspathan012@gmail.com</a></p>
            </div>
            <div className="flex">
              <a href="https://github.com/TanveerSP" target="_blank" rel="noopener noreferrer"  className="text-gray-400 mx-2 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"  className="text-gray-400 mx-2 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/tanveer-pathan/" target="_blank" rel="noopener noreferrer"  className="text-gray-400 mx-2 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"   className="text-gray-400 mx-2 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="text-center mt-4 text-gray-400">
          © {new Date().getFullYear()} 🚀 Tanveer Pathan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer
