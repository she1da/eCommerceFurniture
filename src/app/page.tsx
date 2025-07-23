import React from "react";
// import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import ContainerMotion from "@/components/DivProps";
import Title from "@/components/MotionH2";
import { BlurIn } from "@/components/BlurIn";
interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    slug: string;
    description: string;
}

async function getProducts(): Promise<Product[]> {
    const res = await fetch("http://localhost:3001/products", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: `$${item.price.toFixed(2)}`,
        image: item.image,
        slug: item.name.toLowerCase().replace(/\s+/g, "-"),
        description: item.description,
    }));
}

export default async function Home() {
    const products = await getProducts();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Hero
                title="Elegant Furniture for Every Room"
                subtitle="Discover timeless designs that bring comfort and style to your home."
                image="/scandinavian-interior-mockup-wall-decal-background 1.jpg"
            />
            <main className="display-flex mx-auto" role="main">
                {products.map((product, idx) => (
                    <div key={idx}>
                        <BlurIn duration={1.5}>
                            <ProductCard title={product.name} {...product} />
                        </BlurIn>
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    );
}
