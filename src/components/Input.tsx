import React from "react";

type InputProps = {
    label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <div className="mb-4">
            {label && (
                <label className="block text-sm font-medium mb-1">
                    {label}
                </label>
            )}
            <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                {...props}
            />
        </div>
    );
};

export default Input;
