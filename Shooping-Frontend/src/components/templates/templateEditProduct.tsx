import React from "react"
import HeadingOne from "../atoms/headingOne";
import FormProduct from "../organisms/formProduct";
import type { Product } from "../../models/product";

type TempEditProductProps = {
    product?: Product;
}

const TempEditProduct: React.FC<TempEditProductProps> = ({product}) => {
    return (
        <>
            <HeadingOne 
                label="Add product"
                className=""
            />
            <FormProduct 
                product={product}
            />
        </>
    );
}
export default TempEditProduct;