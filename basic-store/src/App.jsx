import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Products from "./Components/Proudcts";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import { CartContext } from "./Components/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
