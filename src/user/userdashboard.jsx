import React from 'react';
import Logo from 'C:/Users/trainingitasst.cbl/Desktop/CR-Management/frontend/frontend_CRS-main123/src/assets/cbl-logo.png'; // Replace 'logo.png' with your actual logo file path

const UserDashboard = () => {
  // Example user data
  const user = {
    name: 'John Doe',
  };
  

  // Get current date and time
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="p-4 sm:ml-64">
      <div className="col p-0 m-0">
        <div className="p-2 d-flex justify-content-center shadow">
      {/* User profile section */}
      <div className="flex items-center justify-between mb-8">
        {/* Profile picture */}
        <img
          src={Logo}
          alt="CBL-Logo"
          className="w-12 h-12 rounded-full"
        />
        {/* User name */}
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <div className="mb-8">
        {/* Current date */}
        <p className="text-gray-500 text-sm mb-2">Date: {currentDate}</p>
        {/* Current time */}
        <p className="text-gray-500 text-sm">Time: {currentTime}</p>
      </div>
      </div>

      {/* Date and time section */}
      

      
      
      {/* Additional content can be added here */}
    </div>
    </div>
    </div>
  );
};

export default UserDashboard;
