import React from "react";
import { useListProduct } from "../../utils/useListProduct";
import TableProduct from "../organisms/tableProduct";
import Pagination from "../molecules/pagination";
import Link from "../atoms/link";

const TemplateListProduct: React.FC = () => {

    const {
        header, 
        row, 
        page, 
        totalPage,
        changePreviousPage, 
        changeNextPage,
        disable,
    } = useListProduct();

    return(
        <>
            {row ? (
                <>
                    <div className="flex mx-30">
                        <h1 className="text-3xl font-semibold justify-items-start py-4">Products</h1>
                    </div>

                    <div
                        className="flex flex-col gap-5 items-center justify-center mx-30"
                    >
                        <TableProduct 
                            arrayHeader={header}
                            arrayRows={row}
                            onDisable={disable}
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