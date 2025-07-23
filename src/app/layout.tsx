// src/app/layout.tsx
import { AuthProvider } from "../context/authContext";
import { CartProvider } from "../context/cartContext";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <CartProvider>{children}</CartProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
