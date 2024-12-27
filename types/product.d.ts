export type Product = {
  id: string;
  name: string;
  price: number;
  feature?: {
    color: string;
    size: string;
  };
  description: string;
  category: string;
  image: string;
  rating: number;
};

export interface IproductsProps {
  products: Product[];
}
interface IproductProps {
  product: Product;
}


export interface ProductPageProps {
  params: {
    id: string;
  };
}
