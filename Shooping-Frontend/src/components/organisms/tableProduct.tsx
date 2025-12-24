import type React from "react";
import type { Product } from "../../models/Product";
import type { ApiResponse } from "../../models/ApiResponse";
import ModalDisable from "./modalDisable";
import ModalEnable from "./modalEnable";

type TableProductProps = {
    arrayHeader: string[];
    arrayRows: Product[];
    onDisable: (id: number) => Promise<ApiResponse>;
    onEnable: (id: number) => Promise<ApiResponse>;
}

const TableProduct: React.FC<TableProductProps> = ({
    arrayHeader,
    arrayRows, 
    onDisable,
    onEnable
}) => {
    return (
        <>
            <table className="w-full">
                <thead className="bg-[#eb354c] px-2 py-2">
                    <tr>
                        {arrayHeader.map((header)=>(
                            <th className="px-3 py-3 text-white text-lg">{header}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {arrayRows.map((product) => (
                        <tr>
                            <td className="px-2 py-2 text-lg">{product.name}</td>
                            <td className="px-2 py-2 text-lg">{product.description}</td>
                            <td className="px-2 py-2 text-lg">{product.category}</td>
                            <td className="px-2 py-2 text-lg">{product.price}</td>
                            <td className="px-2 py-2 text-lg">{product.codeCABYS}</td>
                            <td className="px-2 py-2 text-lg">{product.isActive ? "Yes" : "No"}</td>
                            <td className="flex justify-center px-2 py-2 text-lg">
                                {product.isActive ? (
                                    <>
                                        <ModalDisable 
                                            message="Do you agree to deactivate this product?"
                                            onDisable={() => onDisable(product.id)}
                                        />
                                    </>
                                ): (
                                    <>
                                        <ModalEnable
                                            message="Do you agree to enble this product?"
                                            onEnable={() => onEnable(product.id)}
                                        />
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableProduct;

