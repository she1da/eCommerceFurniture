"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
    id: number;
    title: string;
    price: string;
    image: string;
    slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    title,
    price,
    image,
    slug,
}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${slug}`);
    };

    return (
        <div
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={handleClick}
        >
            <div className="relative h-48">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="p-4">
                <h3 className="font-medium text-lg">{title}</h3>
                <p className="text-gray-600">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
