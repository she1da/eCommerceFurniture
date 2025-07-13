"use client";

// import { useCart } from "../context/cartContext";
import Image from "next/image";
import { Product } from "@/types/product";
interface ProductListProps {
    products: Product[];
}
export default function ProductList({ products }: ProductListProps) {
    // const { addToCart } = useCart();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                    <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            style={{ objectFit: "contain" }}
                            className="p-4"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                            {product.title}
                        </h3>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xl font-bold">
                                ${product.price.toFixed(2)}
                            </span>
                            <div className="flex items-center">
                                <span className="text-yellow-500 mr-1">★</span>
                                <span>
                                    {product.rating.rate} (
                                    {product.rating.count})
                                </span>
                            </div>
                        </div>
                        <button
                            // onClick={() => addToCart(product)}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
