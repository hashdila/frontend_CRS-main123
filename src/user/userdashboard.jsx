import React from 'react'
import Insert from '../forms/insert'
import Crview from './crview'
import SideBar from './sidebar'
import Profile from './profile'

function userdashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-1/3 md:w-72 px-8 py-16 ">
        <SideBar/>
        <div>
        <Profile></Profile>
      </div>
      </aside>
      {/* Main Content (Centered) */}
      <div className="flex-1 flex justify-center items-center">
        <Crview />
      </div>
      <div>
         
      </div>
    </div>


  )
}

export default userdashboard