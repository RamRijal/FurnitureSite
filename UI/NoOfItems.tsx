import { useCart } from '@/context/cartContext';
import React from 'react';

interface NoOfItemsProps {
    productId: string; // Add productId to identify which product's quantity to change
    onChange?: (quantity: number) => void;
}

const NoOfItems: React.FC<NoOfItemsProps> = ({ productId, onChange }) => {
    const { cartItems, increaseQuantity, decreaseQuantity } = useCart()

    // Find the current quantity of the product in the cart
    const product = cartItems.find((item) => item.id === productId);
    const currentQuantity = product?.quantity || 1;

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const newQuantity = Math.max(1, parseInt(value.replace(/[^0-9]/g, ''), 10) || 1); // Ensure minimum of 1
        // Trigger the optional callback if provided
        if (onChange) onChange(newQuantity);
    };

    return (
        <div className="max-w-xs my-4">
            <div className="relative flex items-center max-w-[10rem] gap-2">
                {/* DECREASE BUTTON */}
                <button
                    type="button"
                    onClick={() => decreaseQuantity(productId)}
                    className="bg-gray-300 hover:bg-gray-500 hover:scale-105 border border-gray-300 rounded-s-md p-3 h-11 flex justify-center items-center shadow-lg"
                >
                    <p className='text-black text-4xl'>-</p>
                </button>
                {/* INPUT FIELD */}
                <input
                    id='quantity'
                    min={1}
                    type="text"
                    value={currentQuantity}  // Display the current quantity
                    onChange={handleQuantityChange}  // Update quantity when user types
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-200 border-2 border-gray-300 h-14 text-center text-xl text-gray-900 block w-60 py-2.5"
                    placeholder="Quantity"
                    required
                />

                {/* INCREASE BUTTON */}
                <button
                    type="button"
                    onClick={() => increaseQuantity(productId)}
                    className="bg-[#1D6961] hover:bg-gray-500 hover:scale-105 border border-gray-300 rounded-e-lg p-3 h-11 flex justify-center items-center shadow-lg"
                >
                    <p className='text-black text-4xl'>+</p>
                </button>
            </div>
        </div>
    );
};

export default NoOfItems;
