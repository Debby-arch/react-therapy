/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';


const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const q = query(
        collection(db, 'appointments'),
        where('doctorId', '==', auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const appointmentsList = [];
      querySnapshot.forEach((doc) => {
        appointmentsList.push({ id: doc.id, ...doc.data() });
      });
      setAppointments(appointmentsList);
    };
    fetchAppointments();
  }, []);

  const updateAppointmentStatus = async (appointmentId, status) => {
    try {
      await updateDoc(doc(db, 'appointments', appointmentId), { status });
      setAppointments(appointments.map(apt => 
        apt.id === appointmentId ? { ...apt, status } : apt
      ));
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Doctor Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Date</th>
              <th className="p-2">Time</th>
              <th className="p-2">Patient</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b">
                <td className="p-2">{appointment.date}</td>
                <td className="p-2">{appointment.time}</td>
                <td className="p-2">{appointment.patientId}</td>
                <td className="p-2">{appointment.status}</td>
                <td className="p-2">
                  <button
                    onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default DoctorDashboard;