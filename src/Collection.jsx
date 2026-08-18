import React from 'react'
import { AnemenoLogo } from './AnemenoLogo'

function Collection() {
  return (
    <div className="collection-container">
        <div className="collection-header">
            <h2>Koleksiyon</h2>
            <p>Gonca'nın en özel koleksiyonları</p>
            
        </div>
        <div className="collection-boxes">

            <div className="box">
                <div className="icon-border">
                    <AnemenoLogo size='40' />
                </div>
                <h3>Günlük Buketler</h3>
                <p>Masaya, mutfağa ya da sadece kendinize — küçük bir sevinç</p>
                <b>450 ₺'den başlayan</b>

            </div>
            <div className="box">
                <div className="icon-border">
                    <AnemenoLogo size='40' />
                </div>
                <h3>Saksı çiçekleri</h3>
                <p>Masaya, mutfağa ya da sadece kendinize — küçük bir sevinç</p>
                <b>700 ₺'den başlayan</b>

            </div>
            <div className="box">
                <div className="icon-border">
                    <AnemenoLogo size='40' />
                </div>
                <h3>Özel Günler</h3>
                <p>Masaya, mutfağa ya da sadece kendinize — küçük bir sevinç</p>
                <b>650 ₺'den başlayan</b>

            </div>
            <div className="box">
                <div className="icon-border">
                    <AnemenoLogo size='40' />
                </div>
                <h3>Ofis & Etkinlik</h3>
                <p>Masaya, mutfağa ya da sadece kendinize — küçük bir sevinç</p>
                <b>250 ₺'den başlayan</b>

            </div>
        </div>
    </div>
  )
}

export default Collection