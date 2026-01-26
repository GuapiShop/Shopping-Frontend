import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/productServices";
import type { Product } from "../models/Product";

export const useInformationProduct = () => {

    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>();

    const fetchProduct = useCallback(async() => {
        const idProduct = Number(id);
        const data = await getProduct(idProduct);
        if(data.success && "data" in data){
            setProduct(data.data);
        }
    }, [id])
    
    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    return {
        product
    }
}