import React from "react";
import SearchBox from "./SearchBox";
import searchHandler from "../pages/AllCoursePage";
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'

const Topbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="max-w-screen-x1 w-3/4">
            <SearchBox onSearch={searchHandler} />
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              Your Name
            </a>
            <a
              href="#"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              <Link to="/user/login">Login</Link>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
