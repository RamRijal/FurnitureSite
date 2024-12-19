import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface IproductProps {
  product: Product;
}

const ProductCard = ({ product }: IproductProps) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="relative group ">
        <div className="relative ">
          <div className="overflow-hidden shadow-lg aspect-w-3 aspect-h-4">
            <Image className="object-cover w-full h-full transition-all duration-300 origin-bottom group-hover:scale-110" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/6/product-1.png" alt="" width={200} height={100}/>
          </div>
          <div className="absolute inset-x-0 bottom-6">
            <p className="bg-white rounded-full border border-gray-200 px-4 text-sm font-bold text-gray-900 py-1.5 inline-flex items-center justify-center">$19.00-$29.00</p>
          </div>
        </div>
        <h3 className="mt-4 text-base font-bold text-gray-900">
          <Link href={`/products/${product.id}`} title="">
            {product.name}
            <span className="absolute inset-0" aria-hidden="true"></span>
          </Link>
        </h3>
        <p className="mt-1.5 text-base font-medium text-gray-500">{product.category}</p>
      </div>
    </Link>
  )
}

export default ProductCard