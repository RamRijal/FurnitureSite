
import { IproductsProps } from '@/types/product'
import ProductCard from '../../ProductCard/page'

const ProductList = ({ products }: IproductsProps) => {
    return (

        <div className="grid mx-auto max-w-7xl grid-cols-1 px-4 mt-12 text-center xl:gap-3 sm:gap-x-4 sm:mt-16 md:gap-y-10 sm:grid-cols-2 md:grid-cols-2 gap-y-8 lg:grid-cols-3 xl:px-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

        </div>

    )
}

export default ProductList

// import { getProductByID, getProducts } from '@/utils/api';
// import { notFound } from 'next/navigation';
// import ProductCard from '../../ProductCard/page';

// export async function generateStaticParams() {
//     const products = await getProducts();
//     return products.map((product) => ({
//         id: product.id,
//     }));
// }

// const ProductList = async ({ params }: { params: { id: string } }) => {
//     const product = await getProductByID(params?.id);
//     if (!product) {
//         notFound();
//     }
//     const allProducts = await getProducts();
//     const relatedProducts = allProducts
//         .filter(p => p.category === product?.category && p.id !== product?.id)
//         .slice(0, 3); // Fetch up to 3 related products


//     console.log("Product:", product);  // Log product to see if it's fetched correctly
//     console.log("All Products:", allProducts);  // Check the list of all products
//     console.log("Related Products:", relatedProducts);  // See the related products
//     return (
//         <div className="grid mx-auto max-w-7xl grid-cols-1 px-4 mt-12 text-center xl:gap-3 sm:gap-x-4 sm:mt-16 md:gap-y-10 sm:grid-cols-2 md:grid-cols-3 gap-y-8 lg:grid-cols-3 xl:px-4">
//             <div className="">
//                 <ProductCard product={product} />
//             </div>

//             {/* Display related products */}
//             {relatedProducts.length > 0 && (
//                 <>
//                     <h2 className="text-2xl font-bold mb-6">Related Products</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                         {relatedProducts.map((relatedProduct) => (
//                             <ProductCard key={relatedProduct.id} product={relatedProduct} />
//                         ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default ProductList;