"use client";
import React from "react";
import Image from "next/image";

type HeroProps = {
    title: string;
    subtitle: string;
    image: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
    console.log({ image });
    return (
        <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-100">
            <Image
                src={image}
                alt="hero"
                className="absolute inset-0 object-cover w-full h-full opacity-40"
                fill
            />
            <div className="relative text-center z-10">
                <h1 className="text-4xl font-bold mb-4 text-black">{title}</h1>
                <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
                <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                    Shop Now
                </button>
            </div>
        </section>
    );
};

export default Hero;
