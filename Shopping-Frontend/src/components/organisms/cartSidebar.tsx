import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { Cart } from "../../models/order";
import { useShoppingCart } from "../../utils/useShoppingCart";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {

    const [cart, setCart] = useState<Cart[]>([]);
    const { getCart } = useShoppingCart();

    useEffect(() => {
        const products = getCart();
        if (products) {
            setCart(products);
        } else {
            setCart([]);
        }
    }, [isOpen]);

    return (
        <>
        {isOpen && (
            <div
            className="fixed inset-0 bg-amber-50/50 bg- z-40"
            onClick={onClose}
            />
        )}
        <div
            className={`
            fixed top-0 right-0 h-full w-96 bg-white z-50
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
        >
            <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <button className="hover:cursor-pointer" onClick={onClose}>
                    <XMarkIcon className="h-6 w-6" />
                </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
                {cart.length === 0 ? (
                    <p className="text-gray-500">Empty Cart</p>
                ) : (
                    cart.map((item) => (
                        <div
                            key={item.productId}
                            className="flex justify-between items-center mb-3"
                        >
                            <div>
                                <p className="font-medium">{item.productName}</p>
                                <p className="text-sm text-gray-500">
                                    {item.productQuantity} x ${item.productPrice}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="p-4">
                <button className="w-full bg-[#eb354c] text-white py-2 hover:cursor-pointer rounded">
                    Go to Pay
                </button>
            </div>
        </div>
        </>
    );
};

export default CartSidebar;
