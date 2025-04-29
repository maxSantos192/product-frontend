import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductForm from "./pages/productForm";
import ProductList from "./pages/productList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/product" />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
