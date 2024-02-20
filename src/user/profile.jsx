import React, {useState, useEffect} from 'react';
import logo from '../assets/CBL-Logo.jpg';
import api from '../api';

function Profile() {
    const [name, setname] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await api.get('/user/name'); 
        setname(response.data.name);
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };

    fetchUsername();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="Logo" className="w-20 h-20 mt-8 mb-4" /> 
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
    </div>
  );
}

export default Profile;
