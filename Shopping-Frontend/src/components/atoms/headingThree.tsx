import React from "react";

type HeadingProps = {
    label: string;
    className: string;
}

const HeadingThree: React.FC<HeadingProps> = ({ 
    label, 
    className 
}) => {
    return (
        <>
            <h1 
                className={className}
            >
                {label}
            </h1>
        </>
    );
}

export default HeadingThree;