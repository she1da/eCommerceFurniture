"use client";
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useReducer,
} from "react";
import { useAuth } from "./authContext";

interface CartItem {
    id: number;
    productId: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

type CartAction =
    | {
          type: "ADD_ITEM";
          payload: {
              product: {
                  id: number;
                  name: string;
                  price: number;
                  image: string;
              };
              quantity?: number;
          };
      }
    | { type: "REMOVE_ITEM"; payload: { id: number } }
    | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
    | { type: "CLEAR_CART" }
    | { type: "SET_CART"; payload: CartItem[] };

interface CartContextType {
    cart: CartItem[];
    dispatch: React.Dispatch<CartAction>;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart reducer function
function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
    switch (action.type) {
        case "ADD_ITEM": {
            const { product, quantity = 1 } = action.payload;
            const existingItem = state.find(
                (item) => item.productId === product.id
            );

            if (existingItem) {
                return state.map((item) =>
                    item.productId === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [
                ...state,
                {
                    id: Date.now(),
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    quantity,
                    image: product.image,
                },
            ];
        }

        case "REMOVE_ITEM":
            return state.filter((item) => item.id !== action.payload.id);

        case "UPDATE_QUANTITY": {
            const { id, quantity } = action.payload;
            if (quantity < 1) {
                return state.filter((item) => item.id !== id);
            }
            return state.map((item) =>
                item.id === id ? { ...item, quantity } : item
            );
        }

        case "CLEAR_CART":
            return [];

        case "SET_CART":
            return action.payload;

        default:
            return state;
    }
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    const { user, isAuthenticated } = useAuth();

    // Calculate total
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // Load cart from storage/API
    useEffect(() => {
        const loadCart = async () => {
            if (isAuthenticated && user) {
                try {
                    const response = await fetch(
                        `http://localhost:3001/carts?userId=${user.id}`
                    );
                    const cartData = await response.json();
                    dispatch({
                        type: "SET_CART",
                        payload: cartData.length > 0 ? cartData[0].items : [],
                    });
                } catch (err) {
                    console.error("Failed to load cart:", err);
                }
            } else {
                const storedCart = localStorage.getItem("cart");
                if (storedCart) {
                    dispatch({
                        type: "SET_CART",
                        payload: JSON.parse(storedCart),
                    });
                }
            }
        };
        loadCart();
    }, [isAuthenticated, user]);

    // Sync cart to storage/API
    useEffect(() => {
        if (isAuthenticated && user) {
            fetch(`http://localhost:3001/carts/${user.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: user.id, items: cart }),
            }).catch((err) => console.error("Failed to sync cart:", err));
        } else {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, isAuthenticated, user]);

    const value = {
        cart,
        dispatch,
        total,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
