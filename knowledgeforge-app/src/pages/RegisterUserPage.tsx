import React, { ChangeEvent, FormEvent, useState } from 'react'
import User from '../models/UserModel'
import { BrowserRouter, Route, Routes, Link,useNavigate } from 'react-router-dom'
import RegisterDialog from '../components/RegisterDialog';
import LoginPage from '../components/LoginDialog'
import logo from '../resources/knowledgeForge.jpeg'
type RegisterUserPage = {
    isLogin: boolean;
}

const RegisterUserPage : React.FC<RegisterUserPage>= ({isLogin}) =>{

    return (
        <div className=' flex flex-row justify-between bg-background_cream h-screen'>
            <div className='m-auto'>
                <img src={logo} className='w-1/2 h-100 ml-20'></img>
            </div>
            <div className='border-l w-2 border-solid border-gray-500 h-auto bg-light_blue'></div>
            {/* Load the login or register component depending on the value of isLogin variable */}
            <div className='align-center flex flex-col w-[500px] m-auto'>{(isLogin)?<LoginPage/>:<RegisterDialog/>}</div>
        </div> 
       
    )
};


export default RegisterUserPage