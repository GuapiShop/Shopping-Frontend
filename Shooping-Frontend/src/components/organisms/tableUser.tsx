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
        <>
            <table className="w-full">
                {/* Table header*/}
                <thead className="bg-[#eb354c] px-2 py-2">
                    <tr>
                        {arrayHeader.map((header)=>(
                            <th className="px-3 py-3 text-white text-lg">{header}</th>
                        ))}
                    </tr>
                </thead>

                {/* Table rows */}
                <tbody>
                    {arrayRows.map((user)=>(
                        <tr>
                            <td className="px-2 py-2 text-lg">{user.username}</td>
                            <td className="px-2 py-2 text-lg">{user.email}</td>
                            <td className="px-2 py-2 text-lg">{user.role}</td>
                            <td className="px-2 py-2 text-lg">{user.isActive ? "Yes" : "No"}</td>
                            <td className="px-2 py-2 text-lg">
                                <Link 
                                    label="Edit"
                                    link={`/user-edit/${user.id}`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableUser;