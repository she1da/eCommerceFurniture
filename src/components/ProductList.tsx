"use client";
import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useCart } from "../context/cartContext";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const { isAuthenticated } = useAuth();
    const { addToCart } = useCart();

    useEffect(() => {
        fetch("http://localhost:3001/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Failed to fetch products:", err));
    }, []);

    const handleDelete = async (id: number) => {
        if (!isAuthenticated) {
            alert("Please log in to delete products.");
            return;
        }
        try {
            await fetch(`http://localhost:3001/products/${id}`, {
                method: "DELETE",
            });
            setProducts(products.filter((product) => product.id !== id));
        } catch (err) {
            console.error("Failed to delete product:", err);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                    />
                    <h2 className="text-xl">{product.name}</h2>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-500 text-white p-2 rounded mt-2 mr-2"
                    >
                        Add to Cart
                    </button>
                    {isAuthenticated && (
                        <button
                            onClick={() => handleDelete(product.id)}
                            className="bg-red-500 text-white p-2 rounded mt-2"
                        >
                            Delete
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}
