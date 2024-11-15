import Image from 'next/image'
import React from 'react'
import Contact from '/public/contact-phone-2-svgrepo-com.svg'
import Delivery from '/public/delivery-fast-solid-svgrepo-com.svg'
import Recieved from '/public/christmas-present-gift-birthday-christmas-done-confirm-svgrepo-com.svg'
const Work = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">How it <span className='text-[#51b7ae]'>works</span></h2>
                    <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 font-pj">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                </div>

                <div className="flex flex-col items-center max-w-md mx-auto mt-8 lg:mt-16 lg:flex-row lg:max-w-none">
                    <div className="relative flex-1 w-full  shadow-slate-200 shadow-2xl overflow-hidden bg-white border border-gray-200 rounded-2xl">
                        <div className="flex flex-col py-8 px-9 justify-center items-center">
                        <Image className='py-5' alt='' src={Contact} height={150} width={150} />
                            <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj">1</div>
                            <p className="mt-5 text-center text-xl font-medium text-gray-900 font-pj">Sign up for creating your first online store with ease.</p>
                        </div>
                    </div>

                    <div className="block -my-1 lg:hidden">
                        <svg className="w-4 h-auto text-gray-300" viewBox="0 0 16 32" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 21)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 14)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 7)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 0)" />
                        </svg>
                    </div>

                    <div className="hidden lg:block lg:-mx-2">
                        <svg className="w-auto h-4 text-gray-300" viewBox="0 0 81 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
                        </svg>
                    </div>

                    <div className="relative flex-1 w-full shadow-slate-200 shadow-2xl">


                        <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl">
                            <div className="flex flex-col py-8 px-9 justify-center items-center">
                                <Image className='py-5' alt='' src={Delivery} height={150} width={150} />

                                <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj">2</div>
                                <p className="mt-5 text-center text-xl font-medium text-gray-900 font-pj">Add your products to your store and customize.</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:-mx-2">
                        <svg className="w-auto h-4 text-gray-300" viewBox="0 0 81 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
                        </svg>
                    </div>

                    <div className="block -my-1 lg:hidden">
                        <svg className="w-4 h-auto text-gray-300" viewBox="0 0 16 32" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 21)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 14)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 7)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 0)" />
                        </svg>
                    </div>

                    <div className="relative flex-1 w-full  shadow-slate-200 shadow-2xl overflow-hidden bg-white border border-gray-200 rounded-2xl">
                        <div className="flex flex-col py-8 px-9 justify-center items-center">
                            <Image className='py-5' alt='' src={Recieved} height={150} width={150} />

                            <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj">3</div>
                            <p className="mt-5 text-xl text-center font-medium text-gray-900 font-pj">Sell and earn as much as you can. Grow fast.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Work