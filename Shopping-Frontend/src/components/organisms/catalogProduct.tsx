import React from "react";
import CardProduct from "./cardProduct";
import type { ProductResponseDTO } from "../../models/Product";

type CatalogProductProps = {
    products: ProductResponseDTO[];
}

const CatalogProduct: React.FC<CatalogProductProps> = ({
    products
}) => {
    return(
        <div className="grid grid-cols-5">
            {products.map((product) => (
                <CardProduct
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
} 

export default CatalogProduct;