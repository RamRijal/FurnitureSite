import AboutUs from "@/components/AboutUs";
import Newsletter from "@/components/newsletter/page";
import ProductDisplay from "@/components/products/ProductDisplay/page";
import SearchInput from "@/UI/Searchinput";
import { getTestimonials } from "@/utils/api";
import Hero from "../components/heroSection/page";
import Testimonials from "../components/testimonials/page";
import Work from "../components/work/page";

export default async function Home() {

  const testimonials = await getTestimonials();

  return (
    <>
      <Hero />
      <div className="hidden lg:block absolute lg:top-[610px] lg:left-[45px] xl:top-[520px] xl:left-[325px]">
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