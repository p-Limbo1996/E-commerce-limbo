import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Footer from "./Components/Footer/Footer";
import mens_banner from "./Components/assets/banner_mens.png"
import womens_banner from "./Components/assets/banner_women.png"
import kids_banner from "./Components/assets/banner_kids.png"

const App = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />  
        <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory baner={mens_banner}   category="men" />} />
        <Route path="/womens" element={<ShopCategory  baner={womens_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory baner={kids_banner}  category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
};

export default App;






