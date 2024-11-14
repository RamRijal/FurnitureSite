import React from 'react'

const About = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:grid-cols-2 lg:gap-x-20 gap-y-12 lg:max-w-none lg:mx-0">
                    <div>
                        <div className="relative overflow-hidden rounded-xl">
                            <img className="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/9/woman.png" alt="" />
                            <div className="absolute px-5 py-4 shadow-lg right-6 bottom-6 rounded-xl bg-base-900 bg-opacity-80 backdrop-blur-lg filter">
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    <p className="ml-6 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">4915 visitors</span> landed<br />on your website</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm tracking-widest text-gray-400 uppercase">Level up Fast</p>
                        <h2 className="mt-6 text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Get your visitors attension without spending much</h2>

                        <div className="w-full h-px mt-8 sm:mt-12 bg-gradient-to-r from-cyan-500 to-purple-500"></div>

                        <p className="mt-6 text-lg font-normal text-gray-200 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                        <div className="relative inline-flex items-center justify-center mt-6 sm:mt-8 group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                            <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Get More Visitors </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About