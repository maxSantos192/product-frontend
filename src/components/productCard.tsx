import { Product } from "@/@types/product";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { formatCurrency } from "../helpers/price";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onDelete: (id: string) => void;
}

function ProductCard({ product, onDelete }: ProductCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div>
            <img src={product.photo} alt={product.name} />
          </div>
          <h2 className="font-semibold">{product.name}</h2>
          <p>Quantidade: {product.qty}</p>
          <p>Preço: {formatCurrency(product.price)}</p>

          <div className="mt-4 flex justify-between">
            <Button asChild>
              <Link to={`/product/${product.id}`}>
                <Pencil />
              </Link>
            </Button>
            <Button
              className="bg-red-500 hover:cursor-pointer hover:bg-red-600"
              onClick={() => onDelete(product.id)}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
