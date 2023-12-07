import React, { ChangeEvent, FormEvent, useState } from 'react'
import User from '../models/User'
import { BrowserRouter, Route, Routes, Link,useNavigate } from 'react-router-dom'

type Props = {}

const RegisterDialog = (props: Props) => {

    const [name, setname]= useState('');
    const [email,setEmailID]=useState('');
    const [contactNumber,setContactNumber]=useState('');
    const [password,setPassword]=useState('');
    const [university,setUniversity]=useState('');

    const [activeTab, setActiveTab]=useState('student');

    const navigate = useNavigate();

    const handleNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}= e.target;
        setname(value);
    }

    const handleEmailChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}= e.target;
        setEmailID(value);
    }

    const handleNumberChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}= e.target;
        setContactNumber(value);
    }

    const handlePasswordChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}= e.target;
        setPassword(value);
    }
    const handleUniversity=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}= e.target;
        setUniversity(value);
    }
    const handleTabClick = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
      };

    const handleSubmit=async (e:FormEvent) => {
        e.preventDefault();
        if(activeTab==='student'){
            try{
                const response = await fetch('http://localhost:4000/auth/user/register',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({name,email,contactNumber,password}),
                })
    
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                if(response.status===200){
                    navigate('../user/login');
                }
                
            }catch(error){
                console.error('Error submitting data',error)
            } 
        }
        if(activeTab==='instructor'){
            try {
                const response = await fetch('http://localhost:4000/auth/instructor/register',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({name,email,contactNumber,password,university}),
                })
                if(response.status===200){
                    navigate('../user/login');
                }

            } catch (error) {
                console.error('Error submitting data',error)
            }
        }
        
    }


  return (
    <div>
        <div className="tabs flex flex-row justify-between">
          <div
            className={`tab ${activeTab === 'instructor' ? 'active' : ''}  w-1/2 border-2 p-2 hover:bg-light_blue transition text-center`}
            onClick={() => handleTabClick('instructor')}
          >
            Instructor Register
          </div>
          <div
            className={`tab ${activeTab === 'student' ? 'active' : ''}  w-1/2 border-2 p-2  hover:bg-light_blue transition text-center`}
            onClick={() => handleTabClick('student')}
          >
            Student Register
          </div>
      </div>
      <div>
    {
        (activeTab==='student') && (
            <div className='flex-column justify-center items-center bg-[#fdebd7] w-full bg-white m-auto w-auto'>
            <h1 className='mx-auto text-center'>Student Register</h1>
        
        <form onSubmit={handleSubmit} className='shadow-md p-8 mb-4 flex flex-col justify-center items-center '>
            <input className='border-2 w-60' type='text' name='name' value={name} placeholder='Name' onChange={handleNameChange}/>
            <br/>
                <input className='border-2 w-60' type="email" name="email" value={email} placeholder='Email Id'  onChange={handleEmailChange} />
            <br/>
                <input className='border-2 w-60' type="text" name="number" value={contactNumber} placeholder='Contact Number' onChange={handleNumberChange} />
            <br/>
                <input className='border-2 w-60' type="text" name="password" value={password} placeholder='Password'  onChange={handlePasswordChange} />
            <br/>
            <button className='border-2  p-1 mx-auto bg-light_blue rounded-md' type="submit">Create Account</button>
        </form>
        </div>
        )
    }

{
        (activeTab==='instructor') && (
            <div className='flex-column justify-center items-center bg-[#fdebd7] w-full bg-white m-auto w-auto'>
            <h1 className='mx-auto text-center'>Instructor Register</h1>
        
        <form onSubmit={handleSubmit} className='shadow-md p-8 mb-4 flex flex-col justify-center items-center '>
            <input className='border-2 w-60' type='text' name='name' value={name} placeholder='Name' onChange={handleNameChange}/>
            <br/>
                <input className='border-2 w-60' type="email" name="email" value={email} placeholder='Email Id'  onChange={handleEmailChange} />
            <br/>
                <input className='border-2 w-60' type="text" name="number" value={contactNumber} placeholder='Contact Number' onChange={handleNumberChange} />
            <br/>
                <input className='border-2 w-60' type="text" name="password" value={password} placeholder='Password'  onChange={handlePasswordChange} />
            <br/>
                <input className='border-2 w-60' type="text" name="university" value={university} placeholder='University Name'  onChange={handleUniversity} />
            <br/>
            <button className='border-2  p-1 mx-auto bg-light_blue rounded-md' type="submit">Create Account</button>
        </form>
        </div>
        )
    }
    </div>

    </div>


  );
}

export default RegisterDialog;