import type React from "react";
import type { PaymentCreateDTO } from "../../models/payment";

type FormPaymentProps = {
  paymentDetails?: PaymentCreateDTO;
  onClickConfirmPayment: () => Promise<void>;
};

const FormPayment: React.FC<FormPaymentProps> = ({
  paymentDetails,
  onClickConfirmPayment,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Payment Information</h2>

      <p>
        {paymentDetails
          ? `Payment ID: ${paymentDetails.type}`
          : "No payment type available"}
      </p>
      <p>
        {paymentDetails
          ? `Total: $${paymentDetails.total}`
          : "No payment details available"}
      </p>

      <button onClick={onClickConfirmPayment}>Confirm Payment</button>
    </div>
  );
};
export default FormPayment;
