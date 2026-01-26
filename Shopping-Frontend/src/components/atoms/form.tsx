import React from "react"

type FormProps = {
    color: string
    className: string
    children: React.ReactNode
}

const Form: React.FC<FormProps> = ({ 
    color, 
    className, 
    children 
}) => {
    return(
        <>
            <div
                className={className} 
                color={color}
            >
                {children}
            </div>
        </>
    );
}

export default Form;