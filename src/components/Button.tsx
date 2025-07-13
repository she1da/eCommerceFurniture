import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    ...props
}) => {
    const base = "px-6 py-2 rounded-md font-medium transition duration-200";
    const variants = {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary:
            "bg-white text-black border border-gray-300 hover:bg-gray-100",
    };

    return (
        <button className={`${base} ${variants[variant]}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
