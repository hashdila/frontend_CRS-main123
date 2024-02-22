import React, { useState } from 'react';
import axios from 'axios';
import api from '../api.jsx';

const Insert = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    topic: '',
    description: '',
    type: '',
    typeimage: 'male', // Default value for gender
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api.defaults.baseURL}/crs/`, formData); // Assuming api.defaults.baseURL is your API base URL
      console.log('Data inserted successfully:', response.data);
      // Optionally, reset form fields here
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-md w-full">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <input type="text" id="name" placeholder="John" onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">Department</label>
            <input type="text" id="department" placeholder="IT" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="topic" className="block text-gray-700 text-sm font-bold mb-2">Topic</label>
            <input type="text" id="topic" placeholder="Change class color" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <input type="text" id="description" placeholder="30" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Type</label>
            <input type="text" id="type" placeholder="Eargent" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Insert;
