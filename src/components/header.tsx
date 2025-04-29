import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h1 className="text-2xl font-semibold">Produtos</h1>

        <Button asChild>
          <Link to="/product/0">Criar novo</Link>
        </Button>
      </div>
    </div>
  );
}

export default Header;
