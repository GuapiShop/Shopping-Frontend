export interface Cart {
    productId: number;
    productName: String;
    productPrice: number;
    productQuantity: number;
}

export interface DetailCreateDTO {
    productId: number,
    quantity: number, 
}

export interface Orders {
    id: number,
    state: string, 
    createAt: string, 
    userId: number,
}