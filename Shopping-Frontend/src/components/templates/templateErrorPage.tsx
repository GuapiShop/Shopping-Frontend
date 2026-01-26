import React from 'react';

type TemplateErrorPageProps = {
    type: '401' | '500' | '404';
    errorMessage: string;
};

const TemplateErrorPage: React.FC<TemplateErrorPageProps> = ({
    type,
    errorMessage,
}) => {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold">
            {type}
        </h1>
        <p className="text-xl mt-4 text-center">
            {errorMessage}
        </p>
    </div>
    );

};

export default TemplateErrorPage;