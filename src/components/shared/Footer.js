/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Therapy Booking</h3>
            <p className="text-sm">Making mental health care accessible</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-1"><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li className="mb-1"><a href="#" className="hover:text-blue-300">Services</a></li>
              <li className="mb-1"><a href="#" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-sm">Email: contact@therapybooking.com</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-gray-700">
          © 2024 Therapy Booking App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;