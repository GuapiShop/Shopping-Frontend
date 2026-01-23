import React from "react"
import type { ProductShowDTO } from "../../models/Product";
import HeadingTwo from "../atoms/headingTwo";
import Paragraph from "../atoms/paragraph";
import ParagraphHeaded from "../molecules/paragraphHeaded";
import { useNavigate } from "react-router-dom";

type CardProductProps = {
    product: ProductShowDTO
}

const CardProduct: React.FC<CardProductProps> = ({
    product
}) => {

    const navigate = useNavigate();

    async function navigateInformation( id: number ) {
        navigate('/product/show/view' + id);
    }

    return (
        <>
            <div>
                <HeadingTwo 
                    label={product.name}
                />

                <Paragraph 
                    paragraph={product.description}
                />

                <ParagraphHeaded 
                    label="Price"
                    paragraph={product.price.toString()}
                    labelClassName=""
                    paragraphClassName=""
                />
            </div>
        </>
    );
}

export default CardProduct;