import React from 'react'
import Link from 'next/link'

const Cennik_Element = () => {
    return (
        <section id='cennik_element'>

            <h1 className="heading">Fiyat Listesi</h1>

            <div className="cennik_element_1">
                <h3>Havale ile ödemeleri kabul ediyorum.</h3>
                <p>Lütfen görüşmenizi planlanan ziyaret tarihinden en geç 24 saat önce iptal edin.
                </p>
            </div>
            
            <div className="cennik_element_2">
                <div>
                    <div className="circle">
                        <div className="icon icon_1"></div>
                    </div>
                    <p>Psikolojik Danışmanlık</p>
                    <h2>1000 TL / 60 dakika</h2>                    
                </div>
                <div>
                    <div className="circle">
                        <div className="icon icon_2"></div>
                    </div>
                    <p>Bireysel Psikoterapi </p>
                    <h2>1000 TL / 50 dakika </h2>
                </div>
            </div>

            <div className="menu_button">                
                <Link href="/umow_wizyte" className='button_small_screen'><button className='dark'>Randevu Alın</button></Link>
            </div>
        </section>
    )
}

export default Cennik_Element