import { useEffect, useState } from "react";
import { modalSuccess } from "../components/organisms/modalNotify";
import type { Cart, DetailCreateDTO } from "../models/order";
import type { PaymentCreateDTO } from "../models/payment";
import type { ProductResponseDTO } from "../models/Product";
import { createDetail } from "../services/detailsService";
import { createPayment } from "../services/paymentService";

export const useShoppingCart = () => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [payment, setPayment] = useState<PaymentCreateDTO>();

  const CART_KEY = "cart";

  // add products to the shopping cart
  const addProductToCart = (product: ProductResponseDTO, quantity = 1) => {
    const storedCart = localStorage.getItem(CART_KEY);

    let cart: Cart[] = storedCart ? (JSON.parse(storedCart) as Cart[]) : [];

    const existingItem = cart.find((item) => item.productId === product.id);

    if (existingItem) {
      existingItem.productQuantity += 1;
    } else {
      cart.push({
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        productQuantity: quantity,
      });
    }
    modalSuccess("Product added", "Product added to shopping cart");
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  };

  // get products of the cart
  const getCart = () => {
    const storedCart = localStorage.getItem(CART_KEY);
    return storedCart ? (JSON.parse(storedCart) as Cart[]) : [];
  };

  // generate invoice to pay
  const onClickToGenerateInvoice = async () => {

    if (cart.length === 0) {
      return;
    }

    const details: DetailCreateDTO[] = cart.map((product) => ({
      productId: product.productId,
      quantity: product.productQuantity,
    }));

    try {
      const response = await createDetail(details);

      if (response.success) {
        modalSuccess(
          "Invoice created",
          "Your invoice was generated successfully",
        );
        localStorage.removeItem(CART_KEY);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //generate payment
  const onClickToGeneratePayment = async (payment: PaymentCreateDTO[]) => {
    try {
      const response = await createPayment(payment);
      if (response.success) {
        modalSuccess(
          "Payment generated",
          "Your payment was generated successfully",
        );
        localStorage.removeItem(CART_KEY);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickConfirmPayment = async () => {
    try {
      const response = await onClickToGenerateInvoice();
    } catch (error) {
      console.error(error);
    }
  };

  const onChangePayment = () => {
    setPayment({
        orderId: 0,
        type: "CREDIT_CARD",
        total: cart.reduce((acc, item) => acc + item.productPrice * item.productQuantity, 0),
      });
  };

  useEffect(() => {
    const products = getCart();
    if (products) {
      setCart(products);
    } else {
      setCart([]);
    }
  }, []);

  return {
    cart,
    payment, 
    getCart, 
    addProductToCart,
    onClickToGenerateInvoice,
    onClickToGeneratePayment,
    onClickConfirmPayment,
    onChangePayment,
  };
};
