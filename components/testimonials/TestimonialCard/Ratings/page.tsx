import React from 'react'

const RatingsDisplay = (rating: number) => {
    return (
        <div className="flex">
            {[...Array(rating)].map((_, index) => (
                <span key={index} className="text-yellow-500">⭐</span>
            ))}
        </div>
    );
};


export default RatingsDisplay