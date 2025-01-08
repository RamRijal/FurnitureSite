'use client'
import RatingsDisplay from '@/components/testimonials/TestimonialCard/Ratings/page';
import AddtoCartButton from '@/UI/AddtoCartButton';
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { HiHeart } from 'react-icons/hi';

interface IproductProps {
  product: Product;
}

const ProductCard = ({ product }: IproductProps) => {
  const [isfavourite, setIsFavorite] = useState(false)

  const HandleFavourite = () => {
    setIsFavorite(!isfavourite);
  }
  return (
    <div className="relative group">
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
        {/* IMAGE ONLY */}
        <Link className='cursor-pointer' href={`/products/${product.id}`}>
          <Image
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            src={product.image}
            alt={product.name}
            width={300}
            height={400}
          />
        </Link >
      </div>

      <div className="flex flex-col my-4 px-2 gap-1">
        {/* NAME AND PRICE */}
        <div className="flex justify-between items-center ">
          <div className="flex flex-col ">
            <Link
              className="text-xl font-bold text-gray-900"
              href={`/products/${product.id}`}
              title={product.name}
            >
              <p className="text-xl font-bold text-gray-900">
                {product.name}
              </p>
            </Link>
          </div>
          <p className=" text-3xl font-bold text-green-600">
            ${product.price}
          </p>
        </div>
        {/* CATEGORY AND RATINGS */}

        <div className="flex mt-2 justify-between ">
          <div className="flex flex-col -mt-2">
            <div className="flex -mt-2 mb-1">
              <p className="bg-black bg-opacity-15 flex rounded-full px-3  py-1.5 mt-1  text-xs font-medium text-white">
                {product.category}
              </p>
            </div>
            <div className="flex justify-between my-1 ">
              <p className=' text-left text-sm text-gray-900 '>{product.description.slice(0, 50)}...</p>
            </div>
            <div className="flex w-20 justify-between items-center my-1 ">
              {RatingsDisplay(product.rating)}
            </div>
          </div>
          <div className="flex ">
            {isfavourite ?
              <button type='button' className='text-red-500  px-2 rounded-md' onClick={HandleFavourite}><HiHeart size={30} /></button> :
              <button type='button' className='text-red-500  px-2 rounded-md' onClick={HandleFavourite}><BiHeart size={30} /></button>
            }
          </div>
        </div>
        <Link href='/'>
          <div className="flex justify-center items-center my-1">
            <AddtoCartButton product={product}/>
          </div>
        </Link>
      </div>
    </div >
  );
};

export default ProductCard;
