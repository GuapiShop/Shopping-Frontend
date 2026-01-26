import type React from "react";

type ErrorMessageProps = {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
    message
}) => {
    return(
        <>
            <p
                className="text-gray-500 text-sm mt-1"
            >
                {message}
            </p>
        </>
    );
}

export default ErrorMessage;