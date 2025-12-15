import { useCallback, useEffect, useState } from "react";
import type { User } from "../models/User";
import { getAllUsers, disableUser, enableUser } from "../services/userService";
import type { ApiResponse } from "../models/ApiResponse";

export const useListUsers = () => {
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1); 
    const pageSize = 10;
    const [row, setRow] = useState<User[]>([]);

    const header = [
        "Username", 
        "Email", 
        "Role", 
        "Is Active",
        "Actions"
    ]

    const fetchUsers = useCallback(async () => {
        const data = await getAllUsers(page, pageSize);
        setRow(data.data);
        setTotalPage(data.totalPage);
    }, [page, pageSize]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    const changePreviousPage = () => {
        setPage(prev => prev > 1 ? prev-1 : 1)
    }

    const changeNextPage = () => {
        setPage(prev => prev < totalPage ? prev+1 : totalPage )
    }

    async function disable ( id:number ) : Promise<ApiResponse>{
        const result = await disableUser(id);
        if (result.success) {
            await fetchUsers()
        }
        return result;
    }

    async function enable ( id:number ) : Promise<ApiResponse>{
        const result = await enableUser(id);

        console.log("Result", result)

        if (result.success) {
            await fetchUsers()
        }
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
        enable,
        fetchUsers, 
    }
}   