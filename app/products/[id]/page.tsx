import ProductDetails from '@/components/products/ProductDetails/page';
import { getProductByID } from '@/utils/api';
import Link from 'next/link';
import React from 'react'

interface IproductsProps {
    params: {
        id: string;
    }
}
const ProductPage = async ({ params }: IproductsProps) => {
    const product = await getProductByID(params.id);

    if (!product) {
        return (
            < div className="flex h-screen flex-col justify-center items-center bg-gray-100 min-h-96 max-w-full" >
                <p className='text-center text-4xl text-gray-500'>Ooops!! Product not available</p>
                <Link href={`/products`}> 
                    <button className='text-white bg-[#292e76] py-3 px-4 mt-12 rounded-md'>Explore more</button></Link>
            </div >
        )
    }
    return (
        <>
            <ProductDetails product={product} />
        </>
    )
}

export default ProductPage