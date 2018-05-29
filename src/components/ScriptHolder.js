import React from 'react'
import Script from 'react-load-script'
//import OverlayLoader from 'react-loading-indicator-overlay/lib/OverlayLoader'

// MArch 28 : not used anymore.., script is moved to layout page

class ScriptHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            loadingActive : true
                  };
        this.onCreateIndicate = this.onCreateIndicate.bind(this);
        this.onLoadIndicate   = this.onLoadIndicate.bind(this);
    }

    onCreateIndicate(){

    //this.setState({loadingActive:true});
        console.log('oncreate -script holder')

    }

    onLoadIndicate(){

        this.setState({loadingActive:false})

    }



    render() {
        const {loadingActive} = this.state


        return(
            <div>
                    <Script
                        url="https://s3.ap-south-1.amazonaws.com/b3docker/banquetbot.js"
                        onCreate={this.onCreateIndicate}
                        onError={()=> console.log('script error')}
                        onLoad={this.onLoadIndicate}
                    />

                <div style={{backgroundColor:'#000', width:'100wv', height:'100wh', position:'absolute',zIndex:1000}}>123123</div>}
            </div>

        )
    }

}


export default ScriptHolder
