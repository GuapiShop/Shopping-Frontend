import { useCallback, useEffect, useState } from "react";
import type { Product } from "../models/Product";
import { getAllProducts } from "../services/productServices"

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

    return {
        header, 
        row, 
        page, 
        totalPage,
        changePreviousPage, 
        changeNextPage
    }
}