'use client'
import { category } from '@/utils/api';
import Link from 'next/link';
import { useState } from 'react';

const Search = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


    const handleCategoryChange = (Thecategory: string) => {
        setSelectedCategories((prev) =>
            prev.includes(Thecategory)
                ? prev.filter((c) => c !== Thecategory)
                : [...prev, Thecategory]
        );
    };
    return (
        <div className="search min-h-screen bg-gray-50">
            {/* Page Header */}
            <div className="text-left mb-6 bg-green-100  py-8 px-12">
                <div className="mb-3">
                    <p className="text-gray-500 text-sm">
                        <Link href={'/'}><span className="text-green-600 text-sm font-medium">
                            Home
                        </span></Link> {' > '}
                        Products
                    </p></div>
                <h1 className="text-4xl font-bold text-gray-800">Products</h1>
            </div>
            <div className="py-8 px-12 ">


                {/* Results and Sorting */}
                <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-500">Showing – of 0 results</span>
                    <div className="flex items-center">
                        <span className="mr-3 text-gray-600">Sort By</span>
                        <select
                            className="border border-gray-300 rounded-md p-2 text-gray-700 bg-white"
                            defaultValue="Near to Far"
                        >
                            <option value="Near to Far">Price</option>
                            <option value="Far to Near">Name</option>
                            <option value="Best Rated">Ratings</option>
                        </select>
                    </div>
                </div>

                <div className="flex">
                    {/* Filters */}
                    <div className="w-1/4 pr-6">
                        <div className="border p-4 rounded-md bg-white shadow">
                            <h3 className="font-bold text-gray-700 mb-4">Filter by Categories</h3>
                            <div>
                                {category.map((Thecategory) => (
                                    <label
                                        key={Thecategory}
                                        className="flex items-center mb-2 text-gray-600"
                                    >
                                        <input
                                            type="checkbox"
                                            className="mr-2 text-green-600 focus:ring-green-500"
                                            onChange={() => handleCategoryChange(Thecategory)}
                                        />
                                        {Thecategory}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="w-3/4 border rounded-md p-8 bg-white shadow">
                        <p className="text-gray-400 text-center">No Restaurants Found</p>
                    </div>
                </div>
            </div>
        </div>)
}

export default Search

