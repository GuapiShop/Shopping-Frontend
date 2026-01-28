import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import type { ErrorProductDTO, ProductCreateDTO } from "../models/Product";
import { validateEmptyField, validateOnlyNumbers, validateNumberLessZero } from "./generalValidations";
import { createProduct } from "../services/productServices";
import { modalError, modalSuccess } from "../components/organisms/modalNotify";
import { validateProductDescription, validateProductName } from "./validateFormProduct";

export const useFormProduct = () => {
    const navigate = useNavigate();
    const [isBtnSaveActive, setIsBtnSaveActive] = useState<boolean>(false);

    const [data, setData] = useState<ProductCreateDTO> ({
        name: "",
        description: "",
        category: "", 
        price: 0,
        codeCabys: "",  
        descriptionCabys: "", 
        taxCabys: 0 
    })

    const [error, setError] = useState<ErrorProductDTO>({
        name: "",
        description: "",
        category: "", 
        price: "",
        codeCabys: "",
        descriptionCabys: "", 
        taxCabys: ""
    }) 

    const fields = [
        {
            label: "Name",
            name: "name",
            placeholder: "Name",
            value: data.name,
            type: "text", 
            error: error.name
        },{
            label: "Description",
            name: "description",
            placeholder: "Description",
            value: data.description,
            type: "text", 
            error: error.description
        },{
            label: "Price:",
            name: "price",
            placeholder: "Price",
            value: data.price,
            type: "number", 
            error: error.price
        }
    ];

    const category = [
        { value: "Electronics", label: "Electronics" },
        { value: "Clothing", label: "Clothing" },
        { value: "Books", label: "Books" },
        { value: "Home", label: "Home" },
        { value: "Sports", label: "Sports" },
        { value: "Toys", label: "Toys" },
        { value: "Beauty", label: "Beauty" },
        { value: "Automotive", label: "Automotive" },
        { value: "Grocery", label: "Grocery" },
        { value: "Health", label: "Health" },
    ]

    const selectFields = [
        {
            label: "Category",
            name: "category",
            options: category,
            placeholder: "Select a category",
            value: data.category,
            error: error.category
        }
    ];

    const redirect = () => {
        navigate('/product');
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
        } else if (name === "price") {
            setError((prev) => ({  
                ...prev,
                price: validateNumberLessZero(Number(value)) || validateOnlyNumbers(value) ||''
            }))
        } else if (name === "codeCabys") {
            setError((prev) => ({  
                ...prev,
                codeCabys: validateEmptyField(value) || ''
            }))
        }
    }

    const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;  
        fieldsValidations(name, value);
        setData((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    const saveProduct = async() => {
        let result = await createProduct(data);
        if(result.success){
            modalSuccess("Created", "Product successfully created.")
            redirect();
        }else if(result.status===400){
            modalError("Warning", "Missing required fields.")
        } else {
            modalError("Error", "Error in server.")
        }
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target; 
        fieldsValidations(name, value);

        if (name === "category") {
            setData((prev) => ({
                ...prev,
                category: value
            }));
        } 
    }

    // if there are no errors and all fields are filled, enable the save button
    useEffect(() => {
        const noErrors = error.name === '' && error.description === '' && error.category === '' && error.codeCabys === '' && error.price === '' && error.descriptionCabys === '' && error.taxCabys === '';
        const allFieldsFilled = data.name !== '' && data.description !== '' && data.category !== '' && data.codeCabys !== '' && data.price !== 0 && data.descriptionCabys !== '' && data.taxCabys !== 0;
        setIsBtnSaveActive(allFieldsFilled && noErrors);
    }, [error, data]);

    return {
        fields,
        setData,
        selectFields, 
        onChangeFields,
        onChangeSelect,
        saveProduct,
        redirect, 
        isBtnSaveActive, 
    }
}