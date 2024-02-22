import React, { useState } from 'react';
import Insert from '../forms/insert';
import Crview from './crview';
import SideBar from './sidebar';
import Profile from './profile';
import Navbar from '../component/navbar'; // Import the Navbar component

function UserDashboard() {
  // State to keep track of the selected component
  const [selectedComponent, setSelectedComponent] = useState('crview');

  // Function to handle component selection
  function handleComponentSelect(componentName) {
    setSelectedComponent(componentName);
  };

  // Render the selected component
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'insert':
        return <Insert />;
      case 'crview':
        return <Crview />;
      // Add cases for other components as needed
      default:
        return <Crview />;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-1/3 md:w-72 px-8 py-16">
        {/* Pass down the handleComponentSelect function */}
        <SideBar handleComponentSelect={handleComponentSelect} />
      </aside>
      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar />
        {/* Render the selected component */}
        {renderComponent()}
      </div>
    </div>
  );
}

export default UserDashboard;
