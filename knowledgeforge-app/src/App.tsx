import React, {useState} from 'react';
import courses from './models/Course';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link, Router } from 'react-router-dom'
import AllCoursePage from './pages/AllCoursePage';
import RegisterUserPage from './pages/RegisterUserPage';
import LoginPage from './components/LoginDialog';
import InstructorDetails from './pages/InstructorDetails';
import UserPage from './pages/UserPage';
import * as Paths from './resources/paths'
import CourseDetails from './components/CourseDetails';
import AddCourse from './components/AddCourseCard';
import AddCoursePage from './pages/AddCoursePage';
import Sidebar from './components/Sidebar';

function App() {
  const isLogin = true;

  const category=(category:string)=>{
// TODO
  }
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={
        <div>
          <AllCoursePage pageType={'allCourses'} />
          {/* {<UserPage/>} */}
        </div>
      
      }/>
        <Route element={<Sidebar category={category}/>}></Route>
				<Route path={Paths.registerPath} element={<RegisterUserPage isLogin={false}/>} />
				<Route path={Paths.loginPath} element={<RegisterUserPage isLogin={true}/>}  />
        <Route path={Paths.courseDetailsPath} element={<CourseDetails/>}  />
        <Route path="/user/current" element={<UserPage/>}  />
        <Route path="/instructor/current" element={<InstructorDetails/>} />
        <Route path="/instructor/current/addcourse" element={<AddCoursePage/>}  />
        
      </Routes>
				
			</BrowserRouter>
    </div>
  );
}

export default App;
