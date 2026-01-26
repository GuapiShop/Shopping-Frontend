import React from 'react';
import LinkGroup from '../molecules/linkGroup';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

const MainHeader: React.FC = () => {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/main-page');
  } 

  return (
    <>
      {/*Image Logo*/}
      <div className='flex bg-[#eb354c] p-5 mb-4'>  
        <img 
          className='h-12 mx-auto min-h-20 hover:cursor-pointer'
          src="/guapishop.png" 
          alt="Logo" 
          onClick={
            handleLogoClick
          } 
        />
        <button
          title='Log Out'
          className="text-white mt-2 hover:cursor-pointer "
          onClick={() => {
            logout();
            navigate('/');
          }}
        >
          <ArrowLeftStartOnRectangleIcon className='h-10 w-9 text-white font-semibold' />
        </button>
      </div>

      {/*Group of Links*/}
      <LinkGroup />

      <div className='mx-30 py-4'>
        <hr className='text-gray-500 opacity-50'/>
      </div>
    </>
  );
} 

export default MainHeader;