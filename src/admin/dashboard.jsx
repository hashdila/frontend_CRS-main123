import React from 'react'
import UserData from './Userdata'
import SideBar from '../user/sidebar'
function dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
        <SideBar/>
      </aside>
      {/* Main Content (Centered) */}
      <div className="flex-1 flex justify-center items-center">
      <UserData/>
      </div>
    </div>
   
  )
}

export default dashboard