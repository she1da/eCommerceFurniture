"use client";
import { useCart } from "../../context/cartContext";

export default function CartPage() {
    const { cart, updateQuantity, removeFromCart, clearCart, total } =
        useCart();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center border-b py-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover mr-4"
                            />
                            <div className="flex-1">
                                <h2 className="text-lg">{item.name}</h2>
                                <p>
                                    ${item.price} x {item.quantity}
                                </p>
                                <div className="flex items-center mt-2">
                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity - 1
                                            )
                                        }
                                        className="bg-gray-300 text-black p-1 px-2 rounded"
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity + 1
                                            )
                                        }
                                        className="bg-gray-300 text-black p-1 px-2 rounded"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 text-white p-1 px-2 rounded ml-4"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <p className="text-xl">Total: ${total.toFixed(2)}</p>
                        <button
                            onClick={clearCart}
                            className="bg-red-500 text-white p-2 rounded mt-2"
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
