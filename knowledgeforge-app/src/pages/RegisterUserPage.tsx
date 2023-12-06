import React, { ChangeEvent, FormEvent, useState } from 'react'
import User from '../models/user'

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
                <input type='text' name='name' value={userName} className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' onChange={handleNameChange}/>
            </label>
            <br/>

            <label>
                Email:
                <input type="email" name="email" value={email} className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' onChange={handleEmailChange} />
            </label>
            <br/>

            <label>
                Contact number:
                <input type="text" name="number" value={contactNumber} onChange={handleNumberChange} />
            </label>
            <br/>

            <label>
                Password:
                <input type="text" name="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br/>

            <button type="submit">Submit</button>

        </form>
        </div>
      );
};


export default RegisterUserPage