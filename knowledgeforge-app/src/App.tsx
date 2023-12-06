import React, {useState} from 'react';
import courses from './models/Course';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import AllCoursePage from './pages/AllCoursePage';
import RegisterUserPage from './pages/RegisterUserPage';
import LoginPage from './pages/LoginPage';
import InstructorDetails from './pages/InstructorDetails';

function App() {
  
  return (
    <div>
      

      <BrowserRouter>
      <Routes>
      <Route path="/" element={
        <div>
          <AllCoursePage/>
        </div>
      
      }/>
				<Route path="/user/register" element={<RegisterUserPage/>} />
				<Route path="/user/login" element={<LoginPage/>} />
        {/* <Route path="/instructor/profile" element={<InstructorDetails(...instructor)/>} /> */}
      </Routes>
				
			</BrowserRouter>
    </div>
    
  );
}

export default App;
