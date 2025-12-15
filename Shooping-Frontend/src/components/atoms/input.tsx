import type React from "react";

type InputProps = {
    value: string | number;
    type: string;
    name: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, type, placeholder, onChange, name }) => {
    return(
        <>
            <input
                type= {type}
                name={name}
                placeholder={placeholder} 
                value={value}   
                onChange={onChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-600"
            />
        </>
    );
} 

export default Input;