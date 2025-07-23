"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import Image from "next/image";

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    slug: string;
    description: string;
    title?: string; // Added since your filter uses title
}

const ShopPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:3001/products");
                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await res.json();
                setProducts(
                    data.map((item: any) => ({
                        id: item.id,
                        name: item.name,
                        title: item.name, // Added to match your filter logic
                        price: `$${item.price.toFixed(2)}`,
                        image: item.image,
                        slug: item.name.toLowerCase().replace(/\s+/g, "-"),
                        description: item.description,
                    }))
                );
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "Unknown error occurred"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products
        .filter((p) =>
            p.title?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === "price-asc")
                return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
            if (sortOption === "price-desc")
                return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
            if (sortOption === "title-asc")
                return a.title?.localeCompare(b.title || "") || 0;
            if (sortOption === "title-desc")
                return b.title?.localeCompare(a.title || "") || 0;
            return 0;
        });

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

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <header className="relative py-10 text-center h-64 overflow-hidden">
                <Image
                    src="/Rectangle 1.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    quality={80}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-2 text-white">
                        Shop Our Collection
                    </h1>
                    <p className="text-gray-200">
                        Browse our full range of premium furniture
                    </p>
                </div>
            </header>
            <main className="flex-1 px-6 py-12 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border px-4 py-2 rounded w-full md:w-1/2"
                    />
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="border px-4 py-2 rounded"
                    >
                        <option value="">Sort</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="title-asc">Title: A-Z</option>
                        <option value="title-desc">Title: Z-A</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            title={product.name}
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ShopPage;
