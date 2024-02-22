import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api';

function Crview() {
  const [crs, setCrs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api.defaults.baseURL}/crs/add`);
      setCrs(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePriorityChange = async (crId, priority) => {
    try {
      // Update the priority
      await axios.put(`${api.defaults.baseURL}/crs/${crId}/priority`, { priority });
  
      // Fetch the updated data from the server
      const response = await axios.get(`${api.defaults.baseURL}/crs/add`);
      const updatedCrs = response.data;
  
      // Sort the updated list based on the new priority
      updatedCrs.sort((a, b) => a.priority - b.priority);
  
      // Update the state with the sorted list
      setCrs(updatedCrs);
    } catch (error) {
      console.error('Error updating priority:', error);
    }
  };
  


  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">CR Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">CR ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Department</th>
              <th className="px-4 py-2">Topic</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Priority</th>
            </tr>
          </thead>
          <tbody>
            {crs.map(cr => (
              <tr key={cr.crId} className="border-b">
                <td className="px-4 py-2">{cr.crId}</td>
                <td className="px-4 py-2">{cr.name}</td>
                <td className="px-4 py-2">{cr.department}</td>
                <td className="px-4 py-2">{cr.topic}</td>
                <td className="px-4 py-2">{cr.description}</td>
                <td className="px-4 py-2">{cr.type}</td>
                <td className="px-4 py-2">
                <input
                    type="number"
                    defaultValue={cr.priority}
                    onChange={(e) => handlePriorityChange(cr.crId, e.target.value)}
                    />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crview;
