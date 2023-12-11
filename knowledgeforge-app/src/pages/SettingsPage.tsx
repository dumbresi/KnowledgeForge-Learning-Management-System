// SettingsPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Paths from '../resources/paths'
import * as AuthService from '../services/auth-service'

const SettingsPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to update the theme (e.g., using context or localStorage)
  };

  const handleLogout = async () => {
    // Add logout logic (e.g., clearing authentication tokens)
    const response = await AuthService.logout();
    console.log(response);
    if(response!==null){
      navigate(Paths.loginPath);
    }
    
  };

  const handleDeleteAccount = () => {
    // Add logic to delete the user's account
    // This is a sensitive operation and should be handled with caution
    // It might involve asking for confirmation, password verification, etc.
    // For this example, we'll just navigate to the login page
    
    // AuthService.deleteAccount({"email":"sid@gmail.com"});
    navigate(Paths.loginPath);
  };

  const goToAccountDetails=()=>{
    navigate(Paths.userDetailsPath);
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Account Details</h2>
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={() => goToAccountDetails()}
          >
            View Account Details
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Theme</h2>
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <button
              className={`${
                darkMode ? 'bg-blue-500' : 'bg-gray-300'
              } text-white py-1 px-3 rounded-md transition duration-300 focus:outline-none`}
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Turn Off' : 'Turn On'}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Actions</h2>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 focus:outline-none"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
