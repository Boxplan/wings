import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Wings Banquet Hall</title>
            <meta name="Wings Banquet Hall" content="Wings Banquet Hall" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Wings Banquet Hall</h1>
                    </header>
                    <p>Wings, One that will be remembered forever. With over 30 years of experience in events we have the 'know-how' to produce a great event for whatever you are celebrating. With such a diverse background we are confident that we are the perfect choice to plan, create and execute your next event.</p>

                </div>
            </section>
        </div>

    </div>
)

export default Generic