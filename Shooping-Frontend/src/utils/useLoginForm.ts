import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Auth } from "../models/Auth";
import { modalWarning } from "../components/organisms/modalNotify";
import { login } from "../services/authService";

export function useLoginForm() {
    const navigate = useNavigate(); 

    const [credentials, setCredentials] = useState<Auth>({
        email: "", 
        password: "",
    });

    const onChangeFields = ( event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCredentials ((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    async function logIn () {
        const result = await login(credentials);
        if( result.status===200 && localStorage.getItem('token') !== '' && result.token ) {
            redirectMenuPage();
        } else if (result.status===404){
            modalWarning("Warning", "User email does not match password.")
        }
    }

    function redirectMenuPage () {
        navigate('main-page');
    }
    
    return {
        credentials, 
        onChangeFields,
        logIn,
    }; 
} 