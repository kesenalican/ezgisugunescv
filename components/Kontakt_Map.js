import React from 'react'
import Map from './Map'
import Link from 'next/link'

const Kontakt = () => {

    const dialNumber = () => {
        window.location.href = "tel:+48530023204"
    }
    
    return (
        <section id='kontakt_map'>

            <h1 className="heading">İLETİŞİM</h1>
            
            <div className="background blur">
               

                <div className='kontakt_map_2'>
                    <h4>Adres</h4>
                    <p>Gaziantep / Şahinbey</p>
                </div>

                <div className='kontakt_map_3'>
                    <h4>Telefon:</h4>
                    <p onClick={dialNumber}>05419138614</p>
                    <h4>email:</h4>
                    <Link href="mailto:ezgisuguness@gmail.com">ezgisuguness@gmail.com</Link>
                </div>
            </div>

            <div className='mapa'>
                <Map />
            </div>
        </section>
    )
}

export default Kontakt