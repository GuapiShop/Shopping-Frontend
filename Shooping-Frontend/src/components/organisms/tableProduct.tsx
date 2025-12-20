import type React from "react";
import type { Product } from "../../models/Product";

type TableProductProps = {
    arrayHeader: string[];
    arrayRows: Product[];
}

const TableProduct: React.FC<TableProductProps> = ({
    arrayHeader,
    arrayRows, 
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
                            <td className="flex justify-center px-2 py-2 text-lg">
                                Delete and Edit Accions    
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableProduct;

