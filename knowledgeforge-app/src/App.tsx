import React, {useState} from 'react';
import courses from './models/Course';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import AllCoursePage from './pages/AllCoursePage';
import RegisterUserPage from './pages/RegisterUserPage';
import LoginPage from './components/LoginDialog';
import InstructorDetails from './pages/InstructorDetails';
import * as Paths from './resources/paths'

function App() {

  const isLogin=true;
  
  return (
    <div>
      

      <BrowserRouter>
      <Routes>
      <Route path="/" element={
        <div>
          <AllCoursePage/>
        </div>
      
      }/>
				<Route path={Paths.registerPath} element={<RegisterUserPage isLogin={false}/>} />
				<Route path={Paths.loginPath} element={<RegisterUserPage isLogin={true}/>}  />
        {/* <Route path="/instructor/profile" element={<InstructorDetails(...instructor)/>} /> */}
      </Routes>
				
			</BrowserRouter>
    </div>
    
  );
}

export default App;
