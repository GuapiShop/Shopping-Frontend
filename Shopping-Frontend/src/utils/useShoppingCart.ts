import { modalSuccess } from "../components/organisms/modalNotify";
import type { Cart } from "../models/order";
import type { ProductResponseDTO } from "../models/Product";

export const useShoppingCart = () => {
    const CART_KEY = "cart";

    // add a single product into the cart
    const addSingleToCart = (product: ProductResponseDTO) => {
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
                productQuantity: 1,
            });
        }
        modalSuccess('Product added', 'Product added to shopping cart');
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    };

    // add many products into the cart
    const addToCart = () => {
    };

    // get products of the cart
    const getCart = (): Cart[] => {
        const storedCart = localStorage.getItem(CART_KEY);
        return storedCart ? (JSON.parse(storedCart) as Cart[]) : [];
    };

    return {
        getCart,
        addSingleToCart,
        addToCart,
    }
}