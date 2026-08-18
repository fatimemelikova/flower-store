import React from "react";
import { AnemenoLogo } from "./AnemenoLogo";
import { UrunData } from "./UrunData";

function Urunler() {
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
                  <button>Sebete ekle</button>
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
