import type React from "react";
import TempListUsers from "../templates/templateListUsers";
import TemplateErrorPage from "../templates/templateErrorPage";
import MainHeader from "../organisms/mainHeader";

const ListUsersPage: React.FC = () => {
    return(
        localStorage.getItem('token') ? (
        <>
            {/* Header */}
            <MainHeader />

            {/* List Users */}
            <TempListUsers />
        </>
        ): (
            <TemplateErrorPage
                type='401'
                errorMessage='Unauthorized access. Please log in to continue.'
            />
        )
    );
}

export default ListUsersPage;