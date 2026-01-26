import React from "react";

type SelectProps = {
    name: string;
    message: string;
    options: { value: string; label: string }[];
    onChange:  (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

const Select: React.FC<SelectProps> = ({ 
    name,
    message, 
    options, 
    onChange, 
    value, 
}) => {
    return (
        <>
            <select 
                name={name}
                value={value} 
                onChange={onChange} 
                className="border border-gray-300 rounded-md p-2 w-full bg-gray-200"
            >
                <option value="">{message}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Select;