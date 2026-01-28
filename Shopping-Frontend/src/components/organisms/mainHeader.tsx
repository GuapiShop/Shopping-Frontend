import React, { useState } from 'react';
import LinkGroup from '../molecules/linkGroup';
import CartSidebar from './cartSidebar';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import { ArrowLeftStartOnRectangleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const MainHeader: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/main-page');
  } 

  const handleCartClick = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      {/*Image Logo*/}
      <div className='flex bg-[#eb354c] p-5 mb-4'>
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

        <img 
          className='h-12 mx-auto min-h-20 hover:cursor-pointer'
          src="/guapishop.png" 
          alt="Logo" 
          onClick={handleLogoClick} 
        />

        {localStorage.getItem("role") == "client" && (
          <button
            title='Shopping Cart'
            className="text-white mt-2 hover:cursor-pointer "
            onClick={() => {
              handleCartClick();
            }}
          >
            <ShoppingCartIcon className='h-10 w-9 text-white font-semibold'/>
          </button>
        )}
      </div>

      {/*Group of Links*/}
      <LinkGroup />

      <div className='mx-30 py-4'>
        <hr className='text-gray-500 opacity-50'/>
      </div>

      <CartSidebar  
        isOpen={isOpen}
        onClose={handleCartClick}
      />
    </>
  );
} 

export default MainHeader;