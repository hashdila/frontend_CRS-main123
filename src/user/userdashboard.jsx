import React, { useState } from 'react';
import SideBar from './sidebar';
import Crview from './crview';
import { Outlet } from 'react-router-dom';
import Insert from '../forms/insert';


const UserDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('crview');
  
  const handleComponentSelect = (componentName) => {
    setSelectedComponent(componentName);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'insert':
        return <Insert />;
      case 'crview':
      default:
        return <Crview />;
    }
  };

  console.log('Selected Component:', selectedComponent); 
  
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-1/3 md:w-72 px-8 py-16">
        {/* Pass down the handleComponentSelect function */}
        <SideBar handleComponentSelect={handleComponentSelect} />
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
          <div className="flex-1 relative">
            <div className="mt-16">{renderComponent()}</div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
   
      {/* Main Content */}
      
    </div>
  );
};
export default UserDashboard;
