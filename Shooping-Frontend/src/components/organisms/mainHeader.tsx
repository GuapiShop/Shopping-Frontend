import React from 'react';
import LinkGroup from '../molecules/linkGroup';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';

const MainHeader: React.FC = () => {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/main-page');
  } 

  return (
    <>
        {/*Image Logo*/}
        <div className='bg-[#eb354c] p-4 mb-4'>  
            <img 
                className='h-12 mx-auto min-h-20 hover:cursor-pointer'
                src="/guapishop.png" 
                alt="Logo" 
                onClick={
                  handleLogoClick
                } 
            />
            <button
                className="text-white mt-2"
                  onClick={() => {
                      logout();
                      navigate('/');
                  }
                }
            >
                Log Out
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