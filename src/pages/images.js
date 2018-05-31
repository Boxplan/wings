import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import pic20 from '../assets/images/pic20.jpg'
import pic21 from '../assets/images/pic21.jpg'
import pic22 from '../assets/images/pic22.jpg'
import pic23 from '../assets/images/pic23.jpg'
import pic24 from '../assets/images/pic24.jpg'
import pic25 from '../assets/images/pic25.jpg'
import pic26 from '../assets/images/pic26.jpg'


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
                        <h1>Shalom Banquet Hall</h1>
                    </header>
                    <h5>View from stage</h5>
                    <span className="image main"><img src={pic20} alt="" /></span>
                    <span className="image main"><img src={pic21} alt="" /></span>
                    <h5>Stage view</h5>
                    <span className="image main"><img src={pic22} alt="" /></span>
                    <h5>Shalom Hall Entrance</h5>
                    <span className="image main"><img src={pic23} alt="" /></span>





                </div>
                <div className="inner">
                    <header className="marquee">
                        <h1>Terrace Banquet Hall</h1>
                    </header>
                    <h5>Stage and Event Area</h5>
                    <span className="image main"><img src={pic24} alt="" /></span>
                    <span className="image main"><img src={pic25} alt="" /></span>
                    <h5>Buffet Setup and Dining Area</h5>
                    <span className="image main"><img src={pic26} alt="" /></span>

                </div>
            </section>
        </div>

    </div>
)

export default Generic