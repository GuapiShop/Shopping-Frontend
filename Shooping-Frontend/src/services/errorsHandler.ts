import axios from "axios";
import type { ApiResponse, ApiPaginated } from "../models/ApiResponse";

export const handleAxiosError = (error: unknown): ApiResponse => {
    let message = "Unknown Error."
    let status = 500;

    if(axios.isAxiosError(error)){
        message = error.response?.data
        status = error.response?.status || 500
    }

    if(status==401){
        localStorage.removeItem('token');
    }

    return {
        message: message, 
        status: status,
        success: false,  
    };
}

export const handleAxiosErrorPaginated = <T>(error: unknown): ApiPaginated<T> => {
    let message = "Unknown Error."
    let status = 500;

    if(axios.isAxiosError(error)){
        message = error.response?.data
        status = error.response?.status || 500
    }

    if(status==401){
        localStorage.removeItem('token');
    }

    return {
        success: false,
        message: message,
        status: status
    };
}