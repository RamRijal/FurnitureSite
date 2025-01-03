'use client'
import NoOfItems from '@/UI/NoOfItems';
import { IproductProps } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import SimilarProducts from '../SimilarProducts/page';
import Cart from '/public/cart-shopping-svgrepo-com.svg';
// import Dropdown from '/public/down-chevron-svgrepo-com.svg'


const ProductDetails = ({ product }: IproductProps) => {

  return (
    <>
      <section className=" bg-gray-900 max-w-full">
        <div className="relative bg-white sm:p-10 xl:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 xl:gap-x-20">
            {/* ImageDisplay */}
            <div className="relative lg:col-span-5">
              <Image loading='lazy' height={300} width={300} className="lg:ml-8 object-cover p-4 lg:w-full lg:h-full sm:rounded-md" src={product.image} alt="" />

              <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
              <div className="absolute lg:ml-8 p-4 -translate-x-1/2 left-1/2 bottom-6">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="px-4 pb-8 lg:col-span-7 xl:pr-16">
              {/* Breadcrumbs */}
              <nav className="hidden md:flex">
                <ol role="list" className="flex items-center space-x-1">
                  <li>
                    <div className="-m-1">
                      <Link href="/" className="p-1 text-sm  font-medium text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700"> Home  &gt; </Link>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center">
                      <div className="-m-1">
                        <Link href="/products" className="p-1 ml-1 text-sm font-medium text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700"> Products  &gt; </Link>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center">
                      <div className="-m-1">
                        <Link href="#" className="p-1 ml-1 text-sm font-medium text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700" aria-current="page"> {product.category} &gt; </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <div className="-m-1">
                        <Link href="#" className="p-1 ml-1 text-sm font-medium text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700" aria-current="page"> {product.name} </Link>
                      </div>
                    </div>
                  </li>
                </ol>
              </nav>
              {/* Headings */}
              <div className="lg:flex justify-between items-center  ">
                <div className="flex flex-col">
                  <h1 className="mt-8 text-3xl font-bold text-gray-900 sm:text-4xl">{product.name}</h1>
                  <p className='text-gray-400 mt-3'>Limited aesthetic piece</p>
                </div>
                <div className="pt-4 sm:px-5 sm:py-4">
                  <p className="text-5xl font-semibold lg:font-semibold text-green-700">${product.price}</p>
                </div>
              </div>
              {/* Details */}
              <div className="inline-grid grid-cols-2 gap-4 my-6 sm:grid-cols-3 sm:gap-0">
                {/* color */}
                <div className="rounded-lg  bg-gray-50 sm:rounded-r-none">
                  <div className="px-5 py-4">
                    <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">Color</p>
                    <div className="relative mt-1 flex items-center space-x-2">
                      <div className="px-2 w-5 h-5 rounded-full" style={{ backgroundColor: `${product.feature?.color}`, border: '1px solid #ccc' }}></div>
                      <p
                        id="color"
                        className="block w-full p-2 py-1 pl-2 pr-8 font-medium text-gray-900 bg-transparent border-none hover:border-none focus:border-none appearance-none"
                      >
                        {product.feature?.color}
                      </p>

                    </div>
                  </div>
                </div>

                {/* size */}
                <div className="rounded-lg bg-gray-50 sm:rounded-none">
                  <div className="px-5 py-4">
                    <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">Size</p>
                    <div className="relative mt-1">
                      <p
                        id="color"
                        className="block w-full font-medium text-gray-900 bg-transparent border-none hover:border-none focus:border-none appearance-none"
                      >
                        {product.feature?.size}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              {/* BUTTONS */}

              <div className=''>
                <h1 className=' font-semibold text-xl text-gray-900'>No of items:</h1>
                <NoOfItems />
              </div>
              <div className="mt-5 sm:mt-5 sm:flex sm:items-center sm:space-x-5">
                {/* Add to cart */}
                <button
                  type="button"
                  className="flex
                  gap-2
                                items-center
                                justify-center
                                w-full
                                px-7
                                py-3
                                text-base
                                font-bold
                                leading-7
                                text-center text-white
                                transition-all
                                duration-200
                                bg-[#292e76]
                                border border-transparent
                                rounded-md
                                inlin-flex
                                sm:w-auto
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                hover:bg-[#383fa0]
                            "
                >
                  <Image width={20} height={20} src={Cart} alt='' /> Add to cart
                </button>
                {/* Add to wishlist */}
                <button
                  type="button"
                  className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-4
                                py-3
                                mt-4
                                text-base
                                font-bold
                                leading-7
                                text-center text-gray-900
                                transition-all
                                duration-200
                                bg-transparent
                                border border-gray-300
                                rounded-md
                                sm:mt-0 sm:w-auto
                                 hover:bg-pink-600
                                focus:border-gray-300 focus:bg-white focus:text-gray-900
                                hover:text-white
                            "
                >
                  <svg className="w-5 h-5 mr-2.5 focus:bg-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Add to wishlist
                </button>
              </div>
              {/* Desciptions */}
              <h1 className='mt-8 text-2xl text-gray-700 font-bold'>Description</h1>
              <hr className='mt-3'></hr>
              <p className="mt-5 text-base font-normal leading-7 text-gray-700">
                {product.description}
              </p>
              <div className="">
                <h2 className="mt-6 text-base font-bold text-gray-900">Highlights:</h2>
                <ul className="mt-4 space-y-3 text-base font-medium text-gray-600 list-disc list-inside">
                  <li>Made with full cotton</li>
                  <li>Slim fit for any body</li>
                  <li>Quality control by JC</li>
                </ul>
              </div>
              {/* MOBILE */}
              <div className="hidden mt-10 rounded bg-gray-50">
                <div className="px-5 py-4">
                  <div className="flex items-center">
                    <div className="pr-5">
                      <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">Color</p>
                      <div className="relative mt-1">
                        <select name="" id="" className="py-1 pl-0 pr-8 bg-transparent appearance-none">
                          <option value="">White</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex p-1.5">
                          <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 border-l border-r border-gray-200">
                      <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">Size</p>
                      <div className="relative mt-1">
                        <select name="" id="" className="py-1 pl-0 pr-8 bg-transparent appearance-none">
                          <option value="">40</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex p-1.5">
                          <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="pl-5">
                      <p className=" text-3xl font-bold text-gray-900">$49.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='mt-8'></hr>

          <SimilarProducts product={product} />


        </div>
      </section>

    </>
  )
}

export default ProductDetails