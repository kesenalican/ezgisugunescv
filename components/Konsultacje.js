import Link from 'next/link'

const Konsultacje = () => {
    return (
        <section id='konsultacje' className='white'>

            <div className="kosnultacje_1">
                <div className="circle">
                    <div className="icon icon_1"></div>
                </div>
                <h3>Psikolojik Danışmanlık</h3>
                <p>Psikoterapi süreci, psikolojik danışmanlıklarla başlar.
                     Genellikle dört oturum tanısal danışmanlık niteliğindedir.
                      Bu süre, problemi ve bunu yaşayan kişiyi detaylı bir şekilde anlamak için kullanılır. Bu temel üzerinde, daha ileri işbirliği şekli belirlenir.</p>
                <Link href="/komu_pomagam" className='konsultacje_button'><button className='light'>Daha Fazla Bilgi</button>
                </Link>
            </div>

            <div className="kosnultacje_2">
                <div className="circle">
                    <div className="icon icon_2"></div>
                </div>
                <h3>Yetişkinler İçin Bireysel Psikoterapi</h3>
                <p>Psikoterapi öncelikle hasta ve terapist arasında özgür bir konuşmayı içeren iki kişinin buluşmasıdır.</p>
                <Link href="/komu_pomagam"><button className='light'>Daha Fazla Bilgi</button></Link>
            </div>
        </section>
    )
}

export default Konsultacje