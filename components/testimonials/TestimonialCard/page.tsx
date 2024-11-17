import { Testimonial } from '@/types/testimonials';
import React from 'react'
import RatingsDisplay from './Ratings/page';
interface ItestimonialProps {
    review: Testimonial;
}
const TestimonialCard = ({ review }: ItestimonialProps) => {
    return (
        <div className="flex flex-col overflow-hidden shadow-xl">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                    <div className="flex items-center">
                        {
                            RatingsDisplay(review.rating)
                        }
                    </div>

                    <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“{review.review.slice(0,170)}”</p>
                    </blockquote>
                </div>

                <div className="flex items-center mt-8">
                    <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                    <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{review.name}</p>
                    </div>
                </div>
            </div>
        </div>)
}

export default TestimonialCard