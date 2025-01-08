'use client'
import Image from 'next/image'
import { useState } from 'react'
import Location from '/public/location-svgrepo-com.svg'
// import Call from '/public/call-receive-svgrepo-com.svg'
import WhatsApp from '/public/whatsapp-svgrepo-com.svg'
// import Facebook from '/public/facebook-svgrepo-com.svg'
import Logo from '@/public/Furphing.png'
import Link from 'next/link'
import Cart from '/public/cart-shopping-svgrepo-com.svg'
import Instagram from '/public/instagram-svgrepo-com.svg'

const NavBar = () => {
    const [expand, setExpand] = useState(false);
    const [expandCart, setExpandCart] = useState(false);

    const toggleExpand = () => {
        setExpand(!expand);
    }
    const toggleExpandCart = () => {
        setExpandCart(!expandCart);
    }

    return (
        <>
            <header className="py-4 bg-white z-50" >
                <div className="px-4 mx-auto max-w-9xl sm:px-6 md:px-10 lg:px-12">
                    <div className="flex items-center justify-between">
                        {/* LOGO */}
                        <div className="flex-shrink-0">
                            <Link href="/" title="" className="flex gap-2">
                                <Image width={70} height={70} src={Logo} alt={''} />
                                <div className="flex-col">
                                    <span className='text-[#141D1F] text-xl font-bold'>Furphing</span>
                                    <p className='text-[#141D1F] text-xl font-bold -mt-2'>Furniture</p>
                                </div>
                            </Link>
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
                            <Link href="/" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded font-pj hover:text-opacity-50 "> Home </Link>

                            <Link href="/products" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded font-pj hover:text-opacity-50 "> Products </Link>

                            <Link href="/about" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded font-pj hover:text-opacity-50 "> About </Link>
                            <Link href="/contact" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded font-pj hover:text-opacity-50 "> Contact Us </Link>

                        </nav>

                        <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-4">

                            <Link href="/login" title="" className="text-base flex items-center font-semibold text-gray-500 transition-all duration-200  border-2 border-gray-400
                        rounded-3xl  focus:outline-none font-pj hover:opacity-50  px-4 py-2 gap-2">

                                Login
                            </Link>

                            <Link
                                href="/"
                                title=""
                                className="
                                h-11
                                w-20
                                bg-[#292e76]
                                gap-2
                                inline-flex
                                items-center
                                justify-center
                                px-5
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
                                onClick={() => toggleExpandCart()}
                            >
                                <Image width={25} height={25} src={Cart} className="opacity-100  text-white rounded-full focus:outline-none focus:ring-2 " alt='' />
                                <div className='absolute flex z-50 bg-red-600 h-7 w-7 rounded-full top-3 right-12 justify-center items-center text-xs font-normal p-3'>112 </div>
                            </Link>

                        </nav>
                    </div>

                    {/* NAVIGATION LINKS MOBILE */}
                    {expand ? (
                        <nav className='lg:hidden '>
                            <div className="px-1 py-8">
                                <div className="grid gap-y-7">
                                    <Link href="/" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </Link>

                                    <Link href="/products" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Products </Link>

                                    <Link href="/about" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </Link>

                                    <Link href="/contact" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact </Link>
                                    <Link href="/login" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Login </Link>

                                    <Link
                                        href="/cart"
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
                                    </Link>
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
                        <Image width={17} height={17} src={WhatsApp} className="opacity-80 hover:opacity-100 text-white py-2 px-
                        4 rounded-full focus:outline-none  " alt='' />
                        <Link href='https://wa.me/0909090909' target='_blank'><span className='text-sm opacity-80 cursor-pointer hover:opacity-100 text-gray-300  '>+977 9800000000</span>
                        </Link></div>
                    <div className="flex justify-center items-center gap-2  ">
                        <Image width={15} height={15} src={Location} className="opacity-80 hover:opacity-100 text-white py-2 px-
                        4 rounded-full focus:outline-none  " alt='' />
                        <Link href='https://maps.app.goo.gl/6xRYXXzdYrD4kfEPA' target='_blank'> <span className='text-sm hover:opacity-100 opacity-80 text-gray-300 cursor-pointer '>Pharping, Dakshinkali</span>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-2  ">
                        <Image width={16} height={16} src={Instagram} className=" opacity-80 hover:opacity-100 text-white py-2 px-
                        4 rounded-full focus:outline-none  " alt='' />
                        <Link href='https://www.instagram.com/FurphingFurniture' target='_blank'> <span className='text-sm hover:opacity-100 opacity-80 text-gray-300 cursor-pointer '>FurphingFurniture</span></Link>
                    </div>
                </div>
            </div>
            {expandCart &&
                <div id="drawer-navigation" className="fixed top-0 right-0 z-50 w-96 h-screen p-4 overflow-y-auto transition-transform  bg-white dark:bg-gray-800" aria-labelledby="drawer-navigation-label">
                    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Review Cart</h5>
                    <button type="button" onClick={() => toggleExpandCart()} data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <div className="py-4 overflow-y-auto">
                        <ul className="flex flex-col space-y-2 font-medium gap-4 my-2">

                            <li>
                                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <div className="flex gap-3 w-full">
                                        <Image alt='' src={'/Furphing.png'} height={100} width={100} />
                                        <div className="flex justify-between w-full">
                                        <div className="flex flex-col text-left">
                                            <span className="text-xl">Harry Potter</span>
                                            <span className=" text-xs font-light">Modern Sofa</span>
                                            <span className=" text-sm">No. of items:&nbsp;12</span>
                                        </div>
                                        <p className='flex justify-center items-center text-3xl text-green-600'>$200</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <div className="flex gap-3 w-full">
                                        <Image alt='' src={'/Furphing.png'} height={100} width={100} />
                                        <div className="flex justify-between w-full">
                                        <div className="flex flex-col text-left">
                                            <span className="text-xl">Harry Potter</span>
                                            <span className=" text-xs font-light">Modern Sofa</span>
                                            <span className=" text-sm">No. of items:&nbsp;12</span>
                                        </div>
                                        <p className='flex justify-center items-center text-3xl text-green-600'>$200</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                           

                        </ul>
                        <button className='flex justify-center shadow-md w-full bg-[#1D6961] p-6 bottom-0'>Proceed to Checkout</button>
                    </div>
                </div>
            }
        </>
    )
}

export default NavBar