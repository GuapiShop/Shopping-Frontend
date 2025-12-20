export type ApiResponse<T= unknown> = 
    |{ success: true; data: T; status: number; } // 200 or 201 response
    |{ success: true; status: number; } // 204 not content (disable)
    |{ success: false; message: string; status: number; } // error responses

export type ApiPaginated<T> =
| {
    success: true;
    status: number;
    data: T;
    page: number;
    totalPage: number;
} | {
    success: false;
    status: number;
    message: string;
};
