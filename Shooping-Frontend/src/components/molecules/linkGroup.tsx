import React from 'react';
import LinkHeader from '../atoms/linkHeader';

const LinkGroup: React.FC = () => {
  return ( 
    <div className='content-baseline space-x-7 mx-auto mb-4'>
        {/*all user*/}
        <LinkHeader label="Home" link="/" />
        
        {/*admins*/}
        <LinkHeader label="Products" link="/products" />
        <LinkHeader label="Users" link="/users" />

        {/*customers*/}
    </div>
  );
}

export default LinkGroup;