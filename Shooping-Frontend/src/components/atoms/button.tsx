import React from "react";

type ButtonProps = {
    label: string;
    color: string;
    disabled?: boolean;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ 
    label, 
    color, 
    disabled, 
    onClick 
}) => {
    return(
        <>
            <button
                color={color}
                disabled={disabled}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={onClick}
            >
                {label}
            </button>
        </>
    );
};

export default Button;