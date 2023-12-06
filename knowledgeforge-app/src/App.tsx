import React, {useState} from 'react';
import courses from './models/Course';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllCoursePage from './pages/AllCoursePage';
import RegisterUserPage from './pages/RegisterUserPage';
import LoginPage from './pages/LoginPage';
import InstructorDetails from './pages/InstructorDetails';
import UserPage from './pages/UserPage';

function App() {
  
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage/>}/>
        <Route path="/" element={<AllCoursePage/>}/>
				<Route path="/user/register" element={<RegisterUserPage/>} />
				<Route path="/user/login" element={<LoginPage/>} />
        {/* <Route path="/instructor/profile" element={<InstructorDetails(...instructor)/>} /> */}
      </Routes>
				
			</BrowserRouter>
    
  );
}

export default App;
