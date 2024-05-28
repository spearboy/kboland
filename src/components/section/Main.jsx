import React from 'react'

import { HelmetProvider, Helmet } from 'react-helmet-async'

import Header from './Header'
import Footer from './Footer'
import Search from './Search'

const Main = (props) => {
    return (
        <HelmetProvider>
            <Helmet
                titleTemplate="%s | KBO Youtube"
                defaultTitle="KBO Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <Header />
            <main id='main' role='main'>
              <Search/>
              {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main