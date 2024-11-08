/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';


const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      const q = query(collection(db, 'users'), where('userType', '==', 'doctor'));
      const querySnapshot = await getDocs(q);
      const doctorsList = [];
      querySnapshot.forEach((doc) => {
        doctorsList.push({ id: doc.id, ...doc.data() });
      });
      setDoctors(doctorsList);
    };
    fetchDoctors();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'appointments'), {
        doctorId: selectedDoctor,
        patientId: auth.currentUser.uid,
        date: selectedDate,
        time: selectedTime,
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      alert('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <form onSubmit={handleBooking} className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Book Appointment</h2>
      <select
        value={selectedDoctor}
        onChange={(e) => setSelectedDoctor(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="">Select Doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
        ))}
      </select>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Book Appointment
      </button>
    </form>
  );
};

export default BookAppointment;