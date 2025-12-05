import React from "react";

type HeadingProps = {
    label: string;
}

const HeadingTwo: React.FC<HeadingProps> = ({ 
    label 
}) => {
    return (
        <>
            <h1 
                className="font-bold mb-4 text-center"
            >
                {label}
            </h1>
        </>
    );
}

export default HeadingTwo;