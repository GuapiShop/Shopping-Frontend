import React from "react";
import { useShowProduct } from "../../utils/useShowProduct";
import Pagination from "../molecules/pagination";
import CatalogProduct from "../organisms/catalogProduct";
import { useSearchParams } from "react-router-dom";

type TemplateShowProductProps = {
}

const TemplateShowProduct: React.FC<TemplateShowProductProps> = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("p");

    const {
        row, 
        page, 
        totalPage,
        changePreviousPage, 
        changeNextPage
    } = useShowProduct(category);

    return (
        <>
            {row ? (
                <>
                    <div
                        className="flex flex-col gap-5 items-center justify-center mx-30"
                    >
                        <CatalogProduct 
                            products={row}
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
                    <h1> No products are currently available. </h1>
                    </div>
                </>
            )}
        </>
    );
}

export default TemplateShowProduct; 