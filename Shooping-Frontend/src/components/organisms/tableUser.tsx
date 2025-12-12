import type React from "react";
import type { User } from "../../models/User";
import Link from "../atoms/link";

type TableUserProps = {
    arrayHeader: string[];
    arrayRows: User[];
}

const TableUser: React.FC<TableUserProps> = ({
    arrayHeader, 
    arrayRows, 
}) => {
    return (
        arrayRows ? (
        <>
            <table>
                {/* Table header*/}
                <thead>
                    <tr>
                        {arrayHeader.map((header)=>(
                            <th>{header}</th>
                        ))}
                    </tr>
                </thead>

                {/* Table rows */}
                <tbody>
                    {arrayRows.map((user)=>(
                        <tr>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.isActive ? "Yes" : "No"}</td>
                            <td>
                                <Link 
                                    label="edit"
                                    link={`/user-edit/${user.id}`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
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