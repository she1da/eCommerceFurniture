import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";

const ShopPage: React.FC = () => {
    const allProducts = [
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

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");

    const filteredProducts = allProducts
        .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortOption === "price-asc")
                return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
            if (sortOption === "price-desc")
                return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
            if (sortOption === "title-asc")
                return a.title.localeCompare(b.title);
            if (sortOption === "title-desc")
                return b.title.localeCompare(a.title);
            return 0;
        });

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <header className="bg-gray-100 py-10 text-center">
                <h1 className="text-3xl font-bold mb-2">Shop Our Collection</h1>
                <p className="text-gray-600">
                    Browse our full range of premium furniture
                </p>
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
                    {filteredProducts.map((product, idx) => (
                        <ProductCard key={idx} {...product} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ShopPage;

// import React from "react";
// import Navbar from "../components/Navbar";
// import ProductCard from "../components/ProductCard";
// import Footer from "../components/Footer";

// const ShopPage: React.FC = () => {
//     const products = [
//         { title: "Dining Table", price: "$599", image: "/images/table.jpg" },
//         {
//             title: "Leather Armchair",
//             price: "$349",
//             image: "/images/armchair.jpg",
//         },
//         { title: "Bookshelf", price: "$259", image: "/images/bookshelf.jpg" },
//         { title: "Bed Frame", price: "$699", image: "/images/bed.jpg" },
//         {
//             title: "Coffee Table",
//             price: "$149",
//             image: "/images/coffeetable.jpg",
//         },
//         { title: "Wardrobe", price: "$799", image: "/images/wardrobe.jpg" },
//     ];

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <header className="bg-gray-100 py-10 text-center">
//                 <h1 className="text-3xl font-bold mb-2">Shop Our Collection</h1>
//                 <p className="text-gray-600">
//                     Browse our full range of premium furniture
//                 </p>
//             </header>

//             <main className="flex-1 px-6 py-12 max-w-6xl mx-auto">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {products.map((product, idx) => (
//                         <ProductCard key={idx} {...product} />
//                     ))}
//                 </div>
//             </main>

//             <Footer />
//         </div>
//     );
// };

// export default ShopPage;
