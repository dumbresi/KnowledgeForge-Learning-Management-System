import React from 'react';
import RegisterDialog from '../components/RegisterDialog';
import LoginPage from '../components/LoginDialog';
import logo from '../resources/knowledgeForge.jpeg';

type RegisterUserPageProps = {
  isLogin: boolean;
};

const RegisterUserPage: React.FC<RegisterUserPageProps> = ({ isLogin }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-background_cream min-h-screen'>
      <div className='m-auto'>
        <img src={logo} className='w-full md:w-1/2 h-auto' alt='Logo'></img>
      </div>
      <div className='border-l md:w-2 md:border-solid md:border-gray-500 h-auto bg-light_blue'></div>
      <div className='flex flex-col w-full md:w-[500px] p-4 md:p-8'>
        {isLogin ? <LoginPage /> : <RegisterDialog />}
      </div>
    </div>
  );
};

export default RegisterUserPage;
