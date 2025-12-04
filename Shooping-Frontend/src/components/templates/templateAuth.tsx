import type React from "react";
import LoginForm from "../organisms/loginForm";

const TempAuth: React.FC = () => {
    return(
        <>
            <div className="bg-red-500 px-8 py-8"> 
                <h1 className="text-white font-bold text-3xl text-center">"Logo"</h1>    
            </div>    
            <LoginForm />
        </>
    );
}

export default TempAuth;