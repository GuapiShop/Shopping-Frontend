import axios from "axios";
import type { ApiResponse } from "../models/ApiResponse";
import type { DetailCreateDTO } from "../models/order";
import { authHeathers } from "./authService";
import { handleAxiosError } from "./errorsHandler";

const apiDetails = `${import.meta.env.VITE_URL_APP}/details`;

/*
* endpoint create a order detail
* POST: /api/details
*/
export async function createDetail (detail: DetailCreateDTO[] ) : Promise<ApiResponse<DetailCreateDTO>> {
    try {
        const result = await axios.post(apiDetails, detail, {
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