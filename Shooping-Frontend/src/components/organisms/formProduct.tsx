import React from "react";
import Button from "../atoms/button";
import InputLabeled from "../molecules/inputLabeled";
import { useFormProduct } from "../../utils/useFormProduct";
import SelectLabeled from "../molecules/selectLabeled";
import SearchCabys from "../molecules/searchCabys";

const FormProduct: React.FC = () => {
    const {
        fields,
        setData, 
        selectFields, 
        onChangeFields,
        onChangeSelect,
        saveProduct,
        redirect, 
        isBtnSaveActive, 
    } = useFormProduct();

    return (
        <>
            <SearchCabys
                setData={setData}
            />
            
            {selectFields.map((field) => (
                <SelectLabeled
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    message={field.placeholder}
                    options={field.options}
                    value={field.value}
                    onChange={onChangeSelect}
                />
            ))}

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
                    onClick={redirect}
                />
                <Button 
                    label="Save"
                    disabled={!isBtnSaveActive}
                    onClick={saveProduct}
                />
            </div> 
        </>
    );
}
export default FormProduct;