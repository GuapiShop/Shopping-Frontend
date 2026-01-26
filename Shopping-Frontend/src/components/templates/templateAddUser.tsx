import HeadingOne from "../atoms/headingOne";
import FormUser from "../organisms/formUser";

const TempAddUser: React.FC = () => {
    return (
        <>
            <div
                className="rounded shadow-lg px-8 py-8 size-w-full max-w-md mx-auto mt-20 bg-white"
            >
                <HeadingOne  
                    label="Create User"
                />
                <FormUser />
            </div> 
        </>
    );
}

export default TempAddUser;