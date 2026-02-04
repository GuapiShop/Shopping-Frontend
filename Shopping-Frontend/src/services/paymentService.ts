import axios from "axios";
import { authHeathers } from "./authService";
import type { Payment, PaymentCreateDTO } from "../models/payment";
import type { ApiResponse } from "../models/ApiResponse";
import { handleAxiosError } from "./errorsHandler";

const apiPayment = `${import.meta.env.VITE_URL_APP}/payments`;

/*
 * endpoint create a payment
 * POST: /api/payments
 */
export async function createPayment(
  payment: PaymentCreateDTO[],
): Promise<ApiResponse<Payment>> {
  try {
    const result = await axios.post(apiPayment, payment, {
      headers: authHeathers(),
    });
    return {
      data: result.data,
      status: result.status,
      success: true,
    };
  } catch (error) {
    return handleAxiosError(error);
  }
}
