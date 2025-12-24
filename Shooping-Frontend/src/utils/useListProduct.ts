import { useCallback, useEffect, useState } from "react";
import type { Product } from "../models/Product";
import { getAllProducts } from "../services/productServices"
import { disableProduct } from "../services/productServices"
import { modalError, modalSuccess, modalWarning } from "../components/organisms/modalNotify";
import type { ApiResponse } from "../models/ApiResponse";

export const useListProduct = () => {
    const pagSize = 10;
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1); 
    const [row, setRow ]= useState<Product[]>();

    const header = [
        "Name", 
        "Description", 
        "Category", 
        "Price", 
        "Code",
        "Actions"
    ]

    const fetchProducts = useCallback(async() => {
        const data = await getAllProducts(page, totalPage);

        if(data.success){
            setRow(data.data)
            setPage(data.page)
            setTotalPage(data.totalPage)
        }
    }, [page, pagSize])

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

    return {
        header, 
        row, 
        page, 
        totalPage,
        changePreviousPage, 
        changeNextPage, 
        disable
    }
}