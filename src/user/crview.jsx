import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import api from '../api';

function Crview() {
  const [crs, setCrs] = useState([]);
  const [selectedCr, setSelectedCr] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${api.defaults.baseURL}/crs/add`);
      setCrs(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updatePriority = useCallback(async (crId, priority) => {
    try {
      const updatedCrs = crs.map(cr => cr.crId === crId ? { ...cr, priority } : cr);
      setCrs(updatedCrs);
      await handlePriorityChange(crId, priority);
    } catch (error) {
      console.error('Error updating priority:', error);
    }
  }, [crs]);

  const handlePriorityChange = useCallback(async (crId, priority) => {
    try {
      console.log(`Current Priority: ${crs.find(cr => cr.crId === crId)?.priority}`);
      console.log(`New Priority: ${priority}`);

      await axios.put(`${api.defaults.baseURL}/crs/${crId}/priority`, { priority });

      console.log(`Priority updated successfully for CR ${crId} to ${priority}`);
    } catch (error) {
      console.error('Error updating priority:', error);
    }
  }, [crs]);

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
              <th className="px-4 py-2">Actions</th>
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
                  {cr.priority}
                </td>
                <td className="px-4 py-2">
                  <button onClick={() => setSelectedCr(cr)}>Change Priority</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedCr && (
        <Popup
          cr={selectedCr}
          updatePriority={updatePriority}
          onClose={() => setSelectedCr(null)}
        />
      )}
    </div>
  );
}

const Popup = ({ cr, updatePriority, onClose }) => {
  const [priority, setPriority] = useState(cr.priority.toString());

  const handleSave = useCallback(async () => {
    await updatePriority(cr.crId, parseInt(priority));
    onClose();
  }, [updatePriority, cr, priority, onClose]);

  return (
    <div className="popup">
      <h2>Change Priority for CR {cr.crId}</h2>
      <input
        type="number"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default Crview;

