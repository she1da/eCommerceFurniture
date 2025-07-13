import React from "react";

type Props = {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

const QuantitySelector: React.FC<Props> = ({
    quantity,
    onIncrement,
    onDecrement,
}) => {
    return (
        <div className="flex items-center space-x-2">
            <button onClick={onDecrement} className="px-3 py-1 border rounded">
                -
            </button>
            <span className="min-w-[2ch] text-center">{quantity}</span>
            <button onClick={onIncrement} className="px-3 py-1 border rounded">
                +
            </button>
        </div>
    );
};

export default QuantitySelector;
