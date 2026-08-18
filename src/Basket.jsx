import React from "react";
import { IoMdClose } from "react-icons/io";

function Basket() {
  return (
 <>
  <div className="basket-overlay">
      <div className="basket">
        <div className="basket-header">
          <h2>Sepetim</h2>
          <IoMdClose size={20} />

        </div>
        <hr />
        <div className="basket-list">
          
        </div>
    
  </div>
  </div>
  
  </>
  ) 

}

export default Basket;
