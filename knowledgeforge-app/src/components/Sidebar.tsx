import React, { useState, useEffect  } from "react";
import logo from "../resources/knowledgeForge.jpeg";
import SearchBox from "./SearchBox";
// import handleLogout from "../pages/AllCoursePage";
import { BsArrowLeftCircle, BsChevronDown } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import Menus from "./Menus";
import * as Paths from '../resources/paths'
import * as AuthService from '../services/auth-service'



import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  let smallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (smallScreen) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [smallScreen]);
  const navigate=useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout=async()=>{
    const response = await AuthService.logout();

    if(response.status==200){
      navigate(Paths.loginPath);
    }

  }

  return (
    <div>
      <div className={`h-screen p-3 space-y-2 ${isSidebarOpen? "w-60" : "w-24"} dark:bg-gray-900 dark:text-gray-100 duration-500 relative`}>
        <div className="flex items-center p-2 space-x-4">
          <img
            src={logo}
            alt=""
            className="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <div>
            <h2 className={`text-lg font-semibold origin-left duration-500 ${!isSidebarOpen && "scale-0"}`}>Knowledge Forge</h2>
          </div>
        </div>
        <div>
          <BsArrowLeftCircle className={`bg-white text-black text-4xl absolute -right-4 top-20 rounded-full border duration-500 cursor-pointer ${!isSidebarOpen && "rotate-180"}`} onClick={toggleSidebar}/>
        </div>
        <div className="divide-y dark:divide-gray-700">
          <ul className="pt-2">
            {Menus.map((menu,index) => (
              <>
              <li
              key={index}
              className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 ${menu.spacing ? "mt-14":"mt-2"} hover:bg-light_white rounded-md `}>
                <span className={`text-2xl block justify-center duration-500 ${!isSidebarOpen && "pl-4"} `}>{menu.icon}</span>
                <span className={`text-base font-medium flex-1 origin-left duration-200 ${!isSidebarOpen && "hidden"}`}>{menu.title}</span>
                {menu.submenu && isSidebarOpen && (
                  <BsChevronDown className="" onClick={() => 
                    setSubmenuOpen(!isSubmenuOpen)
                  }/>
                )}
              </li>
                
              {menu.submenu && isSubmenuOpen && isSidebarOpen && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 duration-500 hover:bg-light_white rounded-md`}>
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}

              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
