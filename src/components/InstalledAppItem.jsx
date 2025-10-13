// components/InstalledAppItem.jsx

import React from 'react';

// Assumed App Data Structure:
// { id: 1, title: "Forest: Focus For Productivity", downloads: "9M", ratingAvg: 5, size: 258 }

export default function InstalledAppItem({ app }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 rounded-lg shadow-sm">
      
      {/* App Icon and Details */}
      <div className="flex items-center space-x-4">
        {/* App Icon Placeholder (Grey Box with a subtle shadow/bg) */}
        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center shadow-inner">
          {/* Placeholder for small download icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>

        {/* Text Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{app.title}</h3>
          
          <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
            {/* Downloads */}
            <div className="flex items-center">
              <span className="text-gray-400 dark:text-gray-500 mr-1">⬇️</span>
              {app.downloads}
            </div>
            
            {/* Rating */}
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              {app.ratingAvg}
            </div>
            
            {/* Size */}
            <div>{app.size} MB</div>
          </div>
        </div>
      </div>
      
      {/* Uninstal Button */}
      <button className="btn btn-sm btn-success bg-green-500 hover:bg-green-600 text-white border-0 shadow-md">
        Uninstall
      </button>
    </div>
  );
}