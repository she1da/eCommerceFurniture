"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { useCart } from "@/context/cartContext";
import QuantitySelector from "@/components/QuantitySelector";
import Image from "next/image";

interface Product {
    id: number;
    title: string;
    slug: string;
    price: string;
    image: string;
    description: string;
}

const ProductDetailsPage = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const { dispatch } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${slug}`);
                if (!response.ok) {
                    throw new Error("Product not found");
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "Failed to load product"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [slug]);

    const handleAddToCart = () => {
        if (!product) return;
        for (let i = 0; i < quantity; i++) {
            dispatch({ type: "ADD_ITEM", payload: product });
        }
    };

    if (loading)
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    if (error)
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                Error: {error}
            </div>
        );
    if (!product)
        return (
            <div className="min-h-screen flex items-center justify-center">
                Product not found
            </div>
        );

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 max-w-5xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative aspect-square">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-4">
                            {product.title}
                        </h1>
                        <p className="text-2xl text-gray-800 mb-4">
                            {product.price}
                        </p>
                        <p className="text-gray-600 mb-6">
                            {product.description}
                        </p>

                        <div className="mb-4">
                            <QuantitySelector
                                quantity={quantity}
                                onIncrement={() => setQuantity(quantity + 1)}
                                onDecrement={() =>
                                    setQuantity(Math.max(1, quantity - 1))
                                }
                            />
                        </div>

                        <Button onClick={handleAddToCart}>Add to Cart</Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetailsPage;
