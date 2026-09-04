import React from "react";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector  } from "react-redux";
import { changeOpencart , increasecount, decreasecount  , deleteItem} from "./BasketSlicer";
import { AnemenoLogo } from "./AnemenoLogo";
function Basket() {
  const dispatch = useDispatch();
  const basketlist = useSelector((state)=>state.basket.basketItems)
 const totalPrice = basketlist.reduce((total, item) => {
  return total + item.fiyat * item.count;
}, 0);
useEffect(()=>{
  localStorage.setItem("basket" , JSON.stringify(basketlist))
},[basketlist])

  return (
    <>
      <div className="basket-overlay"
       onClick={() => dispatch(changeOpencart())}>
        <motion.div
          className="basket"
          initial={{ right: -450 }}
          animate={{ right: 0 }}
          exit={{ right: -450 }}
          transition={{ duration: 0.6 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="basket-header">
            <h2>Sepetim</h2>
            <IoMdClose size={20} onClick={() => dispatch(changeOpencart())} />
          </div>
          <hr />
          <div className="basket-list">
            {
              basketlist.map((item)=>(
                <div className="basket-item" key={item.id}>
                  <div className="basketItem-art">
                    <AnemenoLogo color="#314033" size="45"/>

                  </div>
                 <div className="basketItem-content">
                  <p>{item.ismi}</p>
                  <div className="price-box">
                    <div className="count-box">
                    <button onClick={()=>dispatch(increasecount(item.id))}>+</button>
                    <p>{item.count}</p>
                    <button onClick={()=>dispatch(decreasecount(item.id))}>-</button>
                  </div>
                  <p>{item.count * item.fiyat}$</p>
                  </div>
                  {
                    item.count==item.stok ? <p className="stok-limit">Stok sınırına ulaşıldı</p> : ""
                  }
                  <p style={{color:"red"}} onClick={()=>dispatch(deleteItem(item.id))}>Kaldır</p>
                 </div>


                </div>
                
              ))
              
            }

          </div>
          <div className="basket-footer">
            <p>Toplam : {totalPrice}$</p>
            <button>Sepeti Onayla</button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Basket;
