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
                    <h1>Seating Capacity</h1>
                    </header>
                    <p>Shalom Banquet Hall 50px - 350px</p>
                    <p>Terrace Banquet Hall 50px - 125px</p>


                </div>
            </section>
        </div>

    </div>
)

export default Generic