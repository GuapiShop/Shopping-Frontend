import React from "react";
import Select from "../atoms/select";
import Label from "../atoms/label";

type SelectLabeledProps = {
    name: string;
    label: string;
    message: string;
    options: { value: string; label: string }[];
    value: string;
    onChange:  (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectLabeled: React.FC<SelectLabeledProps> = ({ 
    name,
    label, 
    message,
    options,
    onChange,
    value,
}) => {
    return (
        <div className="mb-4">
            <Label 
                text={label} 
            />
            <Select
                name={name}
                message={message}
                options={options}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default SelectLabeled;