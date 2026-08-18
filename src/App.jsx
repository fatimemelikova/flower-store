import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Urunler from "./Urunler";
import Home from "./Home";
import Basket from "./Basket";
import { useSelector } from "react-redux";



function App() {
  const openCart = useSelector((state)=>state.basket.openCart)
  return (
    <>
        <Header/> 
        {openCart && <Basket/>  }
        <Basket/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Urunler/>}/>


    </Routes>

   


    </>
  );
}

export default App;
