import React from "react";
import TemplateListProduct from "../templates/templateListProduct";
import MainHeader from "../organisms/mainHeader";
import TemplateErrorPage from "../templates/templateErrorPage";

const ListProduct: React.FC = () => {
    return(
        localStorage.getItem('token') ? (
            <>
                <MainHeader />
                <TemplateListProduct />
            </>
        ) : (
            <TemplateErrorPage
                type='401'
                errorMessage='Unauthorized access. Please log in to continue.'
            />
        )
    );
}

export default ListProduct;