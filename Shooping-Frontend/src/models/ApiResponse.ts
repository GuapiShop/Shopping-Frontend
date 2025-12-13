export type ApiResponse<T= unknown> = 
    |{ success: true; data: T; status: number; } // 200 or 201 response
    |{ success: true; status: number; } // 204 not content (disable)
    |{ success: false; message: string; status: number; } // error responses