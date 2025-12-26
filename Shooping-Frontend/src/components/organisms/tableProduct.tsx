import type React from "react";
import type { Product, ProductUpdateDTO, ErrorProductDTO } from "../../models/Product";
import type { ApiResponse } from "../../models/ApiResponse";
import ModalDisable from "./modalDisable";
import ModalEnable from "./modalEnable";
import Input from "../atoms/input";
import ErrorMessage from "../atoms/error";
import ButtonSave from "../molecules/buttonSave";
import ButtonCancel from "../molecules/buttonCancel";
import ButtonEdit from "../molecules/buttonEdit";

type TableProductProps = {
    arrayHeader: string[];
    arrayRows: Product[];
    idEdit: number | null;
    editProduct: ProductUpdateDTO;
    error: ErrorProductDTO;
    removeEditProduct: () => void;
    setEditProduct: (product:ProductUpdateDTO) => void;
    handleUpdateProduct: () => void;
    onDisable: (id: number) => Promise<ApiResponse>;
    onEnable: (id: number) => Promise<ApiResponse>;
    onChangeFields: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const TableProduct: React.FC<TableProductProps> = ({
    arrayHeader,
    arrayRows, 
    idEdit, 
    editProduct, 
    error,
    removeEditProduct, 
    setEditProduct, 
    handleUpdateProduct,
    onDisable,
    onEnable, 
    onChangeFields,
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
                            {idEdit !== null && product.id===idEdit ? (
                                <>
                                    <td className="px-2 py-2 text-lg">
                                        <div
                                            className="mb-4"
                                        >
                                            <Input 
                                                name="name"
                                                type="text"
                                                onChange={onChangeFields}
                                                value={editProduct.name}
                                                placeholder="Name"
                                            />
                                            {error.name && 
                                                <ErrorMessage 
                                                    message={error.name}
                                                />
                                            }
                                        </div>
                                    </td>
                                    <td className="px-2 py-2 text-lg">
                                        <div
                                            className="mb-4"
                                        >
                                            <Input 
                                                name="description"
                                                type="text"
                                                onChange={onChangeFields}
                                                value={editProduct.description}
                                                placeholder="Description"
                                            />
                                            {error.description && 
                                                <ErrorMessage 
                                                    message={error.description}
                                                />
                                            }
                                        </div>
                                    </td>
                                    <td className="px-2 py-2 text-lg">
                                        <div
                                            className="mb-4"
                                        >
                                            <Input 
                                                name="category"
                                                type="text"
                                                onChange={onChangeFields}
                                                value={editProduct.category}
                                                placeholder="Category"
                                            />
                                            {error.category && 
                                                <ErrorMessage 
                                                    message={error.category}
                                                />
                                            }
                                        </div>
                                    </td>
                                    <td className="px-2 py-2 text-lg">
                                        <div
                                            className="mb-4"
                                        >
                                            <Input 
                                                name="price"
                                                type="number"
                                                onChange={onChangeFields}
                                                value={editProduct.price}
                                                placeholder="Price"
                                            />
                                            {error.price && 
                                                <ErrorMessage 
                                                    message={error.price}
                                                />
                                            }
                                        </div>
                                    </td>
                                    <td className="px-2 py-2 text-lg">
                                        <div
                                            className="mb-4"
                                        >
                                            <Input 
                                                name="codeCABYS"
                                                type="text"
                                                onChange={onChangeFields}
                                                value={editProduct.codeCABYS}
                                                placeholder="Code CABYS"
                                            />
                                            {error.codeCABYS && 
                                                <ErrorMessage 
                                                    message={error.codeCABYS}
                                                />
                                            }
                                        </div>
                                    </td>
                                    <td className="px-2 py-2 text-lg">{product.isActive ? "Yes" : "No"}</td>
                                    <td className="flex justify-center px-2 py-2 text-lg">
                                        <ButtonSave 
                                            isDisabled={error.name!==""||error.description!==""||error.category!==""||error.codeCABYS!==""||error.price!==""}
                                            onSave={() => handleUpdateProduct()}
                                        />
                                        <ButtonCancel
                                            onCancel={() => removeEditProduct()}
                                        /> 
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="px-2 py-2 text-lg">{product.name}</td>
                                    <td className="px-2 py-2 text-lg">{product.description}</td>
                                    <td className="px-2 py-2 text-lg">{product.category}</td>
                                    <td className="px-2 py-2 text-lg">{product.price}</td>
                                    <td className="px-2 py-2 text-lg">{product.codeCABYS}</td>
                                    <td className="px-2 py-2 text-lg">{product.isActive ? "Yes" : "No"}</td>
                                    <td className="flex justify-center px-2 py-2 text-lg">
                                        <ButtonEdit
                                            isDisabled={false} 
                                            setEdit={() => setEditProduct(product)}
                                        />
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
                                </>
                            )} 
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableProduct;

