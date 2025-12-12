import type React from "react";
import TableUser from "../organisms/tableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";
import type { User } from "../../models/User";

const TempListUsers: React.FC = () => {

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
            const data = await getAllUsers();
            setRow(data.data);
        }
        fetchUsers();
    })

    return(
        <>
            <TableUser 
                arrayHeader={header}
                arrayRows={row}
            />
        </>
    );
}

export default TempListUsers;