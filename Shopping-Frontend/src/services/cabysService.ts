import axios from "axios";

const apiCabys = "https://api.hacienda.go.cr/fe/cabys";

export const getCabys = async(text: string) => {
    try {
        const result = await axios.get(apiCabys +`?q=${text}`);
        return { 
            products: result.data.cabys,
            total: result.data.total,
            quantity: result.data.cantidad,
        }
    } catch (error) { 
        return "";
    }
}