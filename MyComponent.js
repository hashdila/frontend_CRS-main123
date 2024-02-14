// MyComponent.js
import React, { useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/your-endpoint');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      {<app/>}
    </div>
  );
};

export default MyComponent;
