import React from "react";

type LabelProps = {
    text: string;
};

const Label: React.FC<LabelProps> = ({ 
    text, 
}) => {
    return (
        <>
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
                {text}
            </label>
        </>
    );
}

export default Label;