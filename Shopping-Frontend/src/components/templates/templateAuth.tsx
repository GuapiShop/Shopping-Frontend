import type React from "react";
import LoginForm from "../organisms/loginForm";
import BackgroundLogo from "../atoms/backgroundLogo";

const TempAuth: React.FC = () => {
    return(
        <>
            <BackgroundLogo />
            <LoginForm />
        </>
    );
}

export default TempAuth;