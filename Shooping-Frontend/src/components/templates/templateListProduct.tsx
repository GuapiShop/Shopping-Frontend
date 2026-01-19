import React from "react";
import { useListProduct } from "../../utils/useListProduct";
import TableProduct from "../organisms/tableProduct";
import Pagination from "../molecules/pagination";
import Link from "../atoms/link";
import { useEditProduct } from "../../utils/useEditProduct";
import Button from "../atoms/button";

const TemplateListProduct: React.FC = () => {

    const {
        header, 
        row, 
        page, 
        totalPage,
        changePreviousPage, 
        changeNextPage,
        disable,
        enable, 
        fetchProducts, 
        redirect, 
    } = useListProduct();

    const {
        idEdit, 
        editProduct, 
        setEditProduct,
        removeEditProduct, 
        onChangeFields, 
        handleUpdateUser,
        error,
    } = useEditProduct(fetchProducts);

    return(
        <>
            {row ? (
                <>
                    <div className="flex mx-30">
                        <h1 className="text-3xl font-semibold justify-items-start py-4">Products</h1>
                        <div className="flex justify-end w-full py-4">
                            <Button 
                                label="Add Product"
                                onClick={redirect}
                            />
                        </div> 
                    </div>

                    <div
                        className="flex flex-col gap-5 items-center justify-center mx-30"
                    >
                        <TableProduct 
                            arrayHeader={header}
                            arrayRows={row}
                            idEdit={idEdit}
                            editProduct={editProduct}
                            error={error}
                            setEditProduct={setEditProduct}
                            removeEditProduct={removeEditProduct}
                            handleUpdateProduct={handleUpdateUser}
                            onDisable={disable}
                            onEnable={enable}
                            onChangeFields={onChangeFields}
                        />
                        <Pagination 
                            page={page}
                            totalPage={totalPage}
                            changeNextPage={changeNextPage}
                            changePreviousPage={changePreviousPage}
                        /> 
                    </div>
                </>
            ) : (
                <>
                    <div
                        className="flex gap-1 items-center justify-center"
                    >
                    <h1> No products are currently available. Please add some to continue. </h1> <Link label="Click here to add." link="/product-create"></Link>
                    </div>
                </>
            )}
        </>
    );
}

export default TemplateListProduct;