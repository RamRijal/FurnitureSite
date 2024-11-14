'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Location from '/public/location-svgrepo-com.svg'
// import Call from '/public/call-receive-svgrepo-com.svg'
import WhatsApp from '/public/whatsapp-svgrepo-com.svg'
// import Facebook from '/public/facebook-svgrepo-com.svg'
import Instagram from '/public/instagram-svgrepo-com.svg'
import Cart from '/public/cart-shopping-svgrepo-com.svg'
import User from '/public/user-svgrepo-com.svg'

const NavBar = () => {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
        setExpand(!expand);
    }

    return (
        <>
            <header className="py-6 bg-white" >
                <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-around">
                        {/* LOGO */}
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <Image width={200} height={200} src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" alt={''} />
                            </a>
                        </div>
                        {/*  HAMBURGER*/}
                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-900" onClick={toggleExpand} aria-expanded={expand}>
                                {expand ? (
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {/* NAVIGATION LINKS LARGE */}
                        <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">
                            <a href="#" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </a>

                            <a href="#" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Products </a>

                            <a href="#" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </a>
                            <a href="#" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact Us </a>
                        </nav>

                        <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-4">
                            <a href="#" title="" className="text-base flex items-center font-semibold text-gray-600 transition-all duration-200  border-2 border-gray-600
                        rounded-3xl  focus:outline-none font-pj hover:opacity-50  px-4 py-2 gap-2">
                                <Image width={20} height={20} src={User} className="opacity-90 text-white " alt='' />
                                Login
                            </a>

                            <a
                                href="#"
                                title=""
                                className="
                                bg-[#292e76]
                                gap-2
                                inline-flex
                                items-center
                                justify-center
                                px-4
                                py-2
                                text-base
                        font-semibold
                        leading-7
                        text-gray-100
                        transition-all
                        duration-200
                        border 
                        rounded-3xl
                        font-pj
                        focus:outline-none
                        hover:bg-[#383fa2] hover:text-white
                        focus:bg-[#292e76] focus:text-white "
                                role="button"
                            >
                                <Image width={20} height={20} src={Cart} className="opacity-90  text-white rounded-full  focus:outline-none focus:ring-2 " alt='' />
                                <span className='mr-2'>Add to cart</span>
                            </a>
                        </nav>
                    </div>

                    {/* NAVIGATION LINKS MOBILE */}
                    {expand ? (
                        <nav className='lg:hidden '>
                            <div className="px-1 py-8">
                                <div className="grid gap-y-7">
                                    <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </a>

                                    <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Products </a>

                                    <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </a>

                                    <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact </a>
                                    <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Login </a>

                                    <a
                                        href="#"
                                        title=""
                                        className="
                                bg-[#292e76]
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            text-base
                            font-semibold
                            leading-7
                            transition-all
                            duration-200
                            text-white
                            border 
                            rounded-xl
                            font-pj
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            hover:bg-gray-900 hover:text-white
                            focus:bg-gray-900 focus:text-white
                        "
                                        role="button"
                                    >
                                        Add to cart
                                    </a>
                                </div>
                            </div>
                        </nav>
                    ) : ""}
                </div>
            </header >

            {/* LOWER NAV DIV*/}
            <div className='hidden lg:block bg-[#1d6961] py-1 px-4 mx-auto max-w-9xl sm:px-6 lg:px-8  '>
                <div className='flex justify-around '>
                    <div className="flex justify-center items-center gap-2  ">
                        <Image width={17} height={17} src={WhatsApp} className="opacity-90  text-white py-2 px-
                        4 rounded-full focus:outline-none  " alt='' />
                        <span className='text-sm opacity-90 cursor-pointer '>+977 9800000000</span>
                    </div>
                    <div className="flex justify-center items-center gap-2  ">
                        <Image width={15} height={15} src={Location} className="opacity-90  text-white py-2 px-
                        4 rounded-full focus:outline-none  " alt='' />
                        <span className='text-sm opacity-90 cursor-pointer '>Pharping, Dakshinkali</span>
                    </div>
                    <div className="flex justify-center items-center gap-2  ">
                        <Image width={15} height={15} src={Instagram} className=" opacity-90 text-white py-2 px-
                        4 rounded-full focus:outline-none  " alt='' />
                        <span className='text-sm opacity-90 cursor-pointer '>FurphingFurniture</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar