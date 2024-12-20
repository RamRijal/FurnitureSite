import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IproductProps {
  product: Product;
}

const ProductCard = ({ product }: IproductProps) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="relative group">
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
          <Image
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            src={product.image}
            alt={product.name}
            width={300}
            height={600}
          />
        </div>
        <div className="absolute inset-x-0 bottom-6">
          <p className="bg-white rounded-full border border-gray-200 px-4 text-sm font-bold text-gray-900 py-1.5 inline-flex items-center justify-center">
            $19.00-$29.00
          </p>
        </div>
        <h3 className="mt-4 text-base font-bold text-gray-900">
          <Link href={`/products/${product.id}`} title={product.name}>
            {product.name}
            <span className="absolute inset-0" aria-hidden="true"></span>
          </Link>
        </h3>
        <p className="mt-1.5 text-base font-medium text-gray-500">
          {product.category}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
