import type React from "react";
import type { User, UserUpdateDTO } from "../../models/User";
import ModalDisable from "./modalDisable";
import type { ApiResponse } from "../../models/ApiResponse";
import ModalEnable from "./modalEnable";
import ButtonSave from "../molecules/buttonSave";
import ButtonEdit from "../molecules/buttonEdit"
import Input from "../atoms/input";
import ButtonCancel from "../molecules/buttonCancel";

type TableUserProps = {
    arrayHeader: string[];
    arrayRows: User[];
    idEdit: number | null;
    editUser: UserUpdateDTO;
    removeEditUser: () => void;
    setEditUser: (user:User) => void;
    handleUpdateUser: () => void
    onDisable: (id:number) => Promise<ApiResponse>;
    onEnable: (id:number) => Promise<ApiResponse>;
    onChangeFields: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const TableUser: React.FC<TableUserProps> = ({
    arrayHeader, 
    arrayRows, 
    idEdit,
    editUser, 
    removeEditUser, 
    setEditUser,  
    onDisable, 
    onEnable, 
    onChangeFields, 
    handleUpdateUser
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
                            {idEdit !== null && user.id===idEdit ? (
                                <>
                                    <td className="px-2 py-2 text-lg">
                                        <Input 
                                            name="username"
                                            type="text"
                                            onChange={onChangeFields}
                                            value={editUser.username}
                                            placeholder="Username"
                                        />
                                    </td>
                                    <td className="px-2 py-2 text-lg">
                                        <Input 
                                            name="email"
                                            type="text"
                                            onChange={onChangeFields}
                                            value={editUser.email}
                                            placeholder="Email"
                                        />
                                    </td>
                                    <td className="px-2 py-2 text-lg">{user.role}</td>
                                    <td className="px-2 py-2 text-lg">{user.isActive ? "Yes" : "No"}</td>
                                    
                                    <td className="flex justify-center px-2 py-2 text-lg">
                                        <ButtonSave 
                                            isDisabled={false}
                                            onSave={() => handleUpdateUser()}
                                        />
                                        <ButtonCancel
                                            onCancel={() => removeEditUser()}
                                        /> 
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="px-2 py-2 text-lg">{user.username}</td>
                                    <td className="px-2 py-2 text-lg">{user.email}</td>
                                    <td className="px-2 py-2 text-lg">{user.role}</td>
                                    <td className="px-2 py-2 text-lg">{user.isActive ? "Yes" : "No"}</td>
                                    <td className="flex justify-center px-2 py-2 text-lg">
                                        <ButtonEdit 
                                            isDisabled={(user.role === "admin") ? true : false}
                                            setEdit={() => setEditUser(user)}
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
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableUser;