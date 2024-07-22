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
                <Link href="/o_mnie">Hakkımda</Link>
                <Link href="komu_pomagam">Kime Yardımcı Oluyorum</Link>
                <Link href="jak_pomagam">Nasıl Yardımcı Oluyorum</Link>
                <Link href="/cennik">Fiyat Listesi</Link>
                {/* <Link href="/blog">Blog</Link> */}
                <Link href="/kontakt">İletişim</Link>
            </div>

            <div className="menu_button">                
                <Link href="/umow_wizyte" className='button_small_screen'><button className='dark'>Umów wizytę</button></Link>
            </div>

            <div className="hamburger">Hamburger</div>
        </section>
    )
}

export default Navbar