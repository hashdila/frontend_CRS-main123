import React from 'react'

function navbar() {
  return (
    <div className='container'>
        


<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Insert-data</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Update-data</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Delete data</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}

export default navbar