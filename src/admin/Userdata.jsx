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

  const changeStatus = async () => {
    if (newStatus === 'approveUser') {
      await approveUser();
    } else if (newStatus === 'rejectUser') {
      await rejectUser();
    } else {
      console.error(`Invalid status option: ${newStatus}`);
    }
  };

  const approveUser = async () => {
    try {
      await axios.post(`${api.defaults.baseURL}/users/approve/${selectedUser.userId}`);
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
      await axios.post(`${api.defaults.baseURL}/users/reject/${selectedUser.userId}`);
      const updatedUsers = users.map((user) =>
        user.userId === selectedUser.userId ? { ...user, status: 'rejected' } : user
      );
      setUsers(updatedUsers);
      setShowModal(false);
    } catch (error) {
      console.error(`Error rejecting user with ID ${selectedUser.userId}:`, error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEdit = (user) => {
    console.log('Edit user:', user);
  };

  const handleView = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="p-4 sm:ml-64">
    <div className="col p-0 m-0">
      <div className="p-2 d-flex justify-content-center shadow">
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
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
              <th className="px-4 py-2">View</th>
              <th className="px-4 py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId} className="border-b">
                <td className="px-4 py-2">{user.userId}</td>
                <td className="px-4 py-2">{user.firstname}</td>
                <td className="px-4 py-2">{user.lastname}</td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.userType}</td>
                <td className="px-4 py-2">{user.status}</td>
                <td>
                  <div>
                    <button onClick={() => fetchUserById(user)}>Change Status</button>
                  </div>
                </td>
                <td>
                  <button onClick={() => handleView(user)}>View</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
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
                <option value="pending">Pending</option>
                <option value="approveUser">Approved</option>
                <option value="rejectUser">Rejected</option>
              </select>
            </div>
            <button onClick={changeStatus}>Save</button>
          </div>
        </div>
      )}
      {selectedUser && (
        <div className="selected-user">
          <p>ID: {selectedUser.userId}</p>
          <p>First Name: {selectedUser.firstname}</p>
          <p>Last Name: {selectedUser.lastname}</p>
          <p>Username: {selectedUser.username}</p>
          <p>User Type: {selectedUser.userType}</p>
          <p>Status: {selectedUser.status}</p>
        </div>
      )}
    </div>
    </div>
    </div>
  );
}

export default UserData;