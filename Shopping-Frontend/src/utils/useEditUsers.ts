import { useState } from "react"
import type { UserUpdateDTO } from "../models/User"
import { updateUser } from "../services/userService"
import { modalError, modalSuccess, modalWarning } from "../components/organisms/modalNotify"
import { validateEmptyField } from "./generalValidations"
import { validateEmail, validateUsername } from "./validateFormUser"

export const useEditUsers = (
    onUpdated: () => Promise<void>
) => {
    const [idEdit, setIdEdit] = useState<number|null>(null)
    const [editUser, setUser] = useState<UserUpdateDTO> ({
        id: 0,
        username: "", 
        email: "", 
    })

    const [error, setError] = useState<UserUpdateDTO> ({
        id: 0,
        username: '', 
        email: '', 
    })

    const setEditUser = (user:UserUpdateDTO) => {
        setIdEdit(user.id); 
        setUser(user);
    }

    const removeEditUser = () => {
        setIdEdit(null)
        setUser({
            id: 0, 
            email: "", 
            username: ""
        })
        setError({
            id: 0, 
            email: "", 
            username: ""
        })
    }

    const handleUpdateUser = async () => {
        const result = await updateUser(editUser);
        if (result.success) {
            await onUpdated();
            removeEditUser();
            modalSuccess("Updated", "User updated successfully.")
        } else if (result.status===404){
            modalWarning("Warning", result.message)
        } else {
            modalError("Error", "Error in server.")
        }
    }

    function fieldsValidations( name: string, value: string ) {
        if (name === "email") {
            setError((prev) => ({
                ...prev,
                email: validateEmptyField(value) || validateEmail(value) || ''
            }));
        } else if (name === "username") {
            setError((prev) => ({  
                ...prev,
                username: validateEmptyField(value) || validateUsername(value) || ''
            }))
        }
    } 

    const onChangeFields = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        fieldsValidations(name, value);
        setUser ((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    return {
        idEdit, 
        editUser, 
        setEditUser,
        removeEditUser, 
        onChangeFields, 
        handleUpdateUser,
        error
    }
}