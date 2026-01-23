import axios from "axios";
import type { Product, ProductCreateDTO, ProductUpdateDTO } from "../models/Product";
import { authHeathers } from "./authService";
import { handleAxiosError, handleAxiosErrorPaginated } from "./errorsHandler";
import type { ApiResponse, ApiPaginated } from "../models/ApiResponse";

const apiProduct = `${import.meta.env.URL_APP}/Products`;

/*
* endpoint create a product
* POST: /api/Products
*/
export async function createProduct (product:ProductCreateDTO) : Promise<ApiResponse<Product>> {
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
        return handleAxiosError(error);
    }
}

/*
* endpoint update a product
* PUT: /api/Products/id
*/
export async function updateProduct (product:ProductUpdateDTO) : Promise<ApiResponse<Product>> {
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
        return handleAxiosError(error); 
    }
}

/*
* endpoint inactivate a single product
* UPDATE: /api/Products/id
*/
export const disableProduct = async(id: number) : Promise<ApiResponse<Product>> => {
    try {
        const result = await axios.put(apiProduct + `/disable/${id}`, null, {
            headers: authHeathers()
        });
        return {
            data: result.data, 
            status: result.status,
            success: true
        };
    } catch (error) {
        return handleAxiosError(error);
    }    
}

/*
* endpoint activate a single product
* UPDATE: /api/Products/id
*/
export const enableProduct = async(id:number) : Promise<ApiResponse<Product>> => {
    try {
        const result = await axios.put(apiProduct + `/enable/${id}`, null, {
            headers: authHeathers()
        });
        return {
            data: result.data, 
            status: result.status,
            success: true
        };
    } catch (error) {
        return handleAxiosError(error);
    }    
}

/*
* endpoint get a list of products
* GET: /api/Products
*/
export async function getAllProducts(page:number, pageSize:number) : Promise<ApiPaginated<Product[]>>{
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
export async function getProduct(id:number) : Promise<ApiResponse<Product>> {
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
        return handleAxiosError(error);
    }
}

/*
* endpoint get a single product
* GET: /api/Products/show
*/
export async function getShowProduct(page:number, pageSize:number) : Promise<ApiPaginated<Product[]>>{
    try {
        const result = await axios.get(apiProduct +`show?page=${page}&pageSize=${pageSize}`, {
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