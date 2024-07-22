import Head from 'next/head'
import { motion as m } from 'framer-motion'

import Hero from '../components/Hero'
import Konsultacje from '../components/Konsultacje'
import Pomagam from '../components/Pomagam'
import Blog_Element from '../components/Blog_Element'
import Kontakt_Form from '../components/Kontakt_Form'

export default function Home() {
    return (
        <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1, ease: 'easeOut', delay: 0.25}}
        >
            <Head>
                <title>Ezgisu Güneş | Psikolojik Danışman</title>
                <meta name="description" content="Ezgisu Güneş | Psikolojik Danışman" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Hero />
                <Konsultacje />
                <Pomagam />
                {/* <Blog_Element /> */}
                <Kontakt_Form />
            </main>
        </m.div>
    )
}