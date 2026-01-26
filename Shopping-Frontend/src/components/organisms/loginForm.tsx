import type React from "react";
import InputLabeled from "../molecules/inputLabeled";
import Link from "../atoms/link";
import Button from "../atoms/button";
import HeadingOne from "../atoms/headingOne";
import { useLoginForm } from "../../utils/useLoginForm";

const LoginForm: React.FC = () => {

    const { 
        onChangeFields, 
        logIn, 
        credentials 
    } = useLoginForm();

    return(
        <>
            <div
                className="rounded shadow-lg px-8 py-8 size-w-full max-w-md mx-auto mt-20 bg-white"
            >
                <HeadingOne 
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