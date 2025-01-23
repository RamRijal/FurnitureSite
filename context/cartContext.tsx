'use client'
import { Product } from "@/types/product";
import { createContext, useContext, useState } from "react";

// Type definition
interface CartContextProps {
    cartItems: Product[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
}

// Creates context
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Provider Defined
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (product: Product, quantity: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(cartItem => cartItem.id === product.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === product.id
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + quantity,
                            totalPrice: (cartItem.quantity + 1) * cartItem.price
                        }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...product, quantity, totalPrice: product.price * quantity }];
            }
        });

    };

    const removeFromCart = (productId: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));//filters only the items that doesnt match the productID with the itemId i.e the item which you select for removal gives off a ID and then the Id from the previously set array of cartItems is examined and if same, gives the  new array without the same ID item
    };

    const increaseQuantity = (productId: string) => {
        setCartItems((prevItems) => prevItems.map((item) =>
            item.id === productId ?
                { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
                : item))
    }
    const decreaseQuantity = (productId: string) => {
        setCartItems((prevItems) => prevItems.map((item) =>
            item.id === productId && item.quantity > 1 ?
                { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
                : item))
    }
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

// 'use client';
// import { createContext, useContext, useState } from 'react';
// import { Product } from '@/types/product';

// interface CartContextProps {
//     cartItems: Product[];
//     addToCart: (product: Product) => void;
//     removeFromCart: (productId: number) => void;
// }

// const CartContext = createContext<CartContextProps | undefined>(undefined);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//     const [cartItems, setCartItems] = useState<Product[]>([]);

//     const addToCart = (product: Product) => {
//         setCartItems((prevItems) => [...prevItems, product]);
//     };

//     const removeFromCart = (productId: number) => {
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
//     };

//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };
