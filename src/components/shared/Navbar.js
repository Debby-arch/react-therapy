import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Therapy Booking
          </Link>
          <div className="space-x-4">
            <Link to="/appointments" className="hover:text-blue-600">
              Appointments
            </Link>
            <Link to="/therapists" className="hover:text-blue-600">
              Therapists
            </Link>
            <Link to="/profile" className="hover:text-blue-600">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;