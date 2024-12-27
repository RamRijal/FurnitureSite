export interface CategoriesProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}