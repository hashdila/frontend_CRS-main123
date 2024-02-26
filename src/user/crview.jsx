import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api';

function Crview() {
    const [crs, setCrs] = useState([]);
    const [selectedCr, setSelectedCr] = useState(null);
    const [editPriority, setEditPriority] = useState(false);
    const [newPriority, setNewPriority] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${api.defaults.baseURL}/crs/add`);
            // Sort the response.data array based on the priority property
            const sortedCrs = response.data.sort((a, b) => a.priority - b.priority);
            setCrs(sortedCrs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    const openEditPriority = (cr) => {
        setSelectedCr(cr);
        setEditPriority(true);
        setNewPriority(cr.priority);
    };

    const closeEditPriority = () => {
        setSelectedCr(null);
        setEditPriority(false);
    };

    const handlePriorityChange = (event) => {
        setNewPriority(parseInt(event.target.value));
    };

    const updatePriority = async () => {
        try {
            await axios.put(`${api.defaults.baseURL}/crs/${selectedCr.crId}/priority`, { priority: newPriority });
            closeEditPriority();
            fetchData();
        } catch (error) {
            console.error('Error updating priority:', error);
        }
    };
    
    

    return (
      <div className="p-4 sm:ml-64">
      <div className="col p-0 m-0">
        <div className="p-2 d-flex justify-content-center shadow">
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
                        {crs.sort((a, b) => a.priority - b.priority).map(cr => (
                            <tr key={cr.crId} className="border-b">
                                <td className="px-4 py-2">{cr.crId}</td>
                                <td className="px-4 py-2">{cr.name}</td>
                                <td className="px-4 py-2">{cr.department}</td>
                                <td className="px-4 py-2">{cr.topic}</td>
                                <td className="px-4 py-2">{cr.description}</td>
                                <td className="px-4 py-2">{cr.type}</td>
                                <td className="px-4 py-2">
                                    {editPriority && selectedCr && selectedCr.crId === cr.crId ? (
                                        <input
                                            type="number"
                                            value={newPriority}
                                            onChange={handlePriorityChange}
                                            autoFocus
                                        />
                                    ) : (
                                        cr.priority
                                    )}
                                </td>
                                <td className="px-4 py-2">
                                    <button onClick={() => openEditPriority(cr)}>Change priority</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editPriority && selectedCr && (
                <div className="popup-view">
                    <h2>Edit Priority</h2>
                    <input
                        type="number"
                        value={newPriority}
                        onChange={handlePriorityChange}
                        autoFocus
                    />
                    <button onClick={updatePriority}>Save</button>
                    <button onClick={closeEditPriority}>Cancel</button>
                </div>
            )}
        </div>
        </div>
        
    );
}

export default Crview;