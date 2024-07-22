import Link from 'next/link'

const Pomagam = () => {
    return (
        <section id="pomagam" className='off_white'>

            <h1 className="heading">Yardım Ediyorum</h1>

            <div className="pomagam_div pomagam_1">
                <h3>Duygusal zorluklarla başa çıkın</h3>
                <div className="line_pomagam"></div>
                <p>Duygudurum bozuklukları, korku, kaygı, geri çekilme, stres, üzüntü, öfke ve saldırganlık</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Daha Fazla Bilgi</button></Link>
            </div>

            <div className="pomagam_div pomagam_2">
                <h3>Varoluşsal sorunlarla uğraşmak                </h3>
                <div className="line_pomagam"></div>
                <p>Yalnızlık, hayatta anlam ve amaç eksikliği, intihar düşünceleri</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Daha Fazla Bilgi</button></Link>
            </div>

            <div className="pomagam_div pomagam_3">
                <h3>Başkalarıyla ilişkileri geliştirin ve/veya oluşturun</h3>
                <div className="line_pomagam"></div>
                <p>Arkadaşlık veya ortaklık kurma ve sürdürmede zorluklar</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Daha Fazla Bilgi</button></Link>
            </div>

            <div className="pomagam_div pomagam_4">
                <h3>Kendinizi anlayın ve kabul edin</h3>
                <div className="line_pomagam"></div>
                <p>Kendini kabul etme, cinsel yönelimle ilgili zorluklar</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Daha Fazla Bilgi</button></Link>
            </div>

            <div className="pomagam_div pomagam_5">
                <h3>Daha etkili işlev</h3>
                <div className="line_pomagam"></div>
                <p>Düşük benlik saygısı, eleştirel benlik algısı, utangaçlık</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Daha Fazla Bilgi</button></Link>
            </div>

            <div className="pomagam_div pomagam_6">
                <h3>Kişisel krizlerin üstesinden gelin</h3>
                <div className="line_pomagam"></div>
                <p>Özel veya profesyonel hayattaki zorluklar, değişiklikler, önemli kararlar</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Daha Fazla Bilgi</button></Link>
            </div>
        </section>
    )
}

export default Pomagam