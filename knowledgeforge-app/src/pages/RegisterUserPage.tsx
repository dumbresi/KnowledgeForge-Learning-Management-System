import React, { ChangeEvent, FormEvent, useState } from 'react'
import User from '../models/User'
import { BrowserRouter, Route, Routes, Link,useNavigate } from 'react-router-dom'

type Props = {}

const RegisterUserPage : React.FC= ()=>{
    const [userData, setUserData]= useState<User>({
        userID : '',
        userName: '',
        email: '',
        profile_picture: '',
        contactNumber: '',
        access_token: ''
    })

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


    const handleInputChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const{name,value}= e.target;
        setUserData({...userData,
        [name]:value
        });
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
        <div>
            <h1>Register</h1>
        
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input className='border-2' type='text' name='name' value={userName} onChange={handleNameChange}/>
            </label>
            <br/>

            <label>
                Email:
                <input className='border-2' type="email" name="email" value={email} onChange={handleEmailChange} />
            </label>
            <br/>

            <label>
                Contact number:
                <input className='border-2' type="text" name="number" value={contactNumber} onChange={handleNumberChange} />
            </label>
            <br/>

            <label>
                Password:
                <input className='border-2' type="text" name="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br/>

            <button className='border-2 border-black p-2' type="submit">Submit</button>

        </form>
        </div>
      );
};


export default RegisterUserPage