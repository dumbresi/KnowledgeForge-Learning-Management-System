import React, {useState} from 'react';
import courses from './models/Course';
import logo from './logo.svg';
import './App.css';
import AllCoursePage from './pages/AllCoursePage';
import RegisterUserPage from './pages/RegisterUserPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="coursepage">
      <LoginPage/>
    </div>
  );
}

export default App;
