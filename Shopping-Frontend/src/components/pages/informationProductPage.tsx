import type React from "react";
import MainHeader from "../organisms/mainHeader";
import TemplateErrorPage from "../templates/templateErrorPage";
import TemplateInformationProduct from "../templates/templateInformationProduct";

type InformationProductProps = {
    
}

const InformationProductPage: React.FC<InformationProductProps> = () => {
    return(
        localStorage.getItem("token") ? (
            <>  
                <MainHeader />
                <TemplateInformationProduct />
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

export default InformationProductPage;