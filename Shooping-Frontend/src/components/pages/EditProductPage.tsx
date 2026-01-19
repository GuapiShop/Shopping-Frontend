import type React from "react";
import TempEditProduct from "../templates/templateEditProduct";
import { getProduct } from "../../services/productServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../../models/Product";


const EditProductPage: React.FC = () => {

    const id = useParams();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProduct(Number(id));
            if (data.success) {
                setProduct(data.data);
            }else{
                console.error(data.message)
            }
        };

        fetchProduct();
    }, [id])

    return(
        <>
        {localStorage.getItem('token') &&
          <TempEditProduct 
            product={product} 
          />
        }  
        </>
    );
}

export default EditProductPage;