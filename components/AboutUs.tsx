import React from 'react'

const AboutUs = () => {
    return (
        <section className="pt-2 pb-12 bg-gray-100 sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:grid-cols-2 lg:gap-x-20 gap-y-12 lg:max-w-none lg:mx-0">
                    <div>
                        <div className="hidden lg:block relative overflow-hidden rounded-xl">
                            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1567016507665-356928ac6679?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
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
                        <p className="text-md tracking-widest text-gray-400 uppercase">About Us</p>
                        <h2 className="mt-6 font-medium text-gray-700 text-3xl sm:text-4xl lg:text-5xl xl:text-5xl">Unleash Your <span className='text-[#51b7ae]'>Imagination</span>, One Piece at a Time</h2>

                        <div className="w-full h-px my-6 sm:mt-8 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                        <div className="lg:hidden relative overflow-hidden rounded-xl">
                            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1567016507665-356928ac6679?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <div className="hidden md:flex absolute px-5 py-4 shadow-lg right-6 bottom-6 rounded-xl bg-base-900 bg-opacity-80 backdrop-blur-lg filter">
                                <div className=" items-center">
                                    <svg className="w-8 h-8 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    <p className="ml-6 text-xl font-medium text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-[#0fa599] from-[#9acbff]">4091 satisfied customers</span> landed<br />on our website</p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-6 text-lg font-normal text-gray-600 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.t sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                        <div className="relative inline-flex items-center justify-center mt-6 sm:mt-8 group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#5178b7] to-[#1d3569] group-hover:shadow-lg group-hover:shadow-[#5e63aa]"></div>
                            <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-[#292e76] border border-transparent rounded-full" role="button"> Read more  </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutUs