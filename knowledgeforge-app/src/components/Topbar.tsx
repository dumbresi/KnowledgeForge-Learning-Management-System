import React, { useState, useEffect ,useRef} from "react";
import SearchBox from "./SearchBox";
import { logout } from "../services/auth-service";
import { Link,useNavigate } from "react-router-dom";
import Course from "../models/Course";
import * as Paths from '../resources/paths'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'
import { signOut } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

type Props = {
  onSearch: (query: string) => void ;
};

const Topbar = ({ onSearch }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially set to false
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const { currentUser, loading, error } = useSelector((state:RootState)=>state.user);
  // Simulating a login action when the component mounts
  // useEffect(() => {
  //   setIsLoggedIn(true);
  // }, []);

  const handleLogin = () => {
    navigate(Paths.loginPath)
    // return <Link to="/user/login" />;
  };
  const handleLogout = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      dispatch(signOut());
      // Handle successful logout actions, if needed
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle logout failure
      // For example, display an error message to the user
    }
  };
  const takeToProfilePage: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(Paths.userDetailsPath);
  };

  function searchHandler(query: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="max-w-screen-x1 w-3/4">
          <SearchBox onSearch={onSearch} />
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <button className="text-xl font-semibold text-gray-500 dark:text-white" onClick={takeToProfilePage}>
            {currentUser?.userName}
          </button>

            {currentUser?.userName ? (
                <button onClick={handleLogout} className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Logout
                </button>
              ) : (
                <button onClick={handleLogin} className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
