import React, {useState} from 'react';
import courses from './models/Course';
import logo from './logo.svg';
import './App.css';
import AllCoursePage from './pages/AllCoursePage';

function App() {
  return (
    <div className="App">
      <AllCoursePage/>
    </div>
  );
}

export default App;
