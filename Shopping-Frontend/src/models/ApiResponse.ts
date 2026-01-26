export type ApiResponse<T= unknown> = 
|{  // 200 or 201 response
    success: true; 
    data: T; 
    status: number; 
}|{ // 204 not content response
    success: true; 
    status: number; 
}|{ // error responses
    success: false; 
    message: string; 
    status: number; 
}

export type ApiPaginated<T> =
| { //200 or 201 response
    success: true;
    status: number;
    data: T;
    page: number;
    totalPage: number;
} | { //error responses
    success: false;
    status: number;
    message: string;
};
