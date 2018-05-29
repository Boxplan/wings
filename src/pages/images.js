import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import pic20 from '../assets/images/pic20.jpg'
import pic21 from '../assets/images/pic21.jpg'
import pic22 from '../assets/images/pic22.jpg'
import pic23 from '../assets/images/pic23.jpg'
import pic24 from '../assets/images/pic24.jpg'
import pic25 from '../assets/images/pic25.jpg'
import pic27 from '../assets/images/pic27.jpg'
import pic28 from '../assets/images/pic28.jpg'
import pic29 from '../assets/images/pic29.jpg'
import pic30 from '../assets/images/pic30.jpg'
import pic31 from '../assets/images/pic31.jpg'
import pic32 from '../assets/images/pic32.jpg'
import pic33 from '../assets/images/pic33.jpg'
import pic34 from '../assets/images/pic34.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Courtyard</title>
            <meta name="description" content="Nandhana Chennai" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Courtyard and Pavilion</h1>
                    </header>

                    <span className="image main"><img src={pic23} alt="" /></span>
                    <span className="image main"><img src={pic24} alt="" /></span>
                    <span className="image main"><img src={pic25} alt="" /></span>
                    <span className="image main"><img src={pic27} alt="" /></span>
                    <span className="image main"><img src={pic28} alt="" /></span>
                    <span className="image main"><img src={pic29} alt="" /></span>
                    <span className="image main"><img src={pic30} alt="" /></span>
                    <span className="image main"><img src={pic31} alt="" /></span>
                    <span className="image main"><img src={pic32} alt="" /></span>
                    <span className="image main"><img src={pic33} alt="" /></span>




                </div>
                <div className="inner">
                    <header className="marquee">
                        <h1>Marquee Tent</h1>
                    </header>
                    <span className="image main"><img src={pic21} alt="" /></span>
                    <span className="image main"><img src={pic22} alt="" /></span>

                </div>
            </section>
        </div>

    </div>
)

export default Generic