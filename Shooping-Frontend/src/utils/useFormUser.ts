import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ErrorUserDTO, UserCreateDTO } from "../models/User";
import { createUser } from "../services/userService";
import { validateEmptyField } from "./generalValidations";
import { validateUsername, validateEmail, validatePassword } from "./validateFormUser";
import { modalError, modalSuccess } from "../components/organisms/modalNotify";

export function useFormUser() {
    const navigate = useNavigate();
    const [isBtnSaveActive, setIsBtnSaveActive] = useState<boolean>(false);

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

    function redirect () {
        navigate('/');
    }

    function fieldsValidations( name: string, value: string ) {
        if (name === "email") {
            setError((prev) => ({
                ...prev,
                email: validateEmptyField(value) || validateEmail(value) || ''
            }));
        } else if (name === "password") {
            setError((prev) => ({  
                ...prev,
                password: validateEmptyField(value) || validatePassword(value) || ''
            }))
        } else if (name === "username") {
            setError((prev) => ({  
                ...prev,
                username: validateEmptyField(value) || validateUsername(value) || ''
            }))
        }
    } 

    const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;  
        fieldsValidations(name, value);
        setData((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    async function saveUser(){
        let result = await createUser(data);
        if(result.success){
            modalSuccess("Created", "User successfully created.")
            redirect();
        }else if(result.status===400){
            modalError("Warning", "Missing required fields.")
        } else {
            modalError("Error", "Error in server.")
        }
    }

    // if there are no errors and all fields are filled, enable the save button
    useEffect(() => {
        const noErrors = error.email === '' && error.password === '' && error.username === '';
        const allFieldsFilled = data.email !== '' && data.password !== '' && data.username !== '';
        setIsBtnSaveActive(allFieldsFilled && noErrors);
    }, [error, data]);

    return {
        fields, 
        onChangeFields,
        saveUser,
        redirect, 
        isBtnSaveActive
    };
}