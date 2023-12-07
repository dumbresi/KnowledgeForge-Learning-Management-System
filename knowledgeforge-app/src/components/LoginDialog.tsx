import React, { useState, ChangeEvent, FormEvent } from 'react';
import { BrowserRouter, Route, Routes, Link,useNavigate } from 'react-router-dom'

function Login(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [activeTab, setActiveTab] = useState('student');

  const navigate = useNavigate();

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  async function loginUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(activeTab==='student'){
      const response = await fetch('http://localhost:4000/auth/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    // Handle the 'data' as needed

    if(response.status===200){
      navigate('/');
    }

    }
    if(activeTab==='instructor'){
      const response = await fetch('http://localhost:4000/auth/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
      // Handle the 'data' as needed
  
      if(response.status===200){
        navigate('/');
      }
    }
    

  }

  return (
    <div className="Login bg-white">
      <div className="tabs flex flex-row justify-between">
          <div
            className={`tab ${activeTab === 'instructor' ? 'active' : ''} ml-8 border-2 p-2`}
            onClick={() => handleTabClick('instructor')}
          >
            Instructor Login
          </div>
          <div
            className={`tab ${activeTab === 'student' ? 'active' : ''} mr-8 border-2 align-center justify-center`}
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
              <h1 className='mb-10'>Proceed to Login</h1>
              <form onSubmit={loginUser}>
            
                <input
                  className='border-2'
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  type="email"
                  placeholder='Instructor Email'
                />
                <br/>
            
                <input
                  className='border-2'
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  type="password"
                  placeholder='Instructor Password'
                />
        
        <br />
        {/* <input type="submit" value="Login" /> */}
		<button className='border-2 border-black p-2 rounded-md m-2 bg-light_blue' type="submit">Submit</button>
      </form>

    </div>

          </div>
        )}

        {activeTab === 'student' && (
          <div className=''>
            <h2 className='text-center'>Student Login</h2>
            {/* Add student login form here */}
            <div className='flex-column justify-center items-center bg-[#fdebd7] w-fit bg-white m-auto w-auto'>
              <h1 className='mb-10'>Proceed to Login</h1>
              <form onSubmit={loginUser}>
          
                <input
                className='border-2'
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  type="email"
                  placeholder='Email'
                />
            
                <br/>
            
            <input
              className='border-2'
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  type="password"
                  placeholder='Passowrd'
                />
        
        <br />
        {/* <input type="submit" value="Login" /> */}
		<button className='border-2 border-black p-2 rounded-md m-2 bg-light_blue' type="submit">Submit</button>
      </form>

    </div>
          </div>
        )}
      </div>
    </div>

    
  );
}

export default Login;
