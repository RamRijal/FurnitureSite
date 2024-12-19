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
};

interface IproductsProps {
  products: Product[];
}
