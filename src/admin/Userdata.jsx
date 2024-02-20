import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api';

function UserData() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${api.defaults.baseURL}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const fetchUserById = async (user) => {
    try {
      setSelectedUser(user);
      setShowModal(true);
    } catch (error) {
      console.error(`Error fetching user with ID ${user.userId}:`, error);
    }
  };

  const approveUser = async () => {
    try {
      await axios.post(`/users/approve/${selectedUser.userId}`);
      const updatedUsers = users.map((user) =>
        user.userId === selectedUser.userId ? { ...user, status: 'approved' } : user
      );
      setUsers(updatedUsers);
      setShowModal(false);
    } catch (error) {
      console.error(`Error approving user with ID ${selectedUser.userId}:`, error);
    }
  };

  const rejectUser = async () => {
    try {
      await axios.post(`/users/reject/${selectedUser.userId}`);
      const updatedUsers = users.map((user) =>
        user.userId === selectedUser.userId ? { ...user, status: 'rejected' } : user
      );
      setUsers(updatedUsers);
      setShowModal(false);
    } catch (error) {
      console.error(`Error rejecting user with ID ${selectedUser.userId}:`, error);
    }
  };

  const changeStatus = async () => {
    try {
      await axios.post(`/users/status/${selectedUser.userId}`, { status: newStatus });
      const updatedUsers = users.map((user) =>
        user.userId === selectedUser.userId ? { ...user, status: newStatus } : user
      );
      setUsers(updatedUsers);
      setShowModal(false);
    } catch (error) {
      console.error(`Error changing status for user with ID ${selectedUser.userId}:`, error);
    }
  };


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">User Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">User Type</th>
              <th className="px-4 py-2" onClick={() => setShowModal(true)}>Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{user.userId}</td>
                <td className="px-4 py-2">{user.firstname}</td>
                <td className="px-4 py-2">{user.lastname}</td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.userType}</td>
                <td className="px-4 py-2">{user.status}</td>
                <td>
                  {user.status === 'pending' && (
                    <div>
                      <button onClick={() => fetchUserById(user)}>Change Status</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <div>
              <label htmlFor="status">New Status:</label>
              <select
                id="status"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <button onClick={changeStatus}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserData;
