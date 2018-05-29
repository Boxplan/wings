import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/packages">Packages</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/capacity">Capacity Info</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/images">Image Gallery</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/recent-events">Reviews</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact-us">Contact Us</Link></li>
            </ul>
            {/*<ul className="actions vertical">
                <li><a href="http://palmshorebanquets.com" target="_blank" className="button special fit">Live Demo</a></li>
            </ul>*/}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
