import { useEffect, useState } from "react";
import Header from "@/components/header";
import { Product } from "@/@types/product";
import { productHook } from "@/hooks/product";
import ProductCard from "@/components/productCard";
import { Input } from "@/components/ui/input";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");

  async function fetchProducts() {
    const { data } = await productHook.getAll(filter);
    setProducts(data);
  }

  async function handleDelete(id: string) {
    await productHook.delete(id);
    fetchProducts();
  }

  useEffect(() => {
    fetchProducts();
  }, [filter]);

  return (
    <div>
      <Header />

      <div className="mx-auto flex max-w-2xl p-6">
        <Input
          type="text"
          placeholder="Procure pelo nome"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
