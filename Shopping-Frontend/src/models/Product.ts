export interface Product {
    id: number, 
    name: string, 
    description: string, 
    category: string, 
    codeCabys: string,
    descriptionCabys: string, 
    taxCabys: number,
    price: number, 
    isActive: boolean
}

export interface ProductCreateDTO {
    name: string, 
    description: string, 
    category: string, 
    price: number
    codeCabys: string, 
    descriptionCabys: string,
    taxCabys: number,
}

export interface ProductUpdateDTO {
    id?: number, 
    name: string, 
    description: string, 
    category: string, 
    price: number,
    taxCabys: number,
    codeCabys: string, 
    descriptionCabys: string,
}

export interface ErrorProductDTO {
    name: string, 
    description: string, 
    category: string, 

    codeCabys: string, 
    descriptionCabys: string,
    taxCabys: string,
    price: string
}

export interface ProductShowDTO {
    id: number, 
    name: string, 
    description: string, 
    category: string, 
    price: number
}