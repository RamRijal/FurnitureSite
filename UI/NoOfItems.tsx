import React, { useState } from 'react';

interface NoOfItemsProps {
    onChange: (quantity: number) => void;
}

const NoOfItems: React.FC<NoOfItemsProps> = ({ onChange }) => {
    // State to hold the quantity value
    const [quantity, setQuantity] = useState(1); // Default quantity is 1

    // Function to handle decrement
    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onChange(newQuantity);  // Send the updated quantity to parent

        }
    };

    // Function to handle increment
    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onChange(newQuantity);  // Send the updated quantity to parent
    };

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Math.max(1, parseInt(e.target.value) || 1); // Ensure minimum of 1
        setQuantity(newQuantity);
        onChange(newQuantity);
    };

    return (
        <div className="max-w-xs my-4">
            <div className="relative flex items-center max-w-[10rem] gap-2">
                {/* DECREASE BUTTON */}
                <button
                    type="button"
                    onClick={handleDecrement}
                    className="bg-gray-300 hover:bg-gray-500 hover:scale-105 border border-gray-300 rounded-s-md p-3 h-11 flex justify-center items-center shadow-lg"
                >
                    <p className='text-black text-4xl'>-</p>
                </button>
                {/* INPUT FIELD */}
                <input
                    id='quantity'
                    min={1}
                    type="text"
                    value={quantity}  // Display the current quantity
                    onChange={handleQuantityChange}  // Update quantity when user types
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-200 border-2 border-gray-300 h-14 text-center text-xl text-gray-900 block w-60 py-2.5"
                    placeholder="Quantity"
                    required
                />

                {/* INCREASE BUTTON */}
                <button
                    type="button"
                    onClick={handleIncrement}
                    className="bg-[#1D6961] hover:bg-gray-500 hover:scale-105 border border-gray-300 rounded-e-lg p-3 h-11 flex justify-center items-center shadow-lg"
                >
                    <p className='text-black text-4xl'>+</p>
                </button>
            </div>
        </div>
    );
};

export default NoOfItems;
