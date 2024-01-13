// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopCatagory } from "./pages/shopCatagory";
import { Product } from "./pages/Product";
import { Cart } from "./pages/cart";
import { LoginSignup } from "./pages/LoginSignup";
import { Shop } from "./pages/shop";
import { Footer } from "./components/Footer/Footer";
import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kids_banner from "./components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/men"
            element={<ShopCatagory banner={men_banner} category="men" />}
          ></Route>
          <Route
            path="/women"
            element={<ShopCatagory banner={women_banner} category="women" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCatagory banner={kids_banner} category="kid" />}
          ></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          {/* <Route path=":productId" element={<Product />}></Route>s */}
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
