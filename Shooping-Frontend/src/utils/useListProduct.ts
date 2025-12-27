import { useCallback, useEffect, useState } from "react";
import type { Product } from "../models/Product";
import { enableProduct, getAllProducts } from "../services/productServices"
import { disableProduct } from "../services/productServices"
import { modalError, modalSuccess, modalWarning } from "../components/organisms/modalNotify";
import type { ApiResponse } from "../models/ApiResponse";

export const useListProduct = () => {
    const pageSize = 10;
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1); 
    const [row, setRow ]= useState<Product[]>();

    const header = [
        "Name", 
        "Description", 
        "Category", 
        "Price", 
        "Code",
        "Is Active", 
        "Actions"
    ]

    const fetchProducts = useCallback(async() => {
        const data = await getAllProducts(page, pageSize);
        console.log("resume", data)
        if(data.success){
            setRow(data.data)
            setTotalPage(data.totalPage)
        }
    }, [page])

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const changePreviousPage = () => {
        setPage(prev => prev > 1 ? prev-1 : 1)
    }

    const changeNextPage = () => {
        setPage(prev => prev < totalPage ? prev+1 : totalPage )
    }

    const disable = async (id: number) : Promise<ApiResponse> => {
        const result = await disableProduct(id);
        if (result.success) {
            await fetchProducts()
            modalSuccess("Disabled", "Product successfully disabled.")
        } else if (result.status === 404) {
            modalWarning("Warning", result.message)
        } else {
            modalError("Error", "Error in server.")
        }
        return result;
    }

    const enable = async (id: number) : Promise<ApiResponse> => {
        const result = await enableProduct(id);
        if (result.success) {
            await fetchProducts()
            modalSuccess("Enabled", "Product successfully enabled.")
        } else if (result.status===404) {
            modalWarning("Warning", result.message)
        } else {
            modalError("Error", "Error in server.")
        }
        return result;
    }

    return {
        header, 
        row, 
        page, 
        totalPage,
        changePreviousPage, 
        changeNextPage, 
        disable, 
        enable, 
        fetchProducts
    }
}