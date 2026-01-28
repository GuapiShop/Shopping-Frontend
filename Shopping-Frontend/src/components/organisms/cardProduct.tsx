import React from "react"
import type { ProductResponseDTO } from "../../models/Product";
import { useNavigate } from "react-router-dom";

type CardProductProps = {
    product: ProductResponseDTO
}

const CardProduct: React.FC<CardProductProps> = ({
    product
}) => {

    const navigate = useNavigate();

    const navigateInformation = async( id: number ) => {
        navigate('/product/show/view/'+id);
    }

    return (
        <>
            <div 
                className="max-w-sm rounded-4xl overflow-hidden shadow-lg m-5"
                onClick={() => navigateInformation(product.id)}
            >   
                <img className="w-full" src="/guapishop.png" alt={product.name}></img>
                <div className="px-4 pt-4">
                    <div className="font-bold text-xl mb-2">
                        {product.name}
                    </div>
                </div>
                <div>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                        ${product.price.toString()}
                    </span>
                </div>
            </div>
        </>
    );
}

export default CardProduct;