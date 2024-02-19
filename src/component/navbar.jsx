import React from 'react'
import userdashboard from '../user/userdashboard'
import insert from '../forms/insert'

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container'>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link to="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/crview" class="text-gray-900 dark:text-white hover:underline">Insert Data</Link>
              </li>
              <li>
                <Link to="/insert" class="text-gray-900 dark:text-white hover:underline">Update Data</Link>
              </li>
              <li>
                <Link to="/delete-data" class="text-gray-900 dark:text-white hover:underline">Delete Data</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
