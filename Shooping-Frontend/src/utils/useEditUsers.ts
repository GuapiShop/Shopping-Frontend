import { useState } from "react"
import type { User } from "../models/User"
import { updateUser } from "../services/userService"

export const useEditUsers = () => {

    const [idEdit, setIdEdit] = useState<number|null>(null)
    const [user, setUser] = useState<User> ({
        id: 0,
        username: "", 
        password: "", 
        email: "", 
        isActive: false,
        role: "",  
        createAt: "", 
        updateAt: "",
    })

    const setEditUser = (user:User) => {
        setIdEdit(user.id); 
        setUser(user); 
    }

    const handleUpdateUser = async () => {
        const result = await updateUser(user);
    }

    const handleChange = () => {
    }

    return {
        idEdit, 
        setEditUser,
        handleChange, 
        handleUpdateUser,
    }
}