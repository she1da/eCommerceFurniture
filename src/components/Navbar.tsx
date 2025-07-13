"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import CartIcon from "./CartIcon";
import Link from "next/link";
const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
            <div className="text-2xl font-bold">FurniShop</div>
            <div className="hidden md:flex space-x-6 text-gray-700">
                <Link className="hover:text-black" href="/">
                    Home
                </Link>
                <Link href="/shop" className="hover:text-black">
                    Shop
                </Link>

                <a href="/blog" className="hover:text-black">
                    Blog
                </a>
                <a href="/contact" className="hover:text-black">
                    Contact
                </a>
            </div>
            <div className="md:flex items-center space-x-4">
                <CartIcon />
            </div>
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
