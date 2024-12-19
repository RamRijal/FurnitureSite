import AboutUs from "@/components/AboutUs";
import Newsletter from "@/components/newsletter/page";
import ProductDisplay from "@/components/products/ProductDisplay/page";
import SearchInput from "@/components/UI/Searchinput";
import { getTestimonials } from "@/utils/api";
import Hero from "../components/heroSection/page";
import Testimonials from "../components/testimonials/page";
import Work from "../components/work/page";
// import { useEffect, useState } from "react";

// const Loader = () => <div className="loader">Loading...</div>;

export default async function Home() {

  // const [isLoading, setIsLoading] = useState(false);

  //  useEffect( () => {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 200)
  //   })

  // const products = await getProducts();
  const testimonials = await getTestimonials();

  return (
    <>
      <Hero />
      <div className="absolute top-[620px] left-[330px]">
        <SearchInput />
      </div>
      <Work />
      <AboutUs />
      <ProductDisplay />
      <Testimonials reviews={testimonials} />
      <Newsletter />
    </>
  );
}