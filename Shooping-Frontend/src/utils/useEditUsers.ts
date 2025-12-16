import { useState } from "react"
import type { UserUpdateDTO } from "../models/User"
import { updateUser } from "../services/userService"
import { modalError, modalSuccess, modalWarning } from "../components/organisms/modalNotify"

export const useEditUsers = (
    onUpdated: () => Promise<void>
) => {
    const [idEdit, setIdEdit] = useState<number|null>(null)
    const [editUser, setUser] = useState<UserUpdateDTO> ({
        id: 0,
        username: "", 
        email: "", 
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
    }

    const handleUpdateUser = async () => {
        const result = await updateUser(editUser);

        if (result.success) {
            await onUpdated();
            removeEditUser();
            modalSuccess("Disabled", "User successfully reactivated.")
        } else if (result.status===404){
            modalWarning("Warning", result.message)
        } else {
            modalError("Error", "Error in server.")
        }
    }

    const onChangeFields = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
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
    }
}