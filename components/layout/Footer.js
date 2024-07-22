import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

    const dialNumber = () => {
        window.location.href = "tel:+905419138614"
    }

  const convertToUpperCase = (text) => {
    return text.replace(/i/g, 'İ').toUpperCase();
  };
    
    return (
        <div id="footer">

            <div className="column_1">
                <h3>Bana Ulaşın</h3>
                <br />
                <Link href="/umow_wizyte" className='div5'><button className='dark'>Randevu Alın</button></Link>
            </div>

            <div className="column_2">
                <li className='footer_menu'>
                    <Link href="/">Anasayfa</Link>
                    <Link href="/o_mnie">Hakkımda</Link>
                    <Link href="komu_pomagam">Kimlere yardımcı oluyorum</Link>
                    <Link href="jak_pomagam">Nasıl yardımcı oluyorum</Link>
                    <Link href="/cennik">Fiyat Listesi</Link>
                    {/* <Link href="/blog">Blog</Link> */}
                    <Link href="/kontakt">İletişim</Link>
                </li>

                <div className="footer_bottom">
                    <div className='footer_bottom_left'>
                        <Image onClick={dialNumber} className='icon' src="/images/phone.svg" alt="phone" width={35} height={35} />
                        <Link href="https://tr.linkedin.com/in/ezgisu-gunes-a30478202" target="_blank"><Image className='icon' src="/images/linkedin.svg" alt="linkedin" width={35} height={35} /></Link>
                        <Link href="https://www.instagram.com/ezgisugunes" target="_blank"><Image className='icon' src="/images/instagram.svg" alt="instagram" width={35} height={35} /></Link>
                        <Link href="https://twojpsycholog.pl/profil-psychologa/paulina-janik-3521" target="_blank"><Image className='icon' src="/images/twoj_psycholog.svg" alt="twoj_psycholog" width={35} height={35} /></Link>
                    </div>

                    <div className='logo_menu'>
                        <Link href="/"><h4>{convertToUpperCase("Ezgisu Güneş")}</h4></Link>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Footer