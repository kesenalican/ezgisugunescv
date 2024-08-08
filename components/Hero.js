import Link from 'next/link'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Hero = () => {

// useEffect(() => {
//     const t1 = gsap.timeline()
//     gsap.fromTo(".hero, .upper, h2, h4, .lower, .image, .text, h3, h4, .paragraph, .button",
//     {opacity: 0, y: 25},
//     {opacity: 1, y: 0, duration: 1, delay: 1, stagger: 0.15})
// },[])

    return (
            <section id='hero'>
                {/* <div className='upper'>
                    <h1 className='center'>Söylediklerini dinlediğimde,<br /> kim olduğunu biliyorum</h1>
                    <h4 className='ralph center'><i>Ezgisu Güneş</i></h4>
           
           </div> */}
                
                <div className='lower'>
                    <div className="image_1"></div>
                    <div className="text left">
                        <h2>Ezgisu Güneş</h2>
                        <h3>Psikolojik Danışman</h3>
                        <p className='paragraph'>İşimde öncelikle diğer kişinin iyiliği bana rehberlik ediyor.
                             Hikayelerinizi ve deneyimlerinizi benimle paylaşırken kendinizi güvende
                              ve rahat hissetmenizi istiyorum. Gizliliği garanti ediyorum.</p>
                        <Link href="/hakkimda" className='button'><button className='dark'>Daha fazla</button></Link>
                    </div>
                </div>
            </section>
    )
}

export default Hero