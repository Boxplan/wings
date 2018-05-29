import React from 'react'
import Helmet from 'react-helmet'

const Footer = (props) => (
    <div>

    <footer id="footer">
            <div
                //onClick={this.hideDom}
                 style={{color:'#2a2f4a',
                     position:'fixed',
                     height: 100,
                     width:'100%',
                     backgroundColor:'#fff',
                     textAlign:'center',
                     zIndex:1000
                 }}>
                I am Online
            </div>
    </footer>
    </div>
)

export default Footer
