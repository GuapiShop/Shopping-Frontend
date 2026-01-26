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
            <LinkHeader label="Products" link="/product" />
          </>
        ) : (
          // customers links
          <>
            <LinkHeader label="Sports" link="/products?p=Sports" />
            <LinkHeader label="Health" link="/products?p=Health" />
            <LinkHeader label="Home Products" link="/products?p=Home" />
          </>
        )}
    </div>
  );
}

export default LinkGroup;