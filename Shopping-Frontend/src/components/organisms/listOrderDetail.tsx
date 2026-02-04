import type React from "react";
import type { Cart } from "../../models/order";

type ListOrderDetailProps = {
  cart: Cart[];
};

const ListOrderDetail: React.FC<ListOrderDetailProps> = ({ cart }) => {
  
  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-gray-500">Empty Cart</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.productId}
            className=""
          >
            <div>
              <p className="">{item.productName}</p>
              <p className="">
                {item.productQuantity} x ${item.productPrice}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListOrderDetail;
