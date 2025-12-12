import type React from "react";
import TableHeader from "../molecules/tableHeader";
import TableRow from "../molecules/tableRow";
import type { User } from "../../models/User";
import Link from "../atoms/link";

type TableUserProps = {
    arrayHeader: string[];
    arrayRows: User[];
}

const TableUser: React.FC<TableUserProps> = ({
    arrayHeader, 
    arrayRows
}) => {
    return (
        arrayRows ? (
        <>
            <table>
                <TableHeader 
                    array={arrayHeader}
                />
                {arrayRows.map((user)=>(
                    <TableRow 
                        array={ 
                            [
                                user.username, 
                                user.email, 
                                user.role,
                                user.isActive, 
                            ]
                        }
                    />
                ))}
            </table>
        </>
        ) : (
        <>
            <h1> No users </h1> <Link label="create user" link="/user-create"></Link>
        </>
        )
    );
}

export default TableUser;