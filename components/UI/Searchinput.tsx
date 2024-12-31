'use client'
import { Product } from '@/types/product';
import { category, getProducts, priceRanges } from '@/utils/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const SearchInput = () => {
    const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);
    const [isPriceDropdownVisible, setIsPriceDropdownVisible] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredproducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState<number[] | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(() => {
        const MainData = async () => {
            const data = await getProducts();
            setProducts(data);
            setFilteredProducts(data); // Initialize with all products
        };
        MainData();
    }, []);

    useEffect(() => {
        let filtered = products;
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }
        if (priceRange) {
            filtered = filtered.filter(
                product => product.price >= priceRange[0] && product.price <= priceRange[1]
            );
        }
        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [selectedCategory, priceRange, searchQuery, products])

    // DROPDOWN TOGGLING//
    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownVisible((prev) => !prev);
    }
    const togglePriceDropdown = () => {
        setIsPriceDropdownVisible((prev) => !prev);
    }
    useEffect(() => {
        if (isCategoryDropdownVisible) {
            setIsPriceDropdownVisible(false);
            setIsCategoryDropdownVisible(true);
        }
        if (isPriceDropdownVisible) {
            setIsPriceDropdownVisible(true);
            setIsCategoryDropdownVisible(false);
        }
    }, [isCategoryDropdownVisible, isPriceDropdownVisible])

    //set SELECTED category and price
    const handleSelectedCategory = (e: React.SetStateAction<string>) => {
        setSelectedCategory(e)
        setIsCategoryDropdownVisible(false);
    }
    const handleSelectedPrice = (range: number[]) => {
        setPriceRange(range)
        setIsPriceDropdownVisible(false)
    }
    return (
        <div className="z-50 bg-gray-200 rounded-md p-9">
            <div className="flex  max-w-full items-center justify-center rounded-lg ">
                <div className="flex w-full shadow-lg">
                    {/* FILTER CATEGORIES */}
                    <div className="flex-col max-w-7xl text-left  items-center justify-between rounded-tl-xl rounded-bl-xl border-r border-gray-200 bg-white p-5 ">
                        <span className='text-gray-500 text-base '>Categories</span>

                        <button
                            onClick={toggleCategoryDropdown}
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="dropdown"
                            className="flex w-48 justify-between mt-1 bg-gray-100 text-left rounded-md text-white  hover:bg-[#1d6961] focus:ring-4 focus:outline-none focus:ring-[#1d6961] font-normal px-4 py-2.5 items-center dark:bg-[#1d6961] dark:hover:bg-[#1d6961] dark:focus:ring-[#1d6961] text-lg" type="button">
                            {selectedCategory}
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {/* <!-- Dropdown menu --> */}
                        {isCategoryDropdownVisible && (

                            <div
                                id="dropdown"
                                className={` absolute z-50 ${isCategoryDropdownVisible ? 'block' : 'hidden'}  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                            >
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    {category.map((data) => {
                                        return (<li onClick={() => handleSelectedCategory(data)} key={data}>
                                            <Link
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                {data}
                                            </Link>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* FILTER PRICE */}
                    <div className="flex-col max-w-7xl text-left border-gray-200 bg-white p-5 items-center justify-between border-r  ">
                        <span className='text-gray-500 text-base '>Price</span>

                        <button
                            onClick={togglePriceDropdown}
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="dropdown"
                            className="flex w-52 justify-between mt-1 bg-gray-100 text-left rounded-md text-white  hover:bg-[#1d6961] focus:ring-4 focus:outline-none focus:ring-[#1d6961] font-normal px-4 py-2.5 items-center dark:bg-[#1d6961] dark:hover:bg-[#1d6961] dark:focus:ring-[#1d6961] text-lg" type="button">
                            {priceRange ? `$${priceRange[0]} - $${priceRange[1]}` : 'Select Price'}
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {/* <!-- Dropdown menu --> */}
                        {isPriceDropdownVisible && (
                            <div
                                id="dropdown"
                                className={`absolute z-50  ${isPriceDropdownVisible ? 'block' : 'hidden'}  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                            >
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    {priceRanges?.map((prices, index) => {
                                        return (
                                            <li key={index} onClick={() => handleSelectedPrice(prices.range)}>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    {prices.label}
                                                </Link>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        )}
                    </div>

                    {/* SEARCH INPUT */}
                    <input
                        type="text"
                        className=" max-w-7xl px-4 bg-white text-gray-500 font-medium  text-base text-left pl-4 outline-0 focus:outline-none "
                        placeholder='Search for items (eg: Sofa)'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />

                    {/* SEARCH ICON */}
                    <Link href={`/search/${searchQuery?searchQuery:'not-found'}`}>
                        <div
                            className="flex cursor-pointer w-36 h-full items-center justify-center   p-5 px-9 bg-[#1d6961]  rounded-tr-xl rounded-br-xl text-white font-semibold hover:bg-[#1d6961] transition-colors">
                            <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-8  fill-gray-200 transition">
                                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
                            </svg>
                        </div>
                    </Link>
                    {/* Display Filtered Products */}
                    {searchQuery && (
                        <div className="absolute z-30 w-full top-36 left-0 mt-4">
                            <div className="bg-white  p-4 rounded-md">
                                {filteredproducts.length > 0 ? (
                                    filteredproducts.slice(0, 4).map(product => (

                                        <Link key={product.id} href={`/products/${product.id}`}><div className="p-4 cursor-pointer bg-none border-b rounded-md shadow-sm mb-2">
                                            <h3 className="text-lg text-gray-900 font-bold">{product.name}</h3>
                                            <p className='text-gray-700 text-sm'>Category: {product.category}</p>
                                            <p className='text-gray-700 text-sm'>{product.description}</p>
                                        </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-center text-gray-500">No products found</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchInput;
