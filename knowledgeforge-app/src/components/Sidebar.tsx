import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`lg:w-64 fixed inset-y-0 left-0 bg-gray-800 text-white ${isSidebarOpen ? '' : 'hidden'}`}>
      <div className="p-4">
        <div className="text-2xl font-bold mb-4">Course Categories</div>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:text-gray-300">Category 1</li>
          <li className="cursor-pointer hover:text-gray-300">Category 2</li>
          <li className="cursor-pointer hover:text-gray-300">Category 3</li>
          {/* Add more categories as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;