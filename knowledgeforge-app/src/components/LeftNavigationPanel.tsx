import React, { useState } from 'react';

const LeftNavigationPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button className="fixed left-0 z-50 p-4 text-black focus:outline-none text-4xl" onClick={togglePanel}>
        &#9776;
      </button>
      <div className={`fixed inset-y-0 left-0 z-40 bg-zinc-100 w-64 transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 mt-12">
          <span className="text-black">Left Panel</span>
          <div></div>
        </div>
        <ul className="py-4">
          <li className="px-4 py-2 text-black-300 hover:bg-gray-800 cursor-pointer">Menu Item 1</li>
          <li className="px-4 py-2 text-black-300 hover:bg-gray-800 cursor-pointer">Menu Item 2</li>
          <li className="px-4 py-2 text-black-300 hover:bg-gray-800 cursor-pointer">Menu Item 3</li>
        </ul>
      </div>
      <div className={`fixed inset-0 bg-black opacity-50 z-30 ${isOpen ? 'block' : 'hidden'}`} onClick={togglePanel}></div>
    </div>
  );
};

export default LeftNavigationPanel;
