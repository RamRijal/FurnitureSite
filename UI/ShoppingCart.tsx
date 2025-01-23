import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";
import { BiSolidChevronLeft, BiTrash } from "react-icons/bi";

const ShoppingCart = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-100 min-h-screen">
            {/* Shopping Cart Section */}
            <div className="w-full lg:w-3/5 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
                <table className="w-full  text-gray-700 border-collapse">
                    <thead className="border-y-2  border-black">
                        <tr>
                            <th className="py-3 text-left">Product</th>
                            <th className="py-3 text-left">Price</th>
                            <th className="py-3 text-center">Category</th>
                            <th className="py-3 text-center">Quantity</th>
                            <th className="py-3 text-left">Total Price</th>
                            <th className="py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index} className="border-b  hover:bg-gray-200 ">
                                <td className="py-4 flex items-center gap-4 w-full">
                                    <Image
                                        alt={item.name}
                                        src={item.image}
                                        height={80}
                                        width={80}
                                        className="rounded-md object-cover h-24"
                                    />
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500 w-full text-justify">{item.description}</p>
                                    </div>
                                </td>

                                <td className="py-4 ">
                                    <div className="flex text-center">
                                        <p className="text-sm text-gray-500 w-full text-center">$&nbsp;{item.price}</p>
                                    </div>
                                </td>

                                <td className="py-4 ">
                                    <div className="flex text-center">
                                        <p className="text-sm text-gray-500 w-full text-center">{item.category}</p>
                                    </div>
                                </td>

                                <td className="py-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button onClick={() => decreaseQuantity(item.id)} className="w-8 h-8 bg-white border rounded flex items-center justify-center">
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)} className="w-8 h-8 bg-white border rounded flex items-center justify-center">
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="py-4 text-center text-green-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</td>
                                <td className="py-4 text-center">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 font-bold"
                                    >
                                        <BiTrash size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Subtotal */}
                <div className="mt-6 flex flex-col items-end gap-3">
                    <div className="flex justify-between w-full lg:w-1/2 text-gray-600">
                        <span>Subtotal:</span>
                        <span>${calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between w-full lg:w-1/2 text-gray-600">
                        <span>Delivery:</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between w-full lg:w-1/2 border-t pt-3 text-gray-800 font-bold">
                        <span>Total:</span>
                        <span>${calculateTotal()}</span>
                    </div>
                </div>
                <Link href={'/products'}>
                    <button className="flex items-center justify-center gap-2 bottom-0 mt-6 px-4 py-3 text-black rounded-lg hover:bg-brand border-2">
                        <BiSolidChevronLeft /> Continue Shopping
                    </button>
                </Link>
            </div>

            {/* Payment Info Section */}
            <div className=" lg:w-2/5 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Info</h2>
                <div className="mb-6">
                    <p className="mb-2 text-gray-600 font-medium">Choose your payment method</p>
                    <div className="flex gap-4">
                        <button className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-yellow-700">
                            Credit Card
                        </button>
                        <button className="w-full py-2 bg-blue-600 border rounded-lg hover:bg-gray-100">
                            PayPal
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name On Card</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg text-gray-400"
                        placeholder="Enter name"
                        defaultValue="Anton Pecherits"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg text-gray-400"
                        placeholder="**** **** **** 3271"
                    />
                </div>
                <div className="flex gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Expiration Date</label>
                        <div className="flex gap-2">
                            <select className="w-20 px-2 py-2 border rounded-lg text-gray-400">
                                <option value="MM">MM</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                            </select>
                            <select className="w-24 px-2 py-2 border rounded-lg text-gray-400">
                                <option value="YYYY">YYYY</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm mb-2 text-gray-400">CVV</label>
                        <input
                            type="text"
                            className="w-20 px-4 py-2 border rounded-lg"
                            placeholder="XXX"
                        />
                    </div>
                </div>
                <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Check Out
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;
