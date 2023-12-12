import React, { useState, ChangeEvent, FormEvent } from 'react';
import { BrowserRouter, Route, Routes, Link,useNavigate } from 'react-router-dom'
import * as AuthService from '../services/auth-service'
import * as Paths from '../resources/paths'
import { useDispatch, useSelector } from 'react-redux';
import {signInSuccess} from '../redux/user/userSlice';
import UserModel from '../models/UserModel';

function Login(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [activeTab, setActiveTab] = useState('student');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  async function loginUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(activeTab==='student'){
      const response = await AuthService.loginUser(JSON.stringify({email,password}));

    const data = await response.json();
    const storeData= {
      userName:data.sanitizedUser.userName,
      email:data.sanitizedUser.email,
      contactNumber:data.sanitizedUser.contactNumber,
      userType:'user'
    }
    console.log(storeData);
    if(response.status===200){
      dispatch(signInSuccess(storeData))
      navigate('/');
    }

    }
    if(activeTab==='instructor'){
      const response =  await AuthService.loginInstructor(JSON.stringify({email,password}));
  
      const data = await response.json();
      // Handle the 'data' as needed
      const storeData= {
        userName:data.userName,
        email:data.email,
        contactNumber:data.contactNumber,
        userType:'user'
      }
      
      if(response.status===200){
        dispatch(signInSuccess(storeData))
        navigate('/');
      }
    }

  }

  const takeToSignUpPage=()=>{
    console.log("take user to register page")
    navigate(Paths.registerPath);
  }

  return (
    <div className="Login bg-white">
      <div className="tabs flex flex-row justify-between">
          <div
            className={`tab ${activeTab === 'instructor' ? 'active' : ''}  w-1/2 border-2 p-2 hover:bg-light_blue transition text-center  ${
              activeTab === 'instructor' ? 'bg-light_blue text-white' : ''
            }`}
            onClick={() => handleTabClick('instructor')}
          >
            Instructor Login
          </div>
          <div
            className={`tab ${activeTab === 'student' ? 'active' : ''}  w-1/2 border-2 p-2  hover:bg-light_blue transition text-center  ${
              activeTab === 'student' ? 'bg-light_blue text-white' : ''
            }`}
            onClick={() => handleTabClick('student')}
          >
            Student Login
          </div>
      </div>

      <div className="login-content">
        {activeTab === 'instructor' && (
          <div className='flex-column justify-center items-center'>
            <h2 className='m-auto text-center'>Instructor Login</h2>
            {/* Add instructor login form here */}
            <div className='flex-column justify-center items-center bg-[#fdebd7] w-fit bg-white m-auto w-auto'>
              <form onSubmit={loginUser}>
            
                <input
                  className='border-2 w-60 m-2'
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  type="email"
                  placeholder='Instructor Email'
                />
                <br/>
            
                <input
                  className='border-2 w-60 m-2'
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  type="password"
                  placeholder='Instructor Password'
                />
        
              <br />
        {/* <input type="submit" value="Login" /> */}
		          <button className='border-2 border-black  rounded-md  bg-light_blue w-60 m-2' type="submit">Submit</button>
              <div className='text-center m-auto'>New user? <button onClick={takeToSignUpPage}>Sign Up</button></div>
            </form>
                </div>

          </div>
        )}

        {activeTab === 'student' && (
          <div className=''>
            <h2 className='text-center'>Student Login</h2>
            {/* Add student login form here */}
            <div className='flex-column justify-center items-center bg-[#fdebd7] w-fit bg-white m-auto w-auto'>
              <form onSubmit={loginUser}>
          
                <input
                className='border-2 w-60 m-2'
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  type="email"
                  placeholder='Email'
                />
            
                <br/>
            
            <input
              className='border-2 w-60 m-2'
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  type="password"
                  placeholder='Passowrd'
                />
        
        <br />
        {/* <input type="submit" value="Login" /> */}
		<button className='border-2 border-black  rounded-md  bg-light_blue w-60 m-2' type="submit">Submit</button>
    <div className='text-center m-auto'>New user? <button className='text-light_blue' onClick={takeToSignUpPage}>Sign Up</button></div>
      </form>

    </div>
          </div>
        )}
      </div>
    </div>

    
  );
}

export default Login;
