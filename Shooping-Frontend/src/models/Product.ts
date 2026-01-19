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

    codeCabys: string, 
    descriptionCabys: string,
    taxCabys: number,
    price: number
}

export interface ProductUpdateDTO {
    id: number, 
    name: string, 
    description: string, 
    category: string, 

    codeCabys: string, 
    descriptionCabys: string,
    taxCabys: number, 
    price: number
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