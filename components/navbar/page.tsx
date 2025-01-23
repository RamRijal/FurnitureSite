'use client'
import { useCart } from '@/context/cartContext'
import Logo from '@/public/Furphing.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi'
import Cart from '/public/cart-shopping-svgrepo-com.svg'
import Instagram from '/public/instagram-svgrepo-com.svg'
import Location from '/public/location-svgrepo-com.svg'
import WhatsApp from '/public/whatsapp-svgrepo-com.svg'

const NavBar = () => {
    const pathname = usePathname(); // Initialize useRouter

    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    const [expand, setExpand] = useState(false);
    const [expandCart, setExpandCart] = useState(false);


    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };
    const calculateDeliveryCharge = () => {
        return 200;  // Example: a fixed discount amount or dynamic delivery logic.
    };
    const calculateNetAmount = () => {
        return calculateTotal() - calculateDeliveryCharge();
    };


    // Add/remove body class based on `expandCart` state
    useEffect(() => {
        if (expandCart) {
            document.body.classList.add('body-no-scroll');
        } else {
            document.body.classList.remove('body-no-scroll');
        }

        // Cleanup on component unmount
        return () => {
            document.body.classList.remove('body-no-scroll');
        };
    }, [expandCart]);

    // Close the sidebar when the route changes
    useEffect(() => {
        setExpandCart(false); // Close the sidebar on route change
    }, [pathname]); // Run the effect when the pathname changes

    const toggleExpand = () => {
        setExpand(!expand);
    }
    const toggleExpandCart = () => {
        setExpandCart(!expandCart);
    }

    return (
        <>
            <header className="sticky top-0 py-4 bg-white z-50 shadow-md" >
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
                            <Link href="/" title="" className="text-base font-semibold text-gray-900 focus:text-[#51B7AE] focus:font-bold focus:text-xl transition-all duration-200 rounded font-pj hover:text-opacity-50 "> Home </Link>

                            <Link href="/products" title="" className="text-base font-semibold text-gray-900 focus:text-[#51B7AE] focus:font-bold focus:text-xl transition-all duration-200 rounded font-pj hover:text-opacity-50 "> Products </Link>

                            <Link href="/about" title="" className="text-base font-semibold text-gray-900 focus:text-[#51B7AE] focus:font-bold focus:text-xl transition-all duration-200 rounded font-pj hover:text-opacity-50 "> About </Link>
                            <Link href="/contact" title="" className="text-base font-semibold text-gray-900 focus:text-[#51B7AE] focus:font-bold focus:text-xl transition-all duration-200 rounded font-pj hover:text-opacity-50 "> Contact Us </Link>

                        </nav>

                        <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-4">

                            <Link href="/login" title="" className="text-base flex items-center font-semibold text-gray-500 transition-all duration-200  border-2 border-gray-400
                        rounded-3xl  focus:outline-none font-pj hover:opacity-50  px-4 py-2 gap-2">

                                Login
                            </Link>

                            <Link
                                href="/"
                            >
                                <button
                                    type='button'
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
                                    onClick={() => toggleExpandCart()}
                                >
                                    <Image width={25} height={25} src={Cart} className="opacity-100  text-white rounded-full focus:outline-none focus:ring-2 " alt='' />
                                    <div className='absolute flex z-50 bg-red-600 h-7 w-7 rounded-full top-3 right-12 justify-center items-center text-xs font-normal p-3'>{cartItems.length} </div>
                                </button>
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
            {/* SIDEBAR ADDTOCART */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 right-0 z-50 w-[410px] h-screen p-4 bg-white overflow-y-auto overflow-x-hidden  dark:bg-slate-800 transform transition-transform duration-300 ${expandCart ? 'translate-x-0' : 'translate-x-full'
                    }`}
                aria-labelledby="drawer-navigation-label"
            >
                <h5
                    id="drawer-navigation-label"
                    className="text-base pb-2 font-semibold text-gray-500 uppercase dark:text-gray-400"
                >
                    Review Cart
                </h5>
                <button
                    type="button"
                    onClick={() => toggleExpandCart()}
                    data-drawer-hide="drawer-navigation"
                    aria-controls="drawer-navigation"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                {cartItems.length === 0 ?
                    <div className='flex flex-col justify-center items-center h-96'>
                        <p className='flex justify-center items-center h-12 text-2xl text-center mb-4'>Cart is Empty!</p>
                        <Link
                            href="/products"
                            title=""
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-gray-50 transition-all duration-200 bg-[#292e76] border border-transparent focus:outline-none font-pj hover:bg-[#383fa2] focus:bg-[#292e76]"
                            role="button"
                        >
                            Explore all products
                        </Link>

                    </div>
                    :
                    <>
                        <div
                            className="flex overflow-y-auto py-4 "
                            style={{ maxHeight: `calc(100vh - 160px)` }}
                        // Subtract height of total and checkout section
                        >
                            <ul className="flex flex-col space-y-2 font-medium gap-4 my-2">
                                {cartItems.map((item) => {
                                    return <li key={item.id}>

                                        <div className="flex gap-3 w-full">
                                            <Image
                                                alt=''
                                                src={item.image}
                                                height={100}
                                                className='object-cover h-28'
                                                width={100}
                                            />
                                            <div className="flex justify-between w-full ">
                                                <div className="flex flex-col text-left gap-1">
                                                    <span className="text-xl">{item.name}</span>
                                                    <span className=" text-xs -mt-1 text-gray-400 font-light">{item.category}</span>
                                                    <span className=" text-sm  my-1 ">Ratings:&nbsp;{item.rating}/5</span>
                                                    {/* QUANTITY */}
                                                    <div className="flex flex-1 max-w-[100px] items-center justify-around h-full border text-primary font-medium">
                                                        <div onClick={() => decreaseQuantity(item.id)} className="
                                                        bg-gray-500 h-full flex-1 flex justify-center items-center cursor-pointer">
                                                            <BiMinus size={30} className=' ' />
                                                        </div>
                                                        <div className="h-full w-20 flex justify-center items-center ">
                                                            {item.quantity}
                                                        </div>
                                                        <div onClick={() => increaseQuantity(item.id)} className="bg-gray-500 h-full flex flex-1 justify-center items-center cursor-pointer">
                                                            <BiPlus size={30} className=' p-1' />
                                                        </div>
                                                    </div>
                                                    {/* //////////// */}
                                                </div>
                                                <p className='flex justify-center items-center text-3xl text-green-600'>${item.price * item.quantity}</p>
                                            </div>
                                        </div>

                                        <button onClick={() => removeFromCart(`${item.id}`)} className=" bg-[#328981] hover:bg-[#237e75] hover:scale-105 p-3 my-3 flex justify-center items-center text-center w-full text-base">Remove from cart</button>
                                    </li>
                                })
                                }
                            </ul>

                        </div>
                        <div className="p-4 sticky bottom-0 w-full bg-slate-700 opacity-100">
                            <div className="flex flex-col gap-2 my-2">
                                <p className='text-xl'> Total Amount: ${`${calculateTotal()}`}</p>
                                <p className='text-xl'> Delivery Charge: ${`${calculateDeliveryCharge()}`}</p>
                                <div className="flex justify-between items-center ">
                                    <p className='text-xl'> Net Amount: ${`${calculateNetAmount()}`}</p>
                                    <button onClick={() => removeFromCart}>
                                        <BiTrash size={22} className='text-red-500' />
                                    </button>

                                </div>
                            </div>
                            <div className="button  w-full">
                                <Link href={'/checkout'}>
                                    <button onClick={() => alert("Proceeding to checkout..")} className='bg-green-600 p-3 flex justify-center items-center text-center w-full text-lg'>
                                        Proceed to checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                }

            </div >


        </>
    )
}

export default NavBar
