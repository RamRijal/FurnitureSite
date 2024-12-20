import ProductList from '@/components/products/ProductList/[id]/page';
import { TextFade } from '@/components/UI/TextFadeUp';
import { getProducts } from '@/utils/api';

const Products = async () => {

    const products = await getProducts();
    return (
        <div className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 flex justify-center items-center mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="mx-auto  justify-center items-center text-center lg:text-center sm:max-w-xl lg:mx-0">
                    <TextFade direction='up'>
                        <h2 className="  font-bold text-gray-900 text-3xl sm:text-4xl xl:text-5xl ">Our <span className='text-[#51b7ae]'> Featured </span>Products</h2>
                        <p className="mt-4 text-base font-normal leading-7 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                    </TextFade>
                </div>
            </div>

            <ProductList products={products} />

        </div>
    )
}

export default Products