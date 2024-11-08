/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

const Navbar = () => (
  <nav className="bg-white shadow-lg">
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Therapy Booking</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Appointments</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>

        </div>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
      Welcome to Therapy Booking
    </h2>
    <p className="text-xl text-gray-600 text-center mb-12">
      Find and book your therapy sessions easily
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Find Therapists</h3>
        <p className="text-gray-600">Browse our network of qualified professionals</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Book Sessions</h3>
        <p className="text-gray-600">Schedule appointments at your convenience</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Online Sessions</h3>
        <p className="text-gray-600">Connect with therapists from anywhere</p>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-4">
      <p className="text-center">© 2024 Therapy Booking App</p>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;