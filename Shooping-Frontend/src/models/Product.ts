export interface Product {
    id: number, 
    name: string, 
    description: string, 
    category: string, 
    codeCABYS: string, 
    price: number
}

export interface ProductCreateDTO {
    name: string, 
    description: string, 
    category: string, 
    codeCABYS: string, 
    price: number
}