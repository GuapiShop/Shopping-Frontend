import React from "react";
import TempAddUser from "../templates/templateAddUser";
import BackgroundLogo from "../atoms/backgroundLogo";

const AddUserPage: React.FC = () => {
    return(
        <>
            <BackgroundLogo /> 
            <TempAddUser />
        </>
    );
}
export default AddUserPage;