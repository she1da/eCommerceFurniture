"use client";

import { useCart } from "../context/cartContext";

import Image from "next/image";

interface CartProps {
    onClose: () => void;
}
export default function Cart({ onClose }: CartProps) {
    const {
        cart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
    } = useCart();
    // const [cart, setCart] = useState<CartItem[]>([]);
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full overflow-y-auto">
                <div className="p-4 border-b sticky top-0 bg-white z-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">
                            Your Cart ({totalItems})
                        </h2>
                        <button onClick={clearCart} className="text-red-500">
                            Clear All
                        </button>
                    </div>
                    <p className="text-lg font-semibold mt-2">
                        Total: ${totalPrice.toFixed(2)}
                    </p>
                </div>

                {cart.length === 0 ? (
                    <div className="p-4 text-center">Your cart is empty</div>
                ) : (
                    <div className="divide-y">
                        {cart.map((item) => (
                            <div key={item.id} className="p-4 flex gap-4">
                                <div className="relative w-20 h-20 flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-medium line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        ${item.price.toFixed(2)}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                            className="px-2 border rounded-l"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 border-t border-b">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                            className="px-2 border rounded-r"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="ml-auto text-red-500"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {cart.length > 0 && (
                    <div className="p-4 sticky bottom-0 bg-white border-t">
                        <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium">
                            Proceed to Checkout (${totalPrice.toFixed(2)})
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
