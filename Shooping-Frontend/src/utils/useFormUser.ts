import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import type { ErrorUserDTO, UserCreateDTO } from "../models/User";
import { createUser } from "../services/userService";
import { validateEmptyField } from "./generalValidations";
import { validateUsername, validateEmail, validatePassword } from "./validateFormUser";

export function useFormUser() {
    
    const navigate = useNavigate();
    const [isBtnSaveActive, setIsBtnSaveActuve] = useState<boolean>(false);

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

        // Validation for create a user
        if (name === "email" && !validateEmail(value)) {
            setError((prev) => ({
                ...prev,
                email: 'This is not a valid email address'
            }));
        } else if (name === "password" && !validatePassword(value)) {
            setError((prev) => ({  
                ...prev,
                password: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&)'
            }))
        } else if ( name === "username" && !validateUsername(value)) {
            setError((prev) => ({  
                ...prev,
                username: 'Username must be at least 3 characters long'
            }))
        } else {
            setError((prev) => ({
                ...prev,
                [name]: ''
            }));
        }

        setData((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    async function saveUser(){
        
        // Final validation before send data, empty fields
        if (validateEmptyField(data.username) ||
            validateEmptyField(data.email) ||
            validateEmptyField(data.password)) { 
            setError((prev)=> ({
                ...prev,
                username: validateEmptyField(data.username) ? 'This field is required' : '',
                email: validateEmptyField(data.email) ? 'This field is required' : '',
                password: validateEmptyField(data.password) ? 'This field is required' : '',
            }))
            return;
        }
        
        let result = await createUser(data);
        console.log(result);

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