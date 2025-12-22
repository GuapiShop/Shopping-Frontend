import React from "react";
import Button from "../atoms/button";
import InputLabeled from "../molecules/inputLabeled";
import { useFormProduct } from "../../utils/useFormProduct";

const FormProduct: React.FC = () => {
    const {
        fields,
        onChangeFields,
        saveProduct,
        redirect, 
        isBtnSaveActive
    } = useFormProduct();

    return (
        <>
            {fields.map((field) => (
            <>
                <InputLabeled
                    key={field.name}
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
                    label="Save"
                    color="blue"
                    disabled={!isBtnSaveActive}
                    onClick={saveProduct}
                />
            </div> 
        </>
    );
}
export default FormProduct;