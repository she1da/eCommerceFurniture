"use client";
import { useState } from "react";
import Footer from "../components/Footer";
// import Image from "next/image";
import Button from "../components/Button";
import { useCart } from "../context/cartContext";
import QuantitySelector from "../components/QuantitySelector";

const ProductDetailsPage: React.FC = () => {
    const product = {
        title: "Modern Sofa",
        slug: "Modern Sofa",
        price: "$499",
        image: "/images/sofa.jpg",
        description:
            "A stylish and modern sofa made with premium fabric and solid wood legs. Perfect for contemporary living spaces.",
    };

    const [quantity, setQuantity] = useState(1);
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            dispatch({ type: "ADD_ITEM", payload: product });
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* <Navbar /> */}
            <main className="flex-1 max-w-5xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* <Image src=$1 alt=$2 width={600} height={400} className="$3" /> */}
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
