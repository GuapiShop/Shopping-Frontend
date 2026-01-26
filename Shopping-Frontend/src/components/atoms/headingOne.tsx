import React from "react";

type HeadingProps = {
    label: string;
}

const HeadingOne: React.FC<HeadingProps> = ({ 
    label 
}) => {
    return (
        <>
            <h1 
                className="font-bold mb-4 text-center text-2xl"
            >
                {label}
            </h1>
        </>
    );
}

export default HeadingOne;