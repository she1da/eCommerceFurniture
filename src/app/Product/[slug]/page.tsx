import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
// import { products } from "@/lib/mockData";
// import QuantitySelector from "../../../components/QuantitySelector";
// import { useCart } from "../../../context/cartContext";
// import Image from "next/image";
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
export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        return notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 max-w-5xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* <Image
                        src={product.image}
                        alt={product.title}
                        className="w-full rounded-lg shadow-md"
                    /> */}
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
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
