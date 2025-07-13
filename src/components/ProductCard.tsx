"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
    title: string;
    price: string;
    image: string;
    slug: string;
};

const ProductCard: React.FC<Product> = ({ title, price, image, slug }) => {
    return (
        <Link href={`/product/${slug}`}>
            <div className="cursor-pointer p-4 rounded-lg shadow hover:shadow-md transition-all">
                <div className="relative w-full h-64 mb-4">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-700">{price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
