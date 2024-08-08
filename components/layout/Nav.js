import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {motion as m} from 'framer-motion'

const variants = {
    open: {opacity: 1, x: '15%'},
    closed: {opacity: 0, x: "20%"},
}

const Nav = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const convertToUpperCase = (text) => {
        return text.replace(/i/g, 'İ').toUpperCase();
      };
        
    useEffect(() => {
        const handleRouteChange = () => {
            setIsOpen(false)
        }

        router.events.on('routeChangeStart', handleRouteChange)

        // Clean up the event listener on unmount
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router.events])

    return (
        <section id='nav'>
            <div className='logo_menu'>
                <Link href="/"><h4>{convertToUpperCase("Ezgisu Güneş")}</h4></Link>
            </div>
           

            <div className="menu_desktop">
                <Link href="/hakkimda">Hakkımda</Link>
                <Link href="yardimci">KİME Yardımcı Oluyorum</Link>
                <Link href="nasil-yardimci-oluyorum">Nasıl Yardımcı Oluyorum</Link>
                <Link href="/fiyat-listesi">FİYAT LİSTESİ</Link>
                {/* <Link href="/blog">Blog</Link> */}
                <Link href="/iletisim">İLETİŞİM</Link>
            </div>

            <div className="menu_button">                
                <Link href="/randevu_al" className='button_small_screen'><button className='dark'>Randevu Alın</button></Link>
            </div>

            <nav className={`menu ${isOpen ? 'open' : 'closed'}`} onClick={() => setIsOpen(!isOpen)} >
                <svg className='line top'></svg>
                <svg className='line middle'></svg>
                <svg className='line bottom'></svg>
            </nav>

            <m.li className='menu_container'>
                <m.div 
                    className='menu_links'
                    initial='closed'
                    animate={isOpen ? 'open' : 'closed'}
                    variants={variants}
                    transition={{duration: 0.75, ease: 'easeOut', delay: 0.5}}
                    >
                    <Link className='link' href="/hakkimda"><h4>Hakkımda</h4></Link>
                    <Link className='link' href="/yardimci"><h4>KİME YARDIMCI OLUYORUM</h4></Link>
                    <Link className='link' href="/nasil-yardimci-oluyorum"><h4>NASIL YARDIMCI OLUYORUM</h4></Link>
                    <Link className='link' href="/fiyat-listesi"><h4>FİYAT LİSTESİ</h4></Link>
                    {/* <Link className='link' href="/blog"><h4>Blog</h4></Link> */}
                    <Link className='link button_small_screen' href="/randevu_al"> </Link>
                    <Link className='link' href="/iletisim"><h4>İLETİŞİM</h4></Link>
                        <button style={{width:"150px"}} className='dark'>Randevu Alın</button>
                   
                </m.div>
            </m.li>
        </section>
    )
}

export default Nav