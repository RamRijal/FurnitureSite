'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed top-24 right-12 z-50 bg-[#51B7AE] text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300"
                    aria-label="Go to top"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </div>
    );
};

export default GoToTop;
