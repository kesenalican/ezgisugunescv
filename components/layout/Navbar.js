import Link from 'next/link'

const Navbar = () => {
    const convertToUpperCase = (text) => {
        return text.replace(/i/g, 'İ').toUpperCase();
      };
    return (
        <section id='navbar'>
            <div className='logo_menu'>
                <Link href="/"><h4>{convertToUpperCase("Ezgisu Güneş")}</h4></Link>
            </div>

            <div className="menu">
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

            <div className="hamburger">Hamburger</div>
        </section>
    )
}

export default Navbar