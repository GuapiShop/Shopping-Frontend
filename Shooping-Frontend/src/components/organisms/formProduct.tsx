import React from "react";
import Button from "../atoms/button";
import Input from "../atoms/input";
import InputLabeled from "../molecules/inputLabeled";
import { useFormProduct } from "../../utils/useFormProduct";
import Select from "../molecules/select";
import type { CabysProduct } from "../../models/cabys";

const FormProduct: React.FC = () => {
    const {
        fields,
        cabysData,
        selectedCabys,
        onChangeCabys,
        search, 
        onChangeSearch, 
        onChangeFields,
        saveProduct,
        redirect, 
        isBtnSaveActive, 
        searchCabys, 
    } = useFormProduct();

    return (
        <>
            <div className="">
                {/*input seeker*/}
                <Input 
                    name="search"
                    value={search}
                    onChange={onChangeSearch}
                    type="text"
                    placeholder="Enter the product you want to search for"
                />
                <Button
                    label="Search"
                    color="red"
                    onClick={searchCabys} 
                />
            </div>

            <div className="">
                {/* Code, description and tax */}
                <Select
                    message="Select a Cabys code"
                    value={selectedCabys}
                    onChange={onChangeCabys}
                    options={
                        cabysData.cabys.map((cabys: CabysProduct) => ({
                            value: cabys.code,
                            label: `${cabys.code} - ${cabys.description} - ${cabys.tax}%`
                        }))
                    }
                />
            </div>

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