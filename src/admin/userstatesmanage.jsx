import React, { useState } from 'react';
import axios from 'axios';

const UserStatusManager = () => {
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');

    const approveUser = async () => {
        try {
            const response = await axios.post('/users/approve', { userId });
            setMessage(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const rejectUser = async () => {
        try {
            const response = await axios.post('/users/reject', { userId });
            setMessage(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="number"
                placeholder="Enter user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={approveUser}>Approve User</button>
            <button onClick={rejectUser}>Reject User</button>
            <p>{message}</p>
        </div>
    );
};

export default UserStatusManager;
