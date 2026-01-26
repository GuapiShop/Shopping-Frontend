import type React from "react";
import TempAddProduct from "../templates/templateAddProduct";
import MainHeader from "../organisms/mainHeader";
import TemplateErrorPage from "../templates/templateErrorPage";

const AddProductPage: React.FC = () => {
    return(
        localStorage.getItem('token') && localStorage.getItem('role') === 'admin' ? (
            <>
                {/* Header */}
                <MainHeader />
                {/* FormProduct */}
                <TempAddProduct />
            </>
        ) : (
            <>
                <TemplateErrorPage
                    type='401'
                    errorMessage='Unauthorized access. Log in to continue. Or log in with another user.'
                />
            </>
        )  
    );
}

export default AddProductPage;