import { useState } from "react";
import Swal from "sweetalert2";
import type { ErrorUserDTO, UserCreateDTO } from "../models/User";
import { createUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

export function useFormUser() {
    
    const navigate = useNavigate();

    const [data, setData] =  useState <UserCreateDTO> ({
        username: '',
        email: '', 
        password: '' 
    })

    const [error, setError] = useState <ErrorUserDTO> ({
        username: '', 
        email: '', 
        password: ''
    })

    const fields = [
        {
            label: "Username",
            name: "username",
            placeholder: "Username",
            value: data.username,
            type: "text", 
            error: error.username
        }, {
            label: "Email",
            name: "email",
            placeholder: "Email",
            value: data.email,
            type: "text", 
            error: error.email
        },  {
            label: "Password",
            name: "password",
            placeholder: "Password",
            value: data.password,
            type: "password", 
            error: error.password
        }
    ];

    const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;   
    
        setData((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    async function saveUser(){
        
        let result = await createUser(data);

        if(result.success){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "User created",
                showConfirmButton: false,
                timer: 1500
            });
            redirect();
        }else{
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Error",
                showConfirmButton: false,
                timer: 1500
            });
            
            setError({
                email: result.data.errors.Email?.[0], 
                password: result.data.errors.Password?.[0], 
                username: result.data.errors.Username?.[0]
            })
        }
    }

    function redirect () {
        navigate('/');
    }

    return {
        fields, 
        onChangeFields,
        saveUser,
        redirect
    };
}