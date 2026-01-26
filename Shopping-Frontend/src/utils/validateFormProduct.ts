export const validateProductName = (product: string) => {
    if (product.length < 5) {
        return "Product must be at least 5 characters long"
    }
    if (product.length > 20) {
        return "Product must be less at 20 characters long"
    }
    return null;
}

export const validateProductDescription = (description: string) => {
    if (description.length < 10) {
        return "Description must be at least 10 characters long"
    }
    if (description.length > 100) {
        return "Description must be less at 100 characters long"
    }
    return null;
}

export const validateProductCodeCABYS = (codeCABYS: string) => {
    if (codeCABYS.length < 10) {
        return "Code CABYS must be at least 10 characters long"
    }
    if (codeCABYS.length > 50) {
        return "Code CABYS must be less at 100 characters long"
    }
    return null;
}