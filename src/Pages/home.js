import React from 'react';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Therapy Booking</h1>
      <p className="text-lg mb-8">Find and book your therapy sessions easily</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Find Therapists</h2>
          <p>Browse through our network of qualified therapists</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Book Sessions</h2>
          <p>Schedule appointments at your convenience</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Online Sessions</h2>
          <p>Connect with therapists from anywhere</p>
        </div>
      </div>
    </div>
  );
};

export default Home;