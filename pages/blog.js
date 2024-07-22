import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Blog_Element from '../components/Blog_Element'

export default function Blog() {
    return (
        <m.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease: 'easeOut', delay: 0.25}}
    exit={{opacity:0}}
    >

<Head>
                <title>Ezgisu Güneş | Psikolojik Danışman</title>
                <meta name="description" content="Ezgisu Güneş | Psikolojik Danışman" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Blog_Element />
            </main>

            <footer>
            </footer>
        </m.div>
    )
}