import React from "react";

type SelectProps = {
    message: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    value: string;
}

const Select: React.FC<SelectProps> = ({ 
    message, 
    options, 
    onChange, 
    value 
}) => {
    return (
        <select 
            value={value} 
            onChange={
                (e) => onChange(e.target.value)
            } 
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="">{message}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;