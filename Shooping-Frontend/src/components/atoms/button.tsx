import React from "react";

type ButtonProps = {
    label: string;
    disabled?: boolean;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ 
    label, 
    disabled, 
    onClick 
}) => {
    return(
        <>
            <button
                disabled={disabled}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-70 disabled:cursor-not-allowed hover:cursor-pointer"
                onClick={onClick}
            >
                {label}
            </button>
        </>
    );
};

export default Button;