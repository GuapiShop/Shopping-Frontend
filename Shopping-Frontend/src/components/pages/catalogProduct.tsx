import React from "react";
import TemplateErrorPage from "../templates/templateErrorPage";
import TemplateCatalogProduct from "../templates/templateCatalogProduct";
import MainHeader from "../organisms/mainHeader";

type CatalogProductProps = {
}

const CatalogProductPage: React.FC<CatalogProductProps>  = () => {
    return (
        localStorage.getItem("token") ? (
            <>  
                <MainHeader />
                <TemplateCatalogProduct />
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

export default CatalogProductPage;