import React from 'react'
import { TextFade } from '../UI/TextFadeUp'
import Image from 'next/image'
import Link from 'next/link'

const AboutUs = () => {
    return (
        <div className="pt-2 -z-10 pb-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid md:text-center lg:text-left items-center max-w-3xl grid-cols-1 mx-auto lg:grid-cols-2 lg:gap-x-20 gap-y-12 lg:max-w-none lg:mx-0">
                    <div>
                        <div className="hidden lg:block relative overflow-hidden rounded-xl">
                            <Image height={100} width={200} className="object-cover w-96 h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1567016507665-356928ac6679?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <div className="absolute px-5 py-4 shadow-lg right-6 bottom-6 rounded-xl bg-base-900 bg-opacity-80 backdrop-blur-lg filter">
                                <div className="hidden md:flex items-center">
                                    <svg className="w-8 h-8 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    <p className="ml-6 text-xl font-medium text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-[#0fa599] from-[#62a7f1]">4091 satisfied customers</span> landed<br />on our website</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <TextFade direction='up'>
                            <p className="text-md tracking-widest text-gray-400 uppercase">About Us</p>
                            <h2 className="mt-6 font-medium text-gray-700 text-3xl sm:text-4xl lg:text-5xl xl:text-5xl">Unleash Your <span className='text-[#51b7ae]'>Imagination</span>, One Piece at a Time</h2>
                        </TextFade>
                        <div className="w-full h-px my-6 sm:mt-8 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                        <div className="lg:hidden relative overflow-hidden rounded-xl">
                            <Image loading='lazy' className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1567016507665-356928ac6679?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" width={100} height={100} />
                            <div className="hidden md:flex absolute px-5 py-4 shadow-lg right-6 bottom-6 rounded-xl bg-base-900 bg-opacity-80 backdrop-blur-lg filter">
                                <div className=" items-center">
                                    <svg className="w-8 h-8 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    <p className="ml-6 text-xl font-medium text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-[#0fa599] from-[#9acbff]">4091 satisfied customers</span> landed<br />on our website</p>
                                </div>
                            </div>
                        </div>
                        <TextFade direction='up'>

                            <p className="mt-6 text-lg font-normal text-gray-600 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.t sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                        </TextFade>
                        <div className="relative inline-flex items-center justify-center mt-6 sm:mt-8 group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#5178b7] to-[#1d3569] group-hover:shadow-lg group-hover:shadow-[#5e63aa]"></div>
                            <Link href="/about" title="" className="relative inline-flex items-center text-center justify-center px-8 py-3 text-base font-normal text-white bg-[#292e76] border border-transparent rounded-full" role="button"> Read more  </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs