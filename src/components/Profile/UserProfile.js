/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';


const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '', // for doctors
    bio: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const docRef = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data());
      }
    };
    fetchProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), profile);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={profile.phone}
        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      {profile.userType === 'doctor' && (
        <input
          type="text"
          placeholder="Specialization"
          value={profile.specialization}
          onChange={(e) => setProfile({ ...profile, specialization: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
        />
      )}
      <textarea
        placeholder="Bio"
        value={profile.bio}
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        className="w-full mb-4 p-2 border rounded h-32"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Update Profile
      </button>
    </form>
  );
};

export default UserProfile;