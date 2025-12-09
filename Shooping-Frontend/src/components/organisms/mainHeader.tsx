import React from 'react';
import LinkGroup from '../molecules/linkGroup';
import { useNavigate } from 'react-router-dom';

const MainHeader: React.FC = () => {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/home');
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
        </div>

        {/*Group of Links*/}
        <LinkGroup />
    </>
  );
} 

export default MainHeader;