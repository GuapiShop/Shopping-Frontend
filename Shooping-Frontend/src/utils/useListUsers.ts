import { useEffect, useState } from "react";
import type { User } from "../models/User";
import { getAllUsers, disableUser } from "../services/userService";
import type { ApiResponse } from "../models/ApiResponse";

export const useListUsers = () => {
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1); 
    const [pageSize] = useState<number>(1);
    const [row, setRow] = useState<User[]>([]);

    const header = [
        "Username", 
        "Email", 
        "Role", 
        "Is Active",
        "Actions"
    ]

    useEffect(() => {
        const fetchUsers = async() => {
            const data = await getAllUsers(page, pageSize);
            setRow(data.data);
            setTotalPage(data.totalPage);
        }
        fetchUsers();
    }, [page, pageSize])

    const changePreviousPage = () => {
        setPage(prev => prev > 1 ? prev-1 : 1)
    }

    const changeNextPage = () => {
        setPage(prev => prev > totalPage ? prev+1 : totalPage )
    }

    async function disable ( id:number ) : Promise<ApiResponse>{
        const result = await disableUser(id);
        return result;
    }

    return {
        header,
        row, 
        page,
        totalPage, 
        changePreviousPage, 
        changeNextPage,
        disable, 
    }
}   