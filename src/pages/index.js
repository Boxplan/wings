import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
// import ScriptHolder from '../components/ScriptHolder'

class HomeIndex extends React.Component {

    constructor(props) {
            super(props);
            this.state ={};
            this.hideDom = this.hideDom.bind(this)
        }



    hideDom(){
      //  document.getElementById("one").style.display ="none";
    }


    render() {
       // const siteTitle = this.props.data.site.siteMetadata.title;
       // const siteDescription = this.props.data.site.siteMetadata.description;
      //  const wWidth = window.innerWidth;
      //  const wHeight = window.innerHeight;

        const schemaOrgJsonLd =
        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "@id": "http://www.shibravyicourtyard.com",
            "name": "Shibravyi Courtyard Wedding Venue",
            "image": ["http://http://www.shibravyicourtyard.com/static/pic22.3739db65.jpg,http://www.shibravyicourtyard.com/static/pic31.bf1f841b.jpg,http://www.shibravyicourtyard.com/static/pic27.aace32c0.jpg,http://www.shibravyicourtyard.com/static/pic21.badd0ad4.jpg"],
            "address": {
            "@type": "PostalAddress",
                "streetAddress": " No. 107, BM Kaval, Kengeri Hobli, Thalagahttapura Post, Kanakpura Road, Kengeri, Bangalore",
                "addressLocality": "Kanakapura Road",
                "addressRegion": "Bangalore",
                "postalCode": "560062",
                "addressCountry": "India"
        },
            "aggregateRating": {
            "@type": "AggregateRating",
                "ratingValue": " 4.5 ",
                "bestRating": "5",
                "reviewCount": " 48 "
        },
            "priceRange": "Rs.125000 - Rs.305000",
            "geo": {
            "@type": "GeoCoordinates",
                "latitude": 12.867007,
                "longitude": 77.517734
        },
            "url": "http://www.shibravyicourtyard.com",
            "telephone": " +918030695111",

            "potentialAction": {
            "@type": "ReserveAction",
                "target": {
                "@type": "EntryPoint",
                    "urlTemplate": "http://www.shibravyicourtyard.com",
                    "inLanguage": "en-US",
                    "actionPlatform": "http://schema.org/DesktopWebPlatform"


            },
            "result": {
                "@type": "Reservation",
                    "name": "Get Quote"
            }
        }
        };


        return (
            <div>
                <Helmet>
                    <title>Shibravyi Courtyard Wedding Venue</title>
                    <meta name="description" content='Traditional Outdoor Wedding Venue, Lawn and Banquet Hall off Kanakapura Road, South Bangalore ' />
                    <script type="application/ld+json">
                        {JSON.stringify(schemaOrgJsonLd)}
                    </script>
                </Helmet>

                <div id="main" >
                    <section className="tiles">
                        <article>
                            <header className="major">
                                <h3>Shibravyi Courtyard Wedding Venue</h3>
                                <p>Shibravyi, A courtyard home, with sprawling gardens, terracotta tiled pavilions and more. A perfect setting for outdoor and indoor events.</p>

                            </header>
                            <Link to="/venues" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Banquet-Hall-at-Shibravyi-Courtyard-12.jpg)`}}>
                            <header className="major">
                                <h3>Packages</h3>
                                <p>4 | 8 | 24 Hour Rental Package Available</p>

                            </header>
                            <Link to="/packages" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Banquet-Hall-at-Shibravyi-Courtyard-11.jpg)`}}>
                            <header className="major">
                                <h3>Capacity Info</h3>
                                <p>Shibravyi has 2 halls which can accommodate from 100 to 1500 Guests</p>
                            </header>
                            <Link to="/capacity" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Banquet-Hall-at-Shibravyi-Courtyard-13.jpg`}}>
                            <header className="major">
                                <h3>Gallery</h3>
                                <p>Images, Virtual Tour</p>
                            </header>
                            <Link to="/images" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Banquet-Hall-at-Shibravyi-Courtyard-unspecified-15.jpeg`}}>
                            <header className="major">
                                <h3>Recent Events</h3>
                                <p>Weddings, Family Events, Parties</p>
                            </header>
                            <Link to="/recent-events" className="link primary"></Link>
                        </article>

                        <article>
                            <header className="major">
                                <h3>+91 80 30695111</h3>
                                <p>Address | Location</p>
                            </header>
                            <Link to="/contact-us" className="link primary"></Link>
                        </article>

                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`


//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Balan-Farm-Green-Convention-Hall-balan-farm3-1.jpg)`}}>
// <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Horizon-Horizon_Octave_JP_Nagar_3.jpg)`}}>
//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>
//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>