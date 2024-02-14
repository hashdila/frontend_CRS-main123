import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import api from '../api'; // Import your API configuration here

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    userType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/register/', formData);
      console.log('Data inserted successfully:', response.data);
      // Optionally, reset form fields here
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name:</label>
            <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange} className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input type="text" name="lastname" id="lastname" value={formData.lastname} onChange={handleChange} className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="userType" className="block text-sm font-medium text-gray-700">Usertype:</label>
            <select id="userType" name="userType" value={formData.userType} onChange={handleChange} className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option value="Developer">Developer</option>
              <option value="Creator">Creator</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2.5 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
        </form>
        {/* Button to navigate to login page */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
