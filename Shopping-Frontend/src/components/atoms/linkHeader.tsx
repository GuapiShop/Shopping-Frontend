import React from 'react';

type LinkHeaderProps = {
    label: string;
    link: string;
}; 

const LinkHeader:React.FC<LinkHeaderProps> = ({
    label,
    link
}) => {
  return (
    <>
        <a className='text-black hover:text-gray-800 hover:cursor-pointer text-xl' href={link}>
            {label}
        </a>
    </>
  );
}

export default LinkHeader;