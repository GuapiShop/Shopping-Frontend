import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProductResponseDTO } from "../models/Product";
import { getCatalogProduct } from "../services/productServices";

export const useCatalogProduct = (
    category?:string|null
) => {
    const navigate = useNavigate();
    const pageSize = 10;
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1); 
    const [row, setRow ]= useState<ProductResponseDTO[]>();

    const fetchProducts = useCallback(async() => {
        const data = await getCatalogProduct(page, pageSize, category ?? undefined);
        if(data.success){
            setRow(data.data)
            setTotalPage(data.totalPage)
        }
    }, [page, category])

    const changePreviousPage = () => {
        setPage(prev => prev > 1 ? prev-1 : 1)
    }

    const changeNextPage = () => {
        setPage(prev => prev < totalPage ? prev+1 : totalPage )
    }

    const redirect = () => {
        navigate('');
    }

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    //If you are on a page more than 1 and change category
    useEffect(() => {
        setPage(1);
    }, [category]);

    return {
        row, 
        page, 
        totalPage,
        changePreviousPage, 
        changeNextPage, 
    }
}