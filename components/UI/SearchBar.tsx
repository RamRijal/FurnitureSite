import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="relative flex items-center w-full max-w-md">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-60 px-4 py-2 border-2 text-gray-700 border-gray-300 rounded-md focus:outline-none focus:border-[#2ca095]"
                placeholder="Search..."
            />
            <span className="flex items-center justify-center bg-none ml-2 text-gray-500 rounded-r-md cursor-pointer hover:scale-110 hover:text-[#1d6961] transition duration-200 ease-in-out">
                <FaSearch size={19} />
            </span>
        </div>
    )
}

export default SearchBar
