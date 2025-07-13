"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

export type Product = {
    title: string;
    price: string;
    image: string;
};

type CartItem = Product & { quantity: number };

type CartState = {
    items: CartItem[];
};

type CartAction =
    | { type: "ADD_ITEM"; payload: Product }
    | { type: "REMOVE_ITEM"; payload: Product }
    | { type: "INCREMENT"; payload: Product }
    | { type: "DECREMENT"; payload: Product };

const initialState: CartState = {
    items: [],
};

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.items.find(
                (item) => item.title === action.payload.title
            );
            if (existing) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.title === action.payload.title
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };
        }
        case "REMOVE_ITEM": {
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.title !== action.payload.title
                ),
            };
        }
        case "INCREMENT": {
            return {
                ...state,
                items: state.items.map((item) =>
                    item.title === action.payload.title
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        }
        case "DECREMENT": {
            return {
                ...state,
                items: state.items
                    .map((item) =>
                        item.title === action.payload.title
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter((item) => item.quantity > 0),
            };
        }
        default:
            return state;
    }
}

const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
} | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};
