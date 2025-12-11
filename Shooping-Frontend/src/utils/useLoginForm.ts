import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Auth } from "../models/Auth";
import Swal from "sweetalert2";
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

        if( localStorage.getItem('token') !== '' && result.token ) {
            redirectMenuPage();
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: result.message,
                showConfirmButton: false,
                timer: 1500
            });
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