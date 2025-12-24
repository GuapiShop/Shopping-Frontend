import axios from "axios";
import type { Product, ProductCreateDTO } from "../models/Product";
import { authHeathers } from "./authService";
import { handleAxiosError, handleAxiosErrorPaginated } from "./errorsHandler";
import type { ApiResponse, ApiPaginated } from "../models/ApiResponse";

const apiProduct = "https://localhost:7176/api/Products/";

/*
* endpoint create a product
* POST: /api/Products
*/
export async function createProduct ( product: ProductCreateDTO ): Promise<ApiResponse<Product>> {
    try {
        const result = await axios.post(apiProduct, product, {
            headers: authHeathers()
        });
        return {
            data: result.data, 
            status: result.status, 
            success: true
        }
    } catch (error) {
        let message = "Unkown error."
        let status = 500;

        if(axios.isAxiosError(error)){
            message = error.response?.data;
            status =  error.response?.status || 500;
        }   
        return {
            message: message, 
            status: status, 
            success: false
        } 
    }
}

/*
* endpoint update a product
* PUT: /api/Products/id
*/
export async function updateProduct ( product: Product ): Promise<ApiResponse<Product>> {
    try {
        const result = await axios.put(apiProduct +`/${product.id}`, product, {
           headers: authHeathers()
        });

        return {
            data: result.data,
            success: true, 
            status: result.status
        }
    } catch (error) {
        let message = "Unkown error."
        let status = 500;

        if(axios.isAxiosError(error)){
            message = error.response?.data;
            status =  error.response?.status || 500;
        }   
        return {
            message: message, 
            status: status, 
            success: false
        } 
    }
}

/*
* endpoint delete a single product
* DELETE: /api/Products/id
*/
export async function disableProduct(id: number): Promise<ApiResponse<Product>> {
    try {
        const result = await axios.delete(apiProduct + `/${id}`, {
            headers: authHeathers()
        });
        return {
            data: result.data, 
            status: result.status,
            success: true
        };
    } catch (error) {
        let message = "Unkown error."
        let status = 500;

        if(axios.isAxiosError(error)){
            message = error.response?.data;
            status =  error.response?.status || 500;
        }   
        return {
            message: message, 
            status: status, 
            success: false
        } 
    }    
}

/*
* endpoint get a list of products
* GET: /api/Products
*/
export async function getAllProducts(page: number, pageSize: number) : Promise<ApiPaginated<Product[]>>{
    try {
        const result = await axios.get(apiProduct +`?page=${page}&pageSize=${pageSize}`, {
            headers: authHeathers()
        });
        return { 
            page: result.data.page,
            totalPage: result.data.totalPage,
            data: result.data.data, 
            success: true, 
            status: result.status,
        }
    } catch (error) { 
        return handleAxiosErrorPaginated(error);
    }
}

/*
* endpoint get a single product
* GET: /api/Products/id
*/
export async function getProduct(id: number): Promise<ApiResponse<Product>> {
    try {
        const result = await axios.get(apiProduct + `/${id}`, {
            headers: authHeathers()
        });
        return {
            data: result.data, 
            status: result.status,
            success: true
        }
    } catch (error) {
        let message = "Unkown error."
        let status = 500;

        if(axios.isAxiosError(error)){
            message = error.response?.data;
            status =  error.response?.status || 500;
        }   
        return {
            message: message, 
            status: status, 
            success: false
        } 
    }
}