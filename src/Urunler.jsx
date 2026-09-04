import React, { useState } from "react";
import { AnemenoLogo } from "./AnemenoLogo";
import { UrunData } from "./UrunData";
import { addItemToBasket } from "./BasketSlicer";
import { useDispatch } from "react-redux";


function Urunler() {
  const dispatch = useDispatch()
  const [added , setAdded] = useState(null)
  const handleBasket = (urun)=>{
    dispatch(addItemToBasket(urun))
    setAdded(urun.id)

    setTimeout(() => {
      setAdded(null)
      
    }, 1000);
  }
  return (
    <div className="products">
      <div className="prod-wrapper">
        <div className="product-title">
          <p>ÜRÜNLER</p>
          <h2 >Buketleri keşfet</h2>
          <p>
            Stoklar günlük olarak güncellenir — az kalan ürünler işaretlenir, <br />
            tükenenler otomatik olarak devre dışı bırakılır.
          </p>
          <div className="product-list">
            {UrunData.map((urun) => (
              <div className="list-box" key={urun.id}>
                <div className="flower-art">
                  <AnemenoLogo size="120" color="#DD5A80" />
                </div>
                <div className="flower-content">
                  <p className="product-category">{urun.cathegory}</p>
                  <p>{urun.ismi}</p>
                  <p style={{fontSize:"13px" , color:"gray"}}>Stokta : <b> {urun.stok}</b> Adet</p>
                  <div className="price-buton">
                    <p>
                    <b className="product-price">{urun.fiyat}$</b>
                  </p>
                  {
                    urun.stok > 0 ? added==urun.id ? <button className="eklendi-btn"> Eklendi</button> : <button className="ekle-btn" onClick={()=>handleBasket(urun) }  >Sepete ekle</button> : <button className="tukendi-btn" >Tukendi</button>
                    
                  }
                
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Urunler;
