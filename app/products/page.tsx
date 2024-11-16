import ProductList from '@/components/products/ProductList/[id]/page';
import { getProducts } from '@/utils/api';

const Products = async () => {
   
    const products = await getProducts();
    return (
        <section className="py-12 bg-[#eeedea] sm:py-16 lg:py-20">
            <div className="px-4 flex justify-center items-center mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="mx-auto  justify-center items-center text-center lg:text-center sm:max-w-xl lg:mx-0">
                    <h2 className="  font-bold text-gray-900 text-3xl sm:text-4xl xl:text-5xl ">Our <span className='text-[#51b7ae]'> Featured </span>Products</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                </div>
            </div>

            <ProductList products={products} />

            <div className="grid mx-auto max-w-7xl grid-cols-1 px-4 mt-12 text-center xl:gap-3 sm:gap-x-4 sm:mt-16 md:gap-y-10 sm:grid-cols-2 md:grid-cols-3 gap-y-8 lg:grid-cols-4 xl:px-3">

            </div>
        </section>
    )
}

export default Products