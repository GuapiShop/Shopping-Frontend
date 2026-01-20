import React from "react";
import Button from "../atoms/button";
import Input from "../atoms/input";
import InputLabeled from "../molecules/inputLabeled";
import { useFormProduct } from "../../utils/useFormProduct";
import Label from "../atoms/label";
import SelectLabeled from "../molecules/selectLabeled";
import SearchCabys from "../molecules/searchCabys";

const FormProduct: React.FC = () => {
    const {
        fields,
        selectFields, 
        search, 
        onChangeSearch, 
        onChangeFields,
        onChangeSelect,
        saveProduct,
        redirect, 
        isBtnSaveActive, 
        searchCabys, 
    } = useFormProduct();

    return (
        <>
            <SearchCabys
                name="search"
                value={search}
                placeholder="Enter the product to search for"
                searchCabys={searchCabys}
                onChangeSearch={onChangeSearch}
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