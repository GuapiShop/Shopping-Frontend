import { modalSuccess } from "../components/organisms/modalNotify";
import type { Cart, DetailCreateDTO } from "../models/order";
import type { ProductResponseDTO } from "../models/Product";
import { createDetail } from "../services/detailsService";

export const useShoppingCart = () => {
    const CART_KEY = "cart";

    // add products to the shopping cart
    const addProductToCart = (product: ProductResponseDTO, quantity = 1) => {
        const storedCart = localStorage.getItem(CART_KEY);

        let cart: Cart[] = storedCart ? (JSON.parse(storedCart) as Cart[]) : [];

        const existingItem = cart.find(
            item => item.productId === product.id
        );

        if (existingItem) {
            existingItem.productQuantity += 1;
        } else {
            cart.push({
                productId: product.id,
                productName:product.name, 
                productPrice: product.price, 
                productQuantity: quantity,
            });
        }
        modalSuccess('Product added', 'Product added to shopping cart');
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    };

    // get products of the cart
    const getCart = (): Cart[] => {
        const storedCart = localStorage.getItem(CART_KEY);
        return storedCart ? (JSON.parse(storedCart) as Cart[]) : [];
    };

    // generate invoice to pay
    const onClickToGenerateInvoice = async () => {
        const products = getCart();

        if (products.length === 0) {
            return;
        }

        const details: DetailCreateDTO[] = products.map(product => ({
            productId: product.productId,
            quantity: product.productQuantity,
        }));

        try {
            const response = await createDetail(details);

            if (response.success) {
                modalSuccess("Invoice created", "Your invoice was generated successfully");
                localStorage.removeItem(CART_KEY);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return {
        getCart,
        addProductToCart,
        onClickToGenerateInvoice, 
    }
}