import React, { ChangeEvent, FormEvent, useState } from 'react'
import User from '../models/User'

type Props = {}

const RegisterUserPage : React.FC= ()=>{
    const [userData, setUserData]= useState<User>({
        userID : '',
        userName: '',
        emailID: '',
        profile_picture: '',
        contactNumber: '',
        access_token: ''
    })

    const [userName, setUserName]= useState('');
    const [emailID,setEmailID]=useState('');
    const [contactNumber,setContactNumber]=useState('');

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


    const handleInputChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const{name,value}= e.target;
        setUserData({...userData,
        [name]:value
        });
    }

    const handleSubmit=async (e:FormEvent) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:4000/user/profile',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({userID:'',userName,emailID,profile_picture:'',contactNumber,access_token: ''}),
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
                <input type='text' name='name' value={userName} onChange={handleNameChange}/>
            </label>
            <br/>

            <label>
                Email:
                <input type="email" name="email" value={emailID} onChange={handleEmailChange} />
            </label>
            <br/>

            <label>
                Contact number:
                <input type="text" name="number" value={contactNumber} onChange={handleNumberChange} />
            </label>
            <br/>

            <button type="submit">Submit</button>

        </form>
        </div>
      );
};


export default RegisterUserPage