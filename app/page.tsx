import About from "./about/page";
import FilterBar from "../components/filterBar/page";
import Hero from "../components/heroSection/page";
import ProductDetails from "../components/products/ProductDetails/page";
import ProductList from "../components/products/ProductList/[id]/page";
import Testimonials from "../components/testimonials/page";
import Work from "../components/work/page";
import { getProducts, getTestimonials } from "@/utils/api";
import Newsletter from "@/components/newsletter/page";
import Products from "./products/page";

export default async function Home() {

  // const products = await getProducts();
  const testimonials = await getTestimonials();

  return (
    <>
      <Hero />
      {/* <FilterBar /> */}
      <Work />
      <About />
      <Products />
      <Testimonials reviews={testimonials} />
      <Newsletter />
    </>
  );
}