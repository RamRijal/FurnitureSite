import React from 'react'

const ProductList = () => {
    return (
        <section className="py-12 bg-[#eeedea] sm:py-16 lg:py-20">
            <div className="px-4 flex justify-center items-center mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="mx-auto  justify-center items-center text-center lg:text-center sm:max-w-md lg:mx-0">
                    <h2 className="text-2xl  font-bold text-gray-900 sm:text-4xl">Our <span className='text-[#51b7ae]'> Featured </span>Products</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                </div>
            </div>

            <div className="grid mx-auto max-w-7xl grid-cols-1 px-4 mt-12 text-center xl:gap-3 sm:gap-x-4 sm:mt-16 md:gap-y-10 sm:grid-cols-2 md:grid-cols-3 gap-y-8 lg:grid-cols-4 xl:px-3">
                <div className="relative group">
                    <div className="relative">
                        <div className="overflow-hidden aspect-w-3 aspect-h-4">
                            <img className="object-cover w-full h-full transition-all duration-300 origin-bottom group-hover:scale-110" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/6/product-1.png" alt="" />
                        </div>
                        <div className="absolute inset-x-0 bottom-6">
                            <p className="bg-white rounded-full border border-gray-200 px-4 text-sm font-bold text-gray-900 py-1.5 inline-flex items-center justify-center">$19.00-$29.00</p>
                        </div>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-gray-900">
                        <a href="#" title="">
                            Beoplay M5 Bluetooth Speaker
                            <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </h3>
                    <p className="mt-1.5 text-base font-medium text-gray-500">Audio & Sound</p>
                </div>

                <div className="relative group">
                    <div className="relative">
                        <div className="overflow-hidden aspect-w-3 aspect-h-4">
                            <img className="object-cover w-full h-full transition-all duration-300 origin-bottom group-hover:scale-110" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/6/product-2.png" alt="" />
                        </div>
                        <div className="absolute inset-x-0 bottom-6">
                            <p className="bg-white rounded-full border border-gray-200 px-4 text-sm font-bold text-gray-900 py-1.5 inline-flex items-center justify-center">$49.00</p>
                        </div>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-gray-900">
                        <a href="#" title="">
                            Metal Laptop Table
                            <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </h3>
                    <p className="mt-1.5 text-base font-medium text-gray-500">Furniture</p>
                </div>

                <div className="relative group">
                    <div className="relative">
                        <div className="overflow-hidden aspect-w-3 aspect-h-4">
                            <img className="object-cover w-full h-full transition-all duration-300 origin-bottom group-hover:scale-110" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/6/product-3.png" alt="" />
                        </div>
                        <div className="absolute inset-x-0 bottom-6">
                            <p className="bg-white rounded-full border border-gray-200 px-4 text-sm font-bold text-gray-900 py-1.5 inline-flex items-center justify-center">$29.00-$39.00</p>
                        </div>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-gray-900">
                        <a href="#" title="">
                            Arion 30 Smart Light
                            <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </h3>
                    <p className="mt-1.5 text-base font-medium text-gray-500">Accessories</p>
                </div>

                <div className="relative group">
                    <div className="relative">
                        <div className="overflow-hidden aspect-w-3 aspect-h-4">
                            <img className="object-cover w-full h-full transition-all duration-300 origin-bottom group-hover:scale-110" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/6/product-4.png" alt="" />
                        </div>
                        <div className="absolute inset-x-0 bottom-6">
                            <p className="bg-white rounded-full border border-gray-200 px-4 text-sm font-bold text-gray-900 py-1.5 inline-flex items-center justify-center">$85.99</p>
                        </div>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-gray-900">
                        <a href="#" title="">
                            Minimal Office Desk
                            <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </h3>
                    <p className="mt-1.5 text-base font-medium text-gray-500">Furniture</p>
                </div>

                <div className="relative group">
                    <div className="relative">
                        <div className="overflow-hidden aspect-w-3 aspect-h-4">
                            <img className="object-cover w-full h-full transition-all duration-300 origin-bottom group-hover:scale-110" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/6/product-5.png" alt="" />
                        </div>
                        <div className="absolute inset-x-0 bottom-6">
                            <p className="bg-white rounded-full border border-gray-200 px-4 text-sm font-bold text-gray-900 py-1.5 inline-flex items-center justify-center">$29.00</p>
                        </div>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-gray-900">
                        <a href="#" title="">
                            Garidon 10 Stand
                            <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </h3>
                    <p className="mt-1.5 text-base font-medium text-gray-500">Furniture</p>
                </div>
            </div>
        </section>

    )
}

export default ProductList