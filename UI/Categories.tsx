import { useState, useEffect } from 'react';
import { CategoriesProps } from '@/types/category';

const Categories: React.FC<CategoriesProps> = ({ products, onFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [categories, setCategories] = useState(['All']);

    useEffect(() => {
        const uniqueCategories = ['All', ...new Set(products.map((p) => p.category))];
        setCategories(uniqueCategories);
    }, [products]);

    useEffect(() => {
        if (selectedCategory === 'All') {
            onFilter(products);
        } else {
            onFilter(products.filter((p) => p.category === selectedCategory));
        }
    }, [selectedCategory, products, onFilter]);

    return (
        <div className="flex justify-center space-x-4 mt-6 gap-2">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-full  ${selectedCategory === category
                        ? 'bg-[#51B7AE] text-white'
                        : 'bg-gray-200 text-gray-600'
                        }`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
