import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.scss'
import '../components/layout/section.scss'
import '../components/layout/navbar.scss'
import '../components/layout/nav.scss'
import '../components/layout/footer.scss'

import '../components/hero.scss'
import '../components/konsultacje.scss'
import '../components/pomagam.scss'
import '../components/blog_element.scss'
import '../components/kontakt_form.scss'

import '../components/o_mnie.scss'
import '../components/komu_pomagam.scss'
import '../components/jak_pomagam.scss'
import '../components/cennik.scss'
import '../components/umow_wizyte.scss'

import '../components/kontakt_map.scss'
import '../components/map.scss'

import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps, router }) {  
    return (
        <Layout>
            <div>
                <AnimatePresence initial={true} mode={'wait'}>
                <Component key={router.pathname} {...pageProps} />
                </AnimatePresence>
            </div>
        </Layout>
    )
}

export default MyApp