import { useState } from "react";
import type { ProductUpdateDTO, ErrorProductDTO } from "../models/Product";
import { modalError, modalSuccess, modalWarning } from "../components/organisms/modalNotify";
import { updateProduct } from "../services/productServices";
import { validateEmptyField, validateOnlyNumbers, validateNumberLessZero } from "./generalValidations";
import { validateProductCodeCABYS, validateProductDescription, validateProductName } from "./validateFormProduct";

export const useEditProduct = (
    onUpdated: () => Promise<void>
) => {
    const [idEdit, setIdEdit] = useState<number|null>(null)

    const [editProduct, setProduct] = useState<ProductUpdateDTO> ({
        id:0, 
        name: "",
        description: "",  
        category: "", 
        codeCabys: "", 
        descriptionCabys: "",
        taxCabys: 0,
        price: 0
    })

    const [error, setError] = useState<ErrorProductDTO> ({ 
        name: "",
        description: "",  
        category: "", 
        codeCabys: "", 
        price: "",
        descriptionCabys: "",
        taxCabys: ""
    })

    const setEditProduct = (product:ProductUpdateDTO) => {
        setIdEdit(product.id); 
        setProduct(product);
    }

    const removeEditProduct = () => {
        setIdEdit(null)
        setProduct({
            id:0, 
            name: "",
            description: "",  
            category: "", 
            codeCabys: "", 
            price: 0, 
            descriptionCabys: "",
            taxCabys: 0
        })
        setError({
            name: "",
            description: "",  
            category: "", 
            codeCabys: "", 
            price: "", 
            descriptionCabys: "",
            taxCabys: ""
        })
    }

    const handleUpdateUser = async () => {
        const result = await updateProduct(editProduct);
        if (result.success) {
            await onUpdated();
            removeEditProduct();
            modalSuccess("Disabled", "User updated successfully.")
        } else if (result.status===404){
            modalWarning("Warning", result.message)
        } else {
            modalError("Error", "Error in server.")
        }
    }

    const fieldsValidations = ( name: string, value: string ) => {
        if (name === "name") {
            setError((prev) => ({
                ...prev,
                name: validateEmptyField(value) || validateProductName(value) || ''
            }));
        } else if (name === "description") {
            setError((prev) => ({  
                ...prev,
                description: validateEmptyField(value) || validateProductDescription(value) || ''
            }))
        } else if (name === "category") {
            setError((prev) => ({  
                ...prev,
                category: validateEmptyField(value) || ''
            }))
        } else if (name === "codeCABYS") {
            setError((prev) => ({  
                ...prev,
                codeCabys: validateEmptyField(value) || validateProductCodeCABYS(value) || ''
            }))
        } else if (name === "price") {
            setError((prev) => ({  
                ...prev,
                price: validateNumberLessZero(Number(value)) || validateOnlyNumbers(value) ||''
            }))
        }
    } 

    const onChangeFields = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        fieldsValidations(name, value);
        setProduct ((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        fieldsValidations(name, value);
        if (name === "category") {
            setProduct((prev) => ({
                ...prev,
                category: value
            }));
        }
    }

    return {
        idEdit, 
        setProduct, 
        editProduct, 
        setEditProduct,
        removeEditProduct, 
        onChangeFields, 
        onChangeSelect, 
        handleUpdateUser,
        error,
    };
}