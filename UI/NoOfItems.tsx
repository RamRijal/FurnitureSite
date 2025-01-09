import React, { useState } from 'react';

const NoOfItems = () => {
    // State to hold the quantity value
    const [quantity, setQuantity] = useState(1); // Default quantity is 1

    // Function to handle decrement
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Function to handle increment
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    // Function to handle input change (if needed)
    const handleInputChange = (e) => {
        // Ensure that only valid numbers are entered
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    return (
        <div className="max-w-xs my-4">
            <div className="relative flex items-center max-w-[10rem] gap-2">
                {/* DECREASE BUTTON */}
                <button
                    type="button"
                    onClick={handleDecrement}
                    className="bg-gray-300 hover:bg-gray-500 hover:scale-105 border border-gray-300 rounded-s-md p-3 h-11 flex justify-center items-center"
                >
                    <p className='text-white text-4xl'>-</p>
                </button>
                {/* INPUT FIELD */}
                <input
                    type="text"
                    value={quantity}  // Display the current quantity
                    onChange={handleInputChange}  // Update quantity when user types
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-200 border-2 border-gray-300 h-14 text-center text-xl text-gray-900 block w-60 py-2.5"
                    placeholder="Quantity"
                    required
                />

                {/* INCREASE BUTTON */}
                <button
                    type="button"
                    onClick={handleIncrement}
                    className="bg-gray-300 hover:bg-gray-500 hover:scale-105 border border-gray-300 rounded-e-lg p-3 h-11 flex justify-center items-center"
                >
                    <p className='text-white text-4xl'>+</p>
                </button>
            </div>
        </div>
    );
};

export default NoOfItems;
