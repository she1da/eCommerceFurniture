"use client";
import React from "react";
import { motion } from "framer-motion";
// import RootLayout from "../layout";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
    const products = [
        {
            title: "Dining Table",
            price: "$599",
            image: "/images/table.jpg",
            slug: "table",
            description: "",
        },
        {
            title: "Leather Armchair",
            price: "$349",
            image: "/images/armchair.jpg",
            slug: "Leather",
            description: "",
        },
        {
            title: "Bookshelf",
            price: "$259",
            image: "/images/bookshelf.jpg",
            slug: "Bookshelf",
            description: "",
        },
        {
            title: "Bed Frame",
            price: "$699",
            image: "/images/bed.jpg",
            slug: "Frame",
            description: "",
        },
        {
            title: "Coffee Table",
            price: "$149",
            image: "/images/coffeetable.jpg",
            description: "",

            slug: "Coffee",
        },
        {
            title: "Wardrobe",
            price: "$799",
            image: "/images/wardrobe.jpg",
            description: "",

            slug: "Wardrobe",
        },
    ];

    return (
        // <RootLayout>
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {/* <Hero
                title="Elegant Furniture for Every Room"
                subtitle="Discover timeless designs that bring comfort and style to your home."
                image="./Asset/images/scandinavian-interior-mockup-wall-decal-background 1.jpg"
            /> */}

            <main className="flex-1 px-6 py-12 max-w-6xl mx-auto">
                <motion.h2
                    className="text-2xl font-bold mb-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Products
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </motion.div>
            </main>

            <Footer />
        </div>
        // </RootLayout>
    );
};

export default HomePage;
