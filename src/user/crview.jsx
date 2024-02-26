import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api';

function Crview() {
  const [crs, setCrs] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
        try {
          const response = await axios.get(`${api.defaults.baseURL}/crs/add`);
          setCrs(response.data); // Set the users state with the fetched data
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      

    fetchData(); 
  }, []); 

  return (
    <div className="p-4 sm:ml-64">
    <div className="col p-0 m-0">
      <div className="p-2 d-flex justify-content-center shadow">
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
              <th className="px-4 py-2">Image</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  </div>
  );
}

export default Crview;
