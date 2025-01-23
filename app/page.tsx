import AboutUs from "@/components/AboutUs";
import Newsletter from "@/components/newsletter/page";
import ProductDisplay from "@/components/products/ProductDisplay/page";
import SearchInput from "@/UI/Searchinput";
import { getTestimonials } from "@/utils/api";
import Hero from "../components/heroSection/page";
import Testimonials from "../components/testimonials/page";
import Work from "../components/work/page";
import GoToTop from "@/UI/GotoTop";


export default async function Home() {
 

  const testimonials = await getTestimonials();

  return (
    <>
      <GoToTop />

      <Hero />
      <div className="hidden lg:block absolute lg:top-[510px] lg:left-[180px] xl:top-[520px] xl:left-[390px]">
        <SearchInput />
      </div>
      <Work />
      <ProductDisplay />
      <AboutUs />
      <Testimonials reviews={testimonials} />
      <Newsletter />
    </>
  );
}
{/* 
      
      <div className="hidden lg:flex absolute  items-center w-full justify-center  lg:top-[610px] lg:left-[45px] xl:top-[520px] xl:left-[325px]">
      </div> */}