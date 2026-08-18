import React from 'react'
import { AnemenoLogo } from './AnemenoLogo'

function Section() {
  return (
<>
<div className="s-container">
    <div className="wrapper">
        <div className="wrap-left">
            <AnemenoLogo size={220} color='white'/>

        </div>
        <div className="wrap-right">
            <h3><i>"Bir çiçekçi olmak, her sabah kısa ömürlü bir güzellikle çalışmaktır. Biz bu güzelliği olabildiğince sade bırakmayı seçtik."</i></h3>
            <p>Gonca, 2016'dan beri aynı sokakta, aynı sabah ritüeliyle çalışıyor: hal'den seçilen taze çiçekler, minimum katkı, maksimum özen. Amacımız gösterişli değil, gerçek ve kalıcı bir izlenim bırakmak.</p>
<p>Her buket, atölyemizde iki kişilik küçük ekibimiz tarafından elle bağlanır — seri üretim yok, standart şablon yok.</p>
<p><b>— Gonca Ekibi</b></p>
        </div>
    </div>
</div>
</>
  )
}

export default Section
