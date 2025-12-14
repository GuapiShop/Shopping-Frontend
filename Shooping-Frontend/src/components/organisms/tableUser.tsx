import type React from "react";
import type { User } from "../../models/User";
import Link from "../atoms/link";
import ModalDisable from "./modalDisable";
import type { ApiResponse } from "../../models/ApiResponse";
import ModalEnable from "./modalEnable";

type TableUserProps = {
    arrayHeader: string[];
    arrayRows: User[];
    onDisable: (id:number) => Promise<ApiResponse>
    onEnable: (id:number) => Promise<ApiResponse>
}

const TableUser: React.FC<TableUserProps> = ({
    arrayHeader, 
    arrayRows, 
    onDisable, 
    onEnable
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
                                {user.isActive ? ( 
                                    <ModalDisable 
                                        isDisabled={(user.role === "admin") ? true : false}
                                        message="Do you agree to deactivate this user?"
                                        onDisable={() => onDisable(user.id)}
                                    />
                                ):(
                                    <ModalEnable 
                                        message="Do you agree to reactivate this user?"
                                        onEnable={() => onEnable(user.id)}
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableUser;