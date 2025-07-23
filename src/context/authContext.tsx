"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Define types for the user and context
interface User {
    id: string;
    email: string;
    name: string;
    token?: string;
    password: string;
}

interface authContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const authContext = createContext<authContextType | undefined>(undefined);

// Custom hook to access auth context
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

// AuthProvider component to wrap the app
interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Simulate checking for an existing session (e.g., from localStorage or API)
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Simulate login with a fake API
    const login = async (email: string, password: string) => {
        try {
            // Replace with your fake API endpoint (e.g., JSONPlaceholder or custom)
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            const userData = await response.json();
            const mockUser: User = {
                id: userData.id,
                email: userData.email || email,
                name: userData.name,
                token: "mock-token-123", // Simulate a token
                password,
            };
            setUser(mockUser);
            localStorage.setItem("user", JSON.stringify(mockUser));
        } catch (error) {
            console.error("Login failed:", error);
            throw new Error("Invalid credentials");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    );
};
