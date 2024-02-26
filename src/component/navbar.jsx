import React from 'react';
import Logo from 'C:/Users/trainingitasst.cbl/Desktop/CR-Management/frontend/frontend_CRS-main123/src/assets/cbl-logo.png'; // Replace 'logo.png' with your actual logo file path

const Navbar = () => {
  // Function to get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toDateString();
    return { time, date };
  };

  const { time, date } = getCurrentDateTime();

  return (
    <nav className="bg-blue-500 flex justify-between items-center h-12 px-4 w-full pl-24"> {/* Set width to full */}
      {/* Left side of navbar */}
      <div className="flex items-center">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-6 mr-2" /> {/* Adjust the height of the logo */}
        {/* Time */}
        <p className="text-black text-lg font-semibold">{time}</p>
        {/* Date */}
        <p className="text-gray-500 text-xs ml-2">{date}</p>
      </div>
      {/* Right side of navbar */}
      <div className="flex items-center">
        {/* Profile icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8a4 4 0 100-8 4 4 0 000 8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1" />
        </svg>
        {/* Profile text */}
        <p className="text-white">Profile</p>
      </div>
    </nav>
  );
};

export default Navbar;
