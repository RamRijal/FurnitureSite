'use server'
import Image from 'next/image'
import React from 'react'
import NotFound1 from '@/public/NotFound.svg'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center h-screen bg-gray-50">
            <Image
                loading='lazy'
                className='h-80 w-80 -mt-10'
                height={100}
                width={100}
                src={NotFound1}
                alt='' />
            <p className='mt-8 text-4xl  text-gray-600 font-bold '>No product found</p>
            <Link href={'/'}><button className='text-xl bg-[#1d6961] p-4 rounded-md mt-5'>Return to home</button></Link>
        </div>
    )
}

export default NotFound