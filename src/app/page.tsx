import React from "react";
import { motion } from "framer-motion";
import RootLayout from "./layout";
import Div from "../components/DivProps";
import Title from "../components/MotionH2";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const App: React.FC = () => {
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
        <RootLayout>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <Hero
                    title="Elegant Furniture for Every Room"
                    subtitle="Discover timeless designs that bring comfort and style to your home."
                    image="/components/Asset/images/scandinavian-interior-mockup-wall-decal-background%201.jpg"
                />

                <main className="flex-1 px-6 py-12 max-w-6xl mx-auto">
                    <Title
                        className="text-2xl font-bold mb-6 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Featured Products
                    </Title>

                    <Div
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
                            <Div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProductCard {...product} />
                            </Div>
                        ))}
                    </Div>
                </main>

                <Footer />
            </div>
        </RootLayout>
    );
};

export default App;

// import React from "react";

// // import Header from "../components/Header";
// // import ProductsPage from "./Home/Home";

// const App: React.FC = () => {
//     return (
//         <div className="container mx-auto px-4 py-8">
//             {/* <Header name="ss" age={34} /> */}

//             {/* <ProductsPage /> */}
//         </div>
//     );
// };

// export default App;
// export default function Home() {
//     return (
//         <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//             <Header name="ss" age={34} />
//             <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//                 <a
//                     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//                     href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <Image
//                         aria-hidden
//                         src="/file.svg"
//                         alt="File icon"
//                         width={16}
//                         height={16}
//                     />
//                     Learn
//                 </a>
//                 <a
//                     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//                     href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <Image
//                         aria-hidden
//                         src="/window.svg"
//                         alt="Window icon"
//                         width={16}
//                         height={16}
//                     />
//                     Examples
//                 </a>
//                 <a
//                     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//                     href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <Image
//                         aria-hidden
//                         src="/globe.svg"
//                         alt="Globe icon"
//                         width={16}
//                         height={16}
//                     />
//                     Go to nextjs.org →
//                 </a>
//             </footer>
//         </div>
//     );
// }
