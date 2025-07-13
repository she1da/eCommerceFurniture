import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold text-lg mb-2">FurniShop</h3>
                    <p className="text-sm text-gray-400">
                        High-quality furniture made to last.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-md mb-2">Quick Links</h4>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <a href="/" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/shop" className="hover:underline">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-md mb-2">Newsletter</h4>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-2 rounded-md text-black"
                    />
                    <button className="mt-2 w-full bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="text-center text-xs text-gray-500 mt-8">
                © 2025 FurniShop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
