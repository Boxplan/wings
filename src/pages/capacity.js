import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Wings Banquet Hall</title>
            <meta name="description" content="Wings Shalom Banquet Hall 50px - 350px" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    <h1>Seating Capacity</h1>
                    </header>
                    <h3>Shalom Banquet Hall</h3>
                    <p>Theater Style - 350px</p>
                    <p>Floating - 400px</p>
                    <h3>Terrace Banquet Hall</h3>
                    <p>Theater Style - 75px</p>
                    <p>Floating - 125px</p>


                </div>
            </section>
        </div>

    </div>
)

export default Generic