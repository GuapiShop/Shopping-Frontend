import React from 'react';
import LinkHeader from '../atoms/linkHeader';

const LinkGroup: React.FC = () => {
  return ( 
    <div className='content-baseline space-x-7 mx-auto mb-4'>
        {/*all user*/}
        <LinkHeader label="Home" link="/main-page" />
        
        {localStorage.getItem("role") === "admin" ? (
          // admin links
          <>
            <LinkHeader label="Users" link="/user" />
            <LinkHeader label="Products" link="/product/add" />
          </>
        ) : (
          // customers links
          <>
          </>
        )}
    </div>
  );
}

export default LinkGroup;