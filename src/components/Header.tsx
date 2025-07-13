import React from "react";

interface HeaderProps {
    name: string;
    age?: number;
}

const Header: React.FC<HeaderProps> = ({ name = "sheyda" }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    );
};

export default Header;
