import React from "react";
import { useInformationProduct } from "../../utils/useInformationProduct";

const TemplateInformationProduct: React.FC = () => {
    const {
        product
    } = useInformationProduct();

    return(
        <div
            className="py-5 px-30"
        >
            <div 
                className="grid grid-cols-2 gap-4"
            >
                <div className="pr-4 pb-4">
                    <img className="w-full" src="/guapishop.png" alt={`Visual image of ${product?.name}`}></img>
                </div>
                <div>
                    <div className="text-2xl mb-2 text-start pb-10">
                        {product?.codeCabys}
                    </div>

                    <div className="font-bold text-3xl mb-2 text-start pb-5" >
                        {product?.name}
                    </div>
    
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex">
                            <div className="font-bold text-2xl mb-2 pr-4">
                                Price:
                            </div>
                            <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-semibold text-gray-700 mr-2 mb-2">
                                ${product?.price}
                            </div>
                        </div>
                        <div  className="inline-flex">
                            <div className="font-bold text-2xl mb-2 pr-4">
                                Description: 
                            </div>
                            <div className="text-2xl mb-2">
                                {product?.description}
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateInformationProduct;