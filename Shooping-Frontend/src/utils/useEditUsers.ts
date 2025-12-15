import { useState } from "react"
import type { UserUpdateDTO } from "../models/User"
import { updateUser } from "../services/userService"
import Swal from "sweetalert2"

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
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Update user",
                showConfirmButton: false,
                timer: 1500
            });
            removeEditUser();
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Error",
                showConfirmButton: false,
                timer: 1500
            });
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