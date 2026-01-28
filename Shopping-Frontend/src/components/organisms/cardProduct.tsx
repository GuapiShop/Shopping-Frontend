import React from "react"
import type { ProductResponseDTO } from "../../models/Product";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../utils/useShoppingCart";
import Button from "../atoms/button";

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

    const {
        addSingleToCart
    } = useShoppingCart();

    return (
        <>
            <div 
                className="max-w-sm rounded-4xl overflow-hidden shadow-lg m-5"
            >   
                <div
                    className="hover:cursor-pointer"
                    onClick={() => navigateInformation(product.id)}
                >
                    <img className="w-full" src="/guapishop.png" alt={product.name}></img>
                    <div className="px-4 pt-4">
                        <div className="font-bold text-xl mb-2">
                            {product.name}
                        </div>
                    </div>
                </div>
                <div>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                        ${product.price.toString()}
                    </span>
                    <Button
                        label="Add"
                        onClick={()=> addSingleToCart(product)}
                    />
                </div>
            </div>
        </>
    );
}

export default CardProduct;