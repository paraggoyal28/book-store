import React from "react";
import footerLogo from "../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* left side - logo and nav */}
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Footer Logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#home" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Right side - newsletter */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            Subscribe to our newsletter to receive the latest updates, news and
            offers!
          </p>
          <div className="flex  h-10">
            <input
              type="email"
              className="border rounded-l-md w-full px-4 py-2 text-black border-primary"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="bg-primary px-6 py-2 text-white rounded-r-md hover:bg-secondary"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="container mx-auto flex flex-col md:flex-row justify-between items-center 
      mt-10 border-t border-gray-700 pt-6"
      >
        {/* left side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <a href="#privacy" className="hover:text-primary">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-primary">
              Terms of Service
            </a>
          </li>
        </ul>

        {/* Right side - Social Items */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
