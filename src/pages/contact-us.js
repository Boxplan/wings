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
                        <h1>Contact Us</h1>
                    </header>
                    <p>Wings House, No. 236, 5th Main, 2nd Block, HRBR Layout, Bangalore - 560043</p>
                    <p>+91 80 39345194</p>

                    </div>
            </section>
        </div>

    </div>
)

export default Generic