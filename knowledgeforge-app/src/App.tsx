import React, {useState} from 'react';
import courses from './models/Course';
import logo from './logo.svg';
import './App.css';
import AllCoursePage from './pages/AllCoursePage';
import RegisterUserPage from './pages/RegisterUserPage';

function App() {
  return (
    <div className="coursepage">
      <RegisterUserPage/>
    </div>
  );
}

export default App;
