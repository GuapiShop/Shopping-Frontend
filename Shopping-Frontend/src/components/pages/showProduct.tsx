import React from "react";
import TemplateErrorPage from "../templates/templateErrorPage";
import TemplateShowProduct from "../templates/templateShowProduct";
import MainHeader from "../organisms/mainHeader";

type ShowProductProps = {
}

const ShowProduct: React.FC<ShowProductProps>  = () => {
    return (
        localStorage.getItem("token") ? (
            <>  
                <MainHeader />
                <TemplateShowProduct />
            </>
        ) : (
            <>
                <TemplateErrorPage
                    type='401'
                    errorMessage='Unauthorized access. Please log in to continue.'
                />
            </>
        )
    );
}

export default ShowProduct;