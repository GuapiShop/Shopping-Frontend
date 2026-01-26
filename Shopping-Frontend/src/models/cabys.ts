export interface Cabys {
    total: number,
    quantity: number,
    cabys: CabysProduct[]
}

export interface CabysProduct {
    code: string,
    description: string,
    tax: number
}