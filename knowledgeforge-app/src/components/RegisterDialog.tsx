import React, { ChangeEvent, FormEvent, useState } from 'react'
import User from '../models/User'
import { BrowserRouter, Route, Routes, Link,useNavigate } from 'react-router-dom'

type Props = {}

const RegisterDialog = (props: Props) => {

    const [userName, setUserName]= useState('');
    const [email,setEmailID]=useState('');
    const [contactNumber,setContactNumber]=useState('');
    const [password,setPassword]=useState('');

    const navigate = useNavigate();

    const handleNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}= e.target;
        setUserName(value);
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

    const handleSubmit=async (e:FormEvent) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:4000/auth/user/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({userName,email,contactNumber,password}),
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


  return (
    <div className='flex-column justify-center items-center bg-[#fdebd7] w-fit bg-white m-auto w-auto'>
        <h1 className='mx-auto text-center'>Register</h1>
    
    <form onSubmit={handleSubmit} className='shadow-md p-8 mb-4 flex flex-col justify-center items-center '>
        <input className='border-2 ' type='text' name='name' value={userName} placeholder='Name' onChange={handleNameChange}/>
        
        <br/>
            <input className='border-2' type="email" name="email" value={email} placeholder='Email Id'  onChange={handleEmailChange} />
        
        <br/>

        
            <input className='border-2' type="text" name="number" value={contactNumber} placeholder='Contact Number' onChange={handleNumberChange} />
        
        <br/>
            <input className='border-2' type="text" name="password" value={password} placeholder='Password'  onChange={handlePasswordChange} />
        
        <br/>

        <button className='border-2 border-black p-2 mx-auto' type="submit">Create Account</button>

    </form>
    </div>
  );
}

export default RegisterDialog