'use client'
import ShoppingCart from '@/UI/ShoppingCart'
import { TextFade } from '@/UI/TextFadeUp'
import Image from 'next/image'
const Checkout = () => {
    return (
        <>
            <div className="relative h-full max-w-full bg-gray-100">
                {/* Background Image */}
                <Image
                    loading='lazy'
                    className="object-cover h-44 w-full"
                    alt="Checkout Us Background"
                    src="https://img.freepik.com/free-psd/3d-rendering-delivery-sales-blank-banner_23-2151558571.jpg?ga=GA1.1.934782277.1710398641&semt=ais_hybrid"
                    height={100}
                    width={100}
                />
                {/* Overlay */}
                <div className="absolute inset-0 h-44 w-full bg-black/50"></div>
                {/* Content */}
                <div className="absolute inset-0 flex  h-44 w-full flex-col items-center justify-center text-white">
                    {/* Title */}
                    <TextFade direction='up'>
                        <h1 className="text-4xl md:text-5xl font-semibold">Checkout</h1>
                    </TextFade>
                </div>



                <div className="relative flex-col  py-8 mx-8 md:mx-8 xl:mx-16">
                    <ShoppingCart />
                </div>
            </div>
        </>
    )
}

export default Checkout
