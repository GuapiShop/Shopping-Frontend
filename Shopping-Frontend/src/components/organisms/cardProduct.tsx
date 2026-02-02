import React, { useState } from "react"
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
    const [visible, setVisible] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1); 
    const navigate = useNavigate();

    const navigateInformation = async( id: number ) => {
        navigate('/product/show/view/'+id);
    }

    const onChangeNumberQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value }  = event.target;
        if (isNaN(Number(value))) {
            return;
        }
        if (Number(value) > 0 && Number(value) < 1000) {
            setQuantity(Number(value));
        }
    }

    const {
        addProductToCart
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

                    <div
                        className="p-2 grid-rows-2 "
                    >

                        {visible == true && (
                            <div className="py-2">
                                <input 
                                    className="bg-gray-200 p-2 rounded-2xl"
                                    type="number" 
                                    value={quantity} 
                                    onChange={onChangeNumberQuantity}
                                />
                            </div>  
                        )}
                        <div className="flex gap-2 justify-center">
                            <Button
                                label= {visible ? "Add" : "Add to Cart"}
                                onClick={()=> {
                                    if(visible){
                                        addProductToCart(product, quantity);
                                    }
                                    setVisible(!visible);
                                }}
                            />  
                            {visible == true && (
                                <Button
                                    label= "Cancel"
                                    onClick={()=> {
                                        setVisible(!visible);
                                    }}
                                /> 
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardProduct;