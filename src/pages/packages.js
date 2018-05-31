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
                    <h1>Packages</h1>
                    </header>
                    <p>Rs. 18000 | 6 Hour rental for Terrace Banquet Hall | Venue is extended for 6 hrs on an exclusive basis</p>
                    <p>Rs. 65000 | 12 hour rental for Shalom Banquet Hall | Venue is extended on an exclusive basis for 12 hours</p>


                </div>
            </section>
        </div>

    </div>
)

export default Generic