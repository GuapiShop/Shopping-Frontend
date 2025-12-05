import React from "react";
import Button from "../atoms/button";
import InputLabeled from "../molecules/inputLabeled";
import { useFormUser } from "../../utils/useFormUser";

const FormUser: React.FC = () => {
    const {
        fields,
        onChangeFields,
        saveUser,
        redirect
    } = useFormUser();

    return (
        <>
            {fields.map((field) => (
            <>
                <InputLabeled
                    labelText={field.label}
                    labelColor="black"
                    inputName={field.name}
                    inputType= {field.type}
                    inputPlaceHolder={field.placeholder}
                    inputValue={field.value}
                    inputOnChange={onChangeFields}
                    errorMessage={field.error}
                />
            </>
            ))}
            <div className="felx space-x-4 mt-4">
                <Button 
                    label="Cancel"
                    color="blue"
                    onClick={redirect}
                />
                <Button 
                    label="Guardar"
                    color="blue"
                    onClick={saveUser}
                />
            </div>
        </>
    );
}

export default FormUser;