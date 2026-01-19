import React from "react";
import Button from "../atoms/button";
import Input from "../atoms/input";
import InputLabeled from "../molecules/inputLabeled";
import { useFormProduct } from "../../utils/useFormProduct";
import Label from "../atoms/label";
import SelectLabeled from "../molecules/selectLabeled";

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
            <div className="my-4">
                <Label 
                    text={"Search CABYS Product"} 
                />
                <div className="flex items-end space-x-4 mb-4">
                    {/*input seeker*/}
                    <Input 
                        name="search"
                        value={search}
                        onChange={onChangeSearch}
                        type="text"
                        placeholder="Enter the product to search for"
                    />
                    <Button
                        label="Search"
                        onClick={searchCabys} 
                    />
                </div>
            </div>

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