'use client'
import { Product } from '@/types/product';
import { category, getProducts, priceRanges } from '@/utils/api';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

const SearchInput = () => {
    const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);
    const [isPriceDropdownVisible, setIsPriceDropdownVisible] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredproducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState<number[] | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchResultsVisible, setIsSearchResultsVisible] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const MainData = async () => {
            const data = await getProducts();
            setProducts(data);
            setFilteredProducts(data);
        };
        MainData();
    }, []);

    // Handle clicks outside dropdowns
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsCategoryDropdownVisible(false);
                setIsPriceDropdownVisible(false);
                setSearchQuery('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
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
            setIsSearchResultsVisible(true);
        } else {
            setIsSearchResultsVisible(false);
        }
    }, [selectedCategory, priceRange, searchQuery, products]);

    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownVisible(prev => !prev);
        setIsPriceDropdownVisible(false);
        setIsSearchResultsVisible(false);
    }

    const togglePriceDropdown = () => {
        setIsPriceDropdownVisible(prev => !prev);
        setIsCategoryDropdownVisible(false);
        setIsSearchResultsVisible(false);
    }

    const handleSelectedCategory = (e: React.SetStateAction<string>) => {
        setSelectedCategory(e);
        setIsCategoryDropdownVisible(false);
    }

    const handleSelectedPrice = (range: number[]) => {
        setPriceRange(range);
        setIsPriceDropdownVisible(false);
    }

    const handleSearchFocus = () => {
        if (searchQuery) {
            setIsSearchResultsVisible(true);
            setIsCategoryDropdownVisible(false);
            setIsPriceDropdownVisible(false);
        }
    }

    return (
        <div className="z-50 bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 w-full max-w-7xl mx-auto" ref={dropdownRef}>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Categories Filter */}
                <div className="relative flex-1 min-w-[200px]">
                    <span className="text-gray-500 text-sm mb-1 block">Categories</span>
                    <button
                        onClick={toggleCategoryDropdown}
                        className="w-full flex justify-between items-center bg-white border rounded-lg px-4 py-2.5 hover:bg-gray-50 text-gray-700 transition-colors"
                    >
                        <span>{selectedCategory}</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isCategoryDropdownVisible && (
                        <div className="absolute mt-1 w-full bg-white rounded-lg shadow-lg py-1 z-50">
                            {category.map((data) => (
                                <button
                                    key={data}
                                    onClick={() => handleSelectedCategory(data)}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                                >
                                    {data}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Price Filter */}
                <div className="relative flex-1 min-w-[200px]">
                    <span className="text-gray-500 text-sm mb-1 block">Price Range</span>
                    <button
                        onClick={togglePriceDropdown}
                        className="w-full flex justify-between items-center bg-white border rounded-lg px-4 py-2.5 hover:bg-gray-50 text-gray-700 transition-colors"
                    >
                        <span>{priceRange ? `$${priceRange[0]} - $${priceRange[1]}` : 'Select Price'}</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isPriceDropdownVisible && (
                        <div className="absolute mt-1 w-full bg-white rounded-lg shadow-lg py-1 z-50">
                            {priceRanges?.map((prices, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelectedPrice(prices.range)}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                                >
                                    {prices.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Search Input and Button */}
                <div className="flex-grow flex">
                    <input
                        type="text"
                        className="flex-grow px-4 py-2.5 bg-white rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-[#1d6961] text-gray-800 font-normal text-md"
                        placeholder="Search for items (eg: Sofa)"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        onFocus={handleSearchFocus}
                    />
                    <Link
                        href={`/search/${searchQuery ? searchQuery : 'not-found'}`}
                        className="flex items-center justify-center px-6 bg-[#1d6961] rounded-r-lg text-white hover:bg-[#185750] transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Search Results */}
            {isSearchResultsVisible && searchQuery && (
                <div className="absolute left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-xl z-50">
                    {filteredproducts.length > 0 ? (
                        filteredproducts.slice(0, 4).map(product => (
                            <Link key={product.id} href={`/products/${product.id}`}>
                                <div className="p-4 hover:bg-gray-50 border-b last:border-b-0">
                                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                                    <p className="text-sm text-gray-600">Category: {product.category}</p>
                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="p-4 text-center text-gray-500">No products found</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchInput;