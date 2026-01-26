import React from "react";
import { useNavigate } from "react-router-dom";

type LinkProps = {
    label: string;
    link: string;
};

const Link: React.FC<LinkProps> = ({ 
    label, 
    link
}) => {

    const navigate = useNavigate();

    const handleClickLink = () => {
        navigate(link)
    }

    return (
        <>
            <a 
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:cursor-pointer"
                onClick={handleClickLink}
            >
                {label}
            </a>
        </>
    );
} 
export default Link;