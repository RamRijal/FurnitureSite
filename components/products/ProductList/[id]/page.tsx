import React from 'react'
import ProductCard from '../../ProductCard/page'
import { Product } from '@/types/product'

interface IproductsProps {
    products: Product[]
}
const ProductList = ({ products }: IproductsProps) => {
    return (

        <div className="grid mx-auto max-w-7xl grid-cols-1 px-4 mt-12 text-center xl:gap-3 sm:gap-x-4 sm:mt-16 md:gap-y-10 sm:grid-cols-2 md:grid-cols-3 gap-y-8 lg:grid-cols-4 xl:px-3">
            {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
         
        </div>

    )
}

export default ProductList