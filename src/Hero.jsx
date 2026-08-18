import React from 'react'
import { AnemenoLogo } from './AnemenoLogo'

function Hero() {
  return (
   <main>

    <div className="container">
        <div className="about">
            <p className='gray'>Şehir merkezinde el yapımı buketler</p>
            <h1>
                <b>Her demet ,</b> <br />
                <em className='duygu'>bir duygunun</em> <br />
                <b>tazeliginde.</b>
            </h1>
            <p className='hero-p'>Gonca'da çiçekler günün ilk ışığında seçilir, aynı gün elle bağlanır. Sade, canlı ve kalıcı bir izlenim bırakmak için tasarlandı.</p>
            <div className="about-btns">
                <button className='kesfet-btn'>Buketleri Keşfet</button>
                <button className='hikaye-btn'>Hikayemizi oku</button>
            </div>


        </div>
        <div className="hero-img">
            <div className="hero-blob"></div>
            <AnemenoLogo size={425} />
            
        </div>
    </div>

   </main>
  )
}

export default Hero