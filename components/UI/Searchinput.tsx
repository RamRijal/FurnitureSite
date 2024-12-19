import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const SearchInput = () => {
    return (
        <div className="z-50 bg-gray-200 rounded-md p-9">
            <div className="flex  max-w-full items-center justify-center rounded-lg ">
                <div className="flex w-full shadow-lg">
                    {/* FILTER CATEGORIES */}
                    <div className="flex-col max-w-7xl text-left  items-center justify-between rounded-tl-xl rounded-bl-xl border-r border-gray-200 bg-white p-5 ">
                        <span className='text-gray-500 text-base '>Categories</span>
                        <div className="flex gap-20 items-center justify-between mt-1 bg-gray-100 text-left px-4 py-2 rounded-md">
                            <span className='text-gray-500 font-bold text-lg '>All </span>
                            <FaAngleDown className='text-gray-500' />
                        </div>
                    </div>
                    {/* FILTER PRICE */}
                    <div className="flex-col w-full text-left  items-center justify-between border-r border-gray-200 bg-white p-5">
                        <span className='text-gray-500 text-base  '>Price</span>
                        <div className="flex gap-12 items-center justify-between mt-1 bg-gray-100 text-left px-4 py-2 rounded-md">
                            <span className='text-gray-500 font-bold  text-lg'>$10k - 15k </span>
                            <FaAngleDown className='text-gray-500' />
                        </div>
                    </div>
                    {/* SEARCH INPUT */}
                    <input type="text" className=" max-w-7xl px-4 bg-white text-gray-500 font-medium  text-base text-left pl-4 outline-0 focus:outline-none" placeholder='Search for items (eg: Sofa)' />
                    {/* SEARCH ICON */}
                    <div className="flex w-10 items-center justify-center   p-5 px-9 bg-blue-500  rounded-tr-xl rounded-br-xl text-white font-semibold hover:bg-blue-800 transition-colors">
                        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-7 fill-gray-200 transition">
                            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SearchInput;
