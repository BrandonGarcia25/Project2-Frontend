import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from './pages/ProductDetails'
import AddProductReview from "./pages/AddProductReview";
import {} from "antd";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path='/product-details/:productId' element={<ProductDetails />} />
        <Route path="/productreview" element={<AddProductReview />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
