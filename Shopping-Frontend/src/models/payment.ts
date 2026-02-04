export interface Payment {
    id: number;
    orderId: number;
    type: string;
    total: number;
    createAt: string;
    updateAt: string;
}

export interface PaymentCreateDTO {
    orderId: number;
    type: "CREDIT_CARD";
    total: number;
};