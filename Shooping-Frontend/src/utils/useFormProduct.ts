import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import type { ErrorProductDTO, ProductCreateDTO } from "../models/Product";
import { validateEmptyField, validateOnlyNumbers, validateNumberLessZero } from "./generalValidations";
import { createProduct } from "../services/productServices";
import { getCabys } from "../services/cabysService"
import { modalError, modalSuccess } from "../components/organisms/modalNotify";
import { validateProductCodeCABYS, validateProductDescription, validateProductName } from "./validateFormProduct";
import type { Cabys } from "../models/cabys";

export const useFormProduct = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [selectedCabys, setSelectedCabys] = useState<string>("");

    const [isBtnSaveActive, setIsBtnSaveActive] = useState<boolean>(false);

    const [cabysData, setCabysData] = useState<Cabys> ({
        cabys: [],
        quantity: 0,
        total: 0
    });

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
            label: "Category",
            name: "category",
            placeholder: "Category",
            value: data.category,
            type: "text", 
            error: error.category
        },{
            label: "Price:",
            name: "price",
            placeholder: "Price",
            value: data.price,
            type: "number", 
            error: error.price
        }
    ];

    const redirect = () => {
        navigate('/products');
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

    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {        
        const { name, value } = event.target; 
        if (name==='search'){
            setSearch(value);
        }   
    }

    const searchCabys = async() => {
        const data = await getCabys(search);
        if (data && data.quantity > 0) {
            setCabysData({
                cabys: data.products.map((product:any) => ({
                    code: product.codigo,
                    description: product.descripcion,
                    tax: product.impuesto
                })),
                quantity: data.quantity,
                total: data.total
            });
        }
    }

    const onChangeCabys = (value: string) => {
        setSelectedCabys(value);
        const selected = cabysData.cabys.find(cabys => cabys.code === value);
        if (selected) {
            setData((prev) => ({
                ...prev,
                codeCabys: selected.code,
                descriptionCabys: selected.description,
                taxCabys: selected.tax
            }));
        }

        console.log(data);
    }

    // if there are no errors and all fields are filled, enable the save button
    useEffect(() => {
        const noErrors = error.name === '' && error.description === '' && error.category === '' && error.codeCabys === '' && error.price === '' && error.descriptionCabys === '' && error.taxCabys === '';
        const allFieldsFilled = data.name !== '' && data.description !== '' && data.category !== '' && data.codeCabys !== '' && data.price !== 0 && data.descriptionCabys === '' && data.taxCabys === 0;
        setIsBtnSaveActive(allFieldsFilled && noErrors);
    }, [error, data]);

    return {
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
        searchCabys
    }
}