import React from "react";
import { useCart } from "../context/cartContext";
import { FiShoppingCart } from "react-icons/fi";

const CartIcon: React.FC = () => {
    const { state } = useCart();
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="relative cursor-pointer">
            <FiShoppingCart size={24} />
            {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                    {itemCount}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
