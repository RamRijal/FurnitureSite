'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Counter } from '../../UI/Counter';
import { TextFade } from '../../UI/TextFadeUp';
import SearchInput from "@/UI/Searchinput";

const backgroundImages = [
  'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        {/* Carousel background images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        {/* Navigation LeftRightButtons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 z-10"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 z-10"
          aria-label="Next slide"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative h-full py-12 sm:py-16 lg:py-20 xl:py-16">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="max-w-md mx-auto xl:max-w-xl lg:mx-0 text-center">
                <TextFade direction='up'>
                  <h1 className="text-3xl font-bold text-gray-50 sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">
                    Collect
                    <span className="text-[#51b7ae]"> rare</span>{" "}
                    <span className="text-[#51b7ae]"> aesthetic</span>{" "}
                    furniture
                  </h1>
                </TextFade>
                <TextFade direction='up'>
                  <p className="mt-5 text-lg font-medium text-gray-50 lg:mt-8">
                    Buy our products from world&apos;s top furniture store
                  </p>
                </TextFade>
                <div className="hidden md:block mt-8 lg:mt-10">
                  <Link
                    href="/products"
                    title=""
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-gray-50 transition-all duration-200 bg-[#292e76] border border-transparent focus:outline-none font-pj hover:bg-[#383fa2] focus:bg-[#292e76]"
                    role="button"
                  >
                    Explore all products
                  </Link>
                </div>

                <div className="md:inline-grid grid-cols-3 mt-8 gap-12 gap-x-8">
                  <div className="my-4">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300">
                      <Counter className='text-4xl  md:text-5xl lg:text-6xl' from={0} to={50} />
                      k+</p>
                    <p className="mt-2 text-base font-medium text-gray-400">
                      Furniture Sold
                    </p>
                  </div>

                  <div className="my-4">
                    <p className="text-4xl  md:text-5xl lg:text-6xl font-bold text-gray-300">
                      <Counter className='text-4xl  md:text-5xl lg:text-6xl' from={0} to={250} />+
                    </p>
                    <p className="mt-2 text-base font-medium text-gray-400">
                      Reviews
                    </p>
                  </div>
                  <div className="my-4">
                    <p className="text-4xl  md:text-5xl lg:text-6xl font-bold text-gray-300">
                      <Counter className='text-4xl  md:text-5xl lg:text-6xl' from={0} to={400} />
                      +</p>
                    <p className="mt-2 text-base font-medium text-gray-400">
                      Customers
                    </p>
                  </div>
                </div>
                <div className="md:hidden block mt-8 lg:mt-10">
                  <Link
                    href="/products"
                    title=""
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-gray-50 transition-all duration-200 bg-[#292e76] border border-transparent focus:outline-none font-pj hover:bg-[#383fa2] focus:bg-[#292e76]"
                    role="button"
                  >
                    Explore all products
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="hidden lg:flex items-center justify-center mt-8 ">
            <SearchInput />
          </div>  */}
        </div>
      </div>
    </div>
  );
};

export default Hero;