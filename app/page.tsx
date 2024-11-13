import About from "./components/About/page";
import FilterBar from "./components/FilterBar/page";
import Footer from "./components/Footer/page";
import Hero from "./components/HeroSection/page";
import NavBar from "./components/Navbar/page";
import ProductDetails from "./components/Products/ProductDetails/page";
import ProductList from "./components/Products/ProductList/[id]/page";

export default function Home() {
  return (
    <>
    <NavBar/>
    <Hero/>
    {/* <FilterBar/> */}
    <About/>
    <ProductList/>
    <ProductList/>
    <ProductDetails/>
    <Footer/>
    </>
  );
}
