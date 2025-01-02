import { TextFade } from '@/UI/TextFadeUp';
import { IproductProps, Product } from '@/types/product';
import { getProducts } from '@/utils/api';
import { useEffect, useState } from 'react';
import ProductList from '../ProductList/[id]/page';
import Link from 'next/link';

const SimilarProducts = ({ product }: IproductProps) => {
    const [allProducts, setAllProducts] = useState<Product[]>([]);

    useEffect(() => {

        const getAllProducts = async () => {
            try {
                const All = await getProducts();
                setAllProducts(All);
            }
            catch (error) {
                console.log(error);
            }
        }
        getAllProducts();
    }, [])
    const similarproducts = allProducts.filter((p) => p.category === product.category);
    const slicedSimilar = similarproducts.slice(0, 3);
    return (
        <>
            <section className=" bg-gray-900 max-w-full">
                <div className="relative bg-white sm:p-10 xl:p-14">
                    <div className="mt-12">
                        <TextFade direction='up'>
                            <h2 className="max-w-7xl mx-auto text-center  font-bold text-gray-900 text-2xl sm:text-3xl xl:text-4xl ">Similar <span className='text-[#51b7ae]'> Products </span></h2>
                        </TextFade>
                        <ProductList products={slicedSimilar} />
                        <div className="flex items-center justify-center pt-12">
                            <Link href='/products'>
                                <button
                                    className="flex
                                items-center
                                justify-center
                                w-full
                                px-7
                                py-3
                                text-lg
                                font-bold
                                leading-7
                                text-center
                              text-white
                                transition-all
                                duration-200
                                bg-[#292e76]
                                border 
                                border-transparent
                                rounded-md
                                inlin-flex
                                sm:w-auto
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                hover:bg-[#383fa0]
                            ">See all products</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SimilarProducts