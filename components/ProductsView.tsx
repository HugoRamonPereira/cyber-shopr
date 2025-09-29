import type { Category, Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import CategorySelector from "./ui/category-selector";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full sm:w-[200px]">
        <CategorySelector categories={categories} />
      </div>

      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
