import React from "react"
import HeadingOne from "../atoms/headingOne";
import FormProduct from "../organisms/formProduct";

const TempAddProduct: React.FC = () => {
    return (
        <div
            className="rounded shadow-lg px-8 py-8 size-w-full max-w-md mx-auto bg-white"
        >
            <HeadingOne 
                label="Add product"
            />
            <FormProduct />
        </div>
    );
}
export default TempAddProduct;