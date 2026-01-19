export interface User {
    id: number, 
    username: string, 
    email: string, 
    password: string,
    role: string, 
    isActive: boolean, 
    createAt: string, 
    updateAt: string
}

export interface UserCreateDTO {
    username: string, 
    email: string, 
    password: string, 
}

export interface UserUpdateDTO {
    id: number,
    username: string, 
    email: string,
}

export interface ErrorUserDTO {
    username: string, 
    email: string, 
    password: string, 
}