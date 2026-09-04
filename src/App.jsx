import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Urunler from "./Urunler";
import Home from "./Home";
import Basket from "./Basket";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

function App() {
  const openCart = useSelector((state) => state.basket.openCart);
  return (
    <>
      <Header />
      <AnimatePresence>{openCart && <Basket />}</AnimatePresence>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Urunler />} />
      </Routes>
    </>
  );
}

export default App;
