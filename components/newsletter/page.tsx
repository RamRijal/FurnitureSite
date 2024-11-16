import React from 'react'

const Newsletter = () => {
    return (
        <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="absolute bottom-0 left-0 -translate-x-24 translate-y-96">
                <svg className="filter blur-3xl" style={{ filter: "blur(64px)" }} width="864" height="456" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128.55 227.571C96.933 109.576-133.045 78.917 111.019 13.521c244.064-65.397 719.269 138.783 750.886 256.778 31.617 117.995-392.328 105.124-636.392 170.521-244.063 65.396-65.346-95.253-96.963-213.249Z" fill="url(#b)" />
                    <defs>
                        <linearGradient id="b" x1="875.957" y1="322.741" x2="3.701" y2="355.645" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" style={{ stopColor: "var(--color-cyan-500)" }} />
                            <stop offset="100%" style={{ stopColor: "var(--color-purple-500)" }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute inset-0">
                <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="Background noise" />
            </div>

            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:gap-x-24 lg:grid-cols-2 xl:gap-x-40 gap-y-12">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Join our newsletter & stay updated.</h2>
                        <p className="mt-6 text-lg font-normal text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                    </div>

                    <div className="overflow-hidden border border-gray-900 bg-base-900 rounded-xl">
                        <div className="p-6 sm:p-8">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="sr-only">Email address</label>
                                    <div>
                                        <input type="email" id="email" placeholder="Enter Your Email address" className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-4 text-base text-black transition-all duration-200 bg-white border border-transparent rounded-md hover:opacity-80">Subscribe Now</button>
                                </div>
                            </form>

                            <p className="mt-6 text-sm font-normal text-center text-gray-500">Get the latest content in your inbox every week. We don&apos;t spam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
