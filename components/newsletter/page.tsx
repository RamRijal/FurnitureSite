import Image from 'next/image';
import React from 'react'
import { TextFade } from '../../UI/TextFadeUp';

const Newsletter = () => {
    return (
        <div className="relative py-12 overflow-hidden bg-gray-200 sm:py-16 lg:py-18 xl:py-18">
            <div className="absolute inset-0">
                <Image height={100} width={100} className="object-cover w-full h-full opacity-10" src="https://images.pexels.com/photos/248921/pexels-photo-248921.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Background noise" />
            </div>

            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:gap-x-24 lg:grid-cols-2 xl:gap-x-40 gap-y-12">
                    <div className="text-center lg:text-left">
                        <TextFade direction='up'>
                            <h2 className="text-3xl font-medium text-gray-600 sm:text-4xl lg:text-5xl xl:text-5xl">Join our <span className='text-[#51b7ae]'>newsletter</span> & stay updated.</h2>
                            <p className="mt-6 text-lg font-normal text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        </TextFade>
                    </div>

                    <div className="overflow-hidden border-2 shadow-lg bg-white rounded-xl">
                        <div className="p-6 sm:p-8">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="sr-only">Email address</label>
                                    <div>
                                        <input type="email" id="email" placeholder="Enter Your Email address" className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-gray-100 rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-4 text-base text-gray-100 transition-all duration-200 bg-[#292e76] border border-transparent rounded-md hover:opacity-80">Subscribe Now</button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
