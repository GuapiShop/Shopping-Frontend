import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import type { ErrorProductDTO, ProductCreateDTO } from "../models/Product";
import { validateEmptyField, validateOnlyNumbers, validateNumberLessZero } from "./generalValidations";
import { createProduct } from "../services/productServices";
import { modalError, modalSuccess } from "../components/organisms/modalNotify";
import { validateProductCodeCABYS, validateProductDescription, validateProductName } from "./validateFormProduct";

export const useFormProduct = () => {
    const navigate = useNavigate();
    const [isBtnSaveActive, setIsBtnSaveActive] = useState<boolean>(false);

    const [data, setData] = useState<ProductCreateDTO> ({
        name: "",
        description: "",
        category: "", 
        price: 0,
        codeCabys: "",   
    })

    const [error, setError] = useState<ErrorProductDTO>({
        name: "",
        description: "",
        category: "", 
        price: "",
        codeCabys: "",
    }) 

    const fields = [
        {
            label: "Name",
            name: "name",
            placeholder: "Name",
            value: data.name,
            type: "text", 
            error: error.name
        }, {
            label: "Description",
            name: "description",
            placeholder: "Description",
            value: data.description,
            type: "text", 
            error: error.description
        },  {
            label: "Category",
            name: "category",
            placeholder: "Category",
            value: data.category,
            type: "text", 
            error: error.category
        }, {
            label: "Cabys",
            name: "codeCABYS",
            placeholder: "Cabys code",
            value: data.codeCabys,
            type: "text", 
            error: error.codeCabys
        },  {
            label: "Price:",
            name: "price",
            placeholder: "Price",
            value: data.price,
            type: "number", 
            error: error.price
        }
    ];

    function redirect () {
        navigate('/products');
    }

    function fieldsValidations( name: string, value: string ) { 
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

    const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;  
        fieldsValidations(name, value);
        setData((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    async function saveProduct(){
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

    // if there are no errors and all fields are filled, enable the save button
    useEffect(() => {
        const noErrors = error.name === '' && error.description === '' && error.category === '' && error.codeCabys === '' && error.price === '';
        const allFieldsFilled = data.name !== '' && data.description !== '' && data.category !== '' && data.codeCabys !== '' && data.price !== 0;
        setIsBtnSaveActive(allFieldsFilled && noErrors);
    }, [error, data]);

    return {
        fields, 
        onChangeFields,
        saveProduct,
        redirect, 
        isBtnSaveActive
    }
}