import Link from 'next/link'

const Pomagam = () => {
    return (
        <section id="pomagam" className='off_white'>

            <h1 className="heading">Pomagam</h1>

            <div className="pomagam_div pomagam_1">
                <h3>Radzić sobie z trudnościami natury emocjonalnej</h3>
                <div className="line_pomagam"></div>
                <p>Zaburzenia nastroju, lęk, niepokój, wycofanie, stres, smutek, złość i agresja</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>

            <div className="pomagam_div pomagam_2">
                <h3>Radzić sobie z problemami natury egzystencjalnej</h3>
                <div className="line_pomagam"></div>
                <p>Samotność, brak poczucia sensu i celu życia, myśli samobójcze</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>

            <div className="pomagam_div pomagam_3">
                <h3>Poprawić i/lub budować relacje z innymi</h3>
                <div className="line_pomagam"></div>
                <p>Trudności w nawiązywaniu i utrzymywaniu relacji przyjacielskich lub partnerskich</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>

            <div className="pomagam_div pomagam_4">
                <h3>Zrozumieć i zaakceptować siebie</h3>
                <div className="line_pomagam"></div>
                <p>Samoakceptacja, trudności związane z orientacją seksualną</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>

            <div className="pomagam_div pomagam_5">
                <h3>Skuteczniej funkcjonować</h3>
                <div className="line_pomagam"></div>
                <p>Niskie poczucie własnej wartości, krytyczne postrzeganie siebie, nieśmiałość</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>

            <div className="pomagam_div pomagam_6">
                <h3>Pokonać kryzysy osobiste</h3>
                <div className="line_pomagam"></div>
                <p>Wyzwania, zmiany, ważne decyzje w życiu prywatnym lub zawodowym</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>
        </section>
    )
}

export default Pomagam