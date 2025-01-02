import { Testimonial } from '@/types/testimonials';
import React from 'react'
import TestimonialCard from './TestimonialCard/page';
import Link from 'next/link';
import { TextFade } from '../../UI/TextFadeUp';

interface ItestimonialProps {
    reviews: Testimonial[];
}
const Testimonials = ({ reviews }: ItestimonialProps) => {
    return (
        <section className="py-12 bg-gray-100 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <TextFade direction='up'>
                            <h2 className=" text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">What our <span className='text-[#51b7ae]'>clients</span> say about us</h2>
                            <p className=" mt-4 text-lg font-medium text-gray-600 font-pj">Testimonials</p>
                        </TextFade> </div>

                    <div className="mt-8 text-center md:mt-16 md:order-3">
                        <Link href="#" title="" className="pb-2 text-base font-bold leading-7 text-[#292e76] transition-all duration-200 border-b-2 border-[#292e76] hover:border-[#444cba] font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-[#444cba]"> Check all {reviews.length} ss </Link>
                    </div>

                    <div className="relative xl:mt-24 md:mt-12 md:order-2">


                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 lg:grid-cols-3">
                            {reviews.slice(0, 3).map((review) => (
                                <TestimonialCard key={review.id} review={review} />
                            )
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials