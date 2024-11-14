import About from "./components/About/page";
import FilterBar from "./components/FilterBar/page";
import Footer from "./components/Footer/page";
import Hero from "./components/HeroSection/page";
import NavBar from "./components/Navbar/page";
import ProductDetails from "./components/Products/ProductDetails/page";
import ProductList from "./components/Products/ProductList/[id]/page";
import Testimonials from "./components/Testimonials/page";
import Work from "./components/Work/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <FilterBar/>
      <Work/>
      <About />
      <ProductList />
      <ProductList />
      <Testimonials />
      <ProductDetails />
      <Footer />
    </>
  );
}
