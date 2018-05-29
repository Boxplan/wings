import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Shibravyi Courtyard</title>
            <meta name="Shibravyi Courtyard" content="Shibravyi Courtyard" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact Us</h1>
                    </header>
                    <p>No. 107, BM Kaval, Kengeri Hobli, Thalagahttapura Post, Kanakpura Road, Kengeri, Bangalore-560062</p>
                    <p>+91 80 30695111</p>

                    </div>
            </section>
        </div>

    </div>
)

export default Generic