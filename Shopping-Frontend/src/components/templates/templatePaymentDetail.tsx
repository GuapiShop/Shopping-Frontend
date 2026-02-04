import FormPayment from "../organisms/formPayment";
import ListOrderDetail from "../organisms/listOrderDetail";
import { useShoppingCart } from "../../utils/useShoppingCart";

type TemplatePaymentDetailProps = {};

const TemplatePaymentDetail: React.FC<TemplatePaymentDetailProps> = ({}) => {
  
  const { cart, payment, onClickConfirmPayment } = useShoppingCart();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Payment Detail</h1>
      <FormPayment paymentDetails={payment} onClickConfirmPayment={onClickConfirmPayment} />
      <ListOrderDetail cart={cart} />
    </div>
  );
};
export default TemplatePaymentDetail;
