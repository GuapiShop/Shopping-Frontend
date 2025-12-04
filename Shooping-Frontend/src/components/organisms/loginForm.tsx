import type React from "react";
import InputLabeled from "../molecules/inputLabeled";
import Link from "../atoms/link";
import { useState } from "react";
import type { Auth } from "../../models/Auth";
import Button from "../atoms/button";
import { login } from "../../services/authService"
import HeadingOne from "../atoms/headingOne";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm: React.FC = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState<Auth>({
        email: "", 
        password: "",
    });

    const onChangeFields = ( event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCredentials ((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    async function logIn () {
        const result = await login(credentials);
        if(localStorage.getItem('token')!==''){
            redirectMenuPage();
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: result.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    function redirectMenuPage () {
        navigate('product/')
    }

    return(
        <>
            <div
                className="rounded shadow-lg px-8 py-8 size-w-full max-w-md mx-auto mt-20 bg-white"
            >
                <HeadingOne 
                    className="font-bold mb-4 text-center text-" 
                    label="Sign In"
                />

                {/* Email */}
                <InputLabeled
                    labelText="Email"
                    inputType="text"
                    inputName="email"
                    inputPlaceHolder="Email"
                    inputValue={credentials.email}
                    inputOnChange={(e)=>onChangeFields(e)}
                />

                {/* Password */}
                <InputLabeled
                    labelText="Password"
                    inputType="password"
                    inputName="password"
                    inputPlaceHolder="Password"
                    inputValue={credentials.password}
                    inputOnChange={onChangeFields}
                />

                <div className="md:flex md:items-center justify-between mb-3">
                    {/* Link to recuperate user */}
                    <div className="mb-4">
                        Forgot&nbsp;
                        <Link label="password" link="/user/recuperation"/>
                        ?
                    </div>
                    
                    {/* Link to create user */}
                    <div className="mb-4">
                        Don’t have an account?&nbsp;
                        <Link label="Sign Up" link="/user/add"/>
                    </div>
                </div>

                <Button 
                    label="Log In"
                    color="blue"
                    onClick={logIn}
                />
            </div>
        </>
    );
}

export default LoginForm;