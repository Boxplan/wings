import React from 'react'
import Link from 'gatsby-link'
import '../assets/scss/main.scss'
import '../assets/css/loaders.css'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScriptHolder from '../components/ScriptHolder'
import Script from 'react-load-script'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faComments from '@fortawesome/fontawesome-free-solid/faComments'
import faDesktop from '@fortawesome/fontawesome-free-solid/faDesktop'


class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuVisible: false,
            loading    : 'is-loading',
            loadScript : '',                 // used to mount the sctipholder component
            scriptAlreadyLoaded: '',         // to determine if script is already there
            teaserText : 'I am Online',
            botShow    : '',                 // trigger to the entire sequence
            botShowingNow    : ''   ,        // trigger to the entire sequence
            screenWidth    : ''     ,        // set in line 51 by loadscriptnow. since wraper size keeps changing, the value is persisted here . unable to use window.innerwidth in server side pre-rendering
            loadingActive    : false         // set in line 51 by loadscriptnow. since wraper size keeps changing, the value is persisted here . unable to use window.innerwidth in server side pre-rendering
        };
        this.handleToggleMenu   = this.handleToggleMenu.bind(this);
        this.loadScriptNow      = this.loadScriptNow.bind(this);
        this.hideBotNow         = this.hideBotNow.bind(this);
        this.showBotNow         = this.showBotNow.bind(this);
        this.onCreateIndicate   = this.onCreateIndicate.bind(this);
        this.onCreateIndicatetwo = this.onCreateIndicatetwo.bind(this);
        this.onLoadIndicate     = this.onLoadIndicate.bind(this);

    }
    onCreateIndicate(){

        this.setState({loadingActive:true});
        console.log('oncreate -script main')

    }
    onCreateIndicatetwo(){

        this.setState({loadingActive:true});
        console.log('oncreate -script start')

    }

    onLoadIndicate(){

        //this.setState({loadingActive:false, loadScripttwo:true});
        this.setState({loadingActive:false});
        console.log('loading now')

    }


    loadScriptNow(){

        const {scriptAlreadyLoaded} = this.state;

        if(!scriptAlreadyLoaded) {

            this.setState({
                loadScript: true,
                scriptAlreadyLoaded:true,         // March 10: indicated if this is first call with script or just show bot that is already loaded.
                botShowingNow : true             // this is to indicate bot is currently on
            });

            const twidth = document.getElementById("wrapper").clientWidth;
            const shrinkWidth = twidth-370;

            if (twidth > 720) {

                this.setState({teaserText: 'Back to Website', screenWidth : twidth});

                Object.assign(document.getElementById('wrapper').style,{width: `${shrinkWidth}px`, opacity: .5});
                Object.assign(document.getElementById('teaser').style,{width: `${shrinkWidth}px`, boxShadow: 'none'});
                Object.assign(document.getElementById('ringring').style,{display: 'none'});
                Object.assign(document.getElementById('circle').style,{display: 'none'});

            } else {

                this.setState({teaserText: ''});
                Object.assign(document.getElementById('wrapper').style,{ display:'none' });
                Object.assign(document.getElementById('teaser').style,{ width: '50px', boxShadow: 'none', bottom: '120px', position:'absolute', cursor:'pointer', paddingRight:'5px', borderRadius:'0 5px 5px 0'});
                Object.assign(document.getElementById('ringring').style,{display: 'none'});
                Object.assign(document.getElementById('circle').style,{display: 'none'});
            }
        } else {

            this.showBotNow()
        }
    }

    hideBotNow(){

        this.setState({
            botShowingNow : false
        })


        const {screenWidth} = this.state;

        if (screenWidth >720 ) {
            this.setState({teaserText: 'Continue Chat'});

            Object.assign(document.getElementById('rscroot').style,{right:'-1000px'});
            Object.assign(document.getElementById('wrapper').style,{width:`${screenWidth}px`,opacity:1});
            Object.assign(document.getElementById('teaser').style,{width:`${screenWidth}px`});
            //document.getElementById('wrapper').style.width = `${twidth}px`;
            //document.getElementById('wrapper').style.opacity = '.5';

        } else {
            this.setState({teaserText: ''});
            Object.assign(document.getElementById('rscroot').style,{right:'-1000px'});
            Object.assign(document.getElementById('wrapper').style,{ display:'block'});
            //Object.assign(document.getElementById('teaser').style,{ position:'absolute', width: '180px', bot:'50px', zIndex:1000});
        }
    }

    showBotNow(){

        this.setState({
            botShowingNow : true             // this is to indicate bot is currently on
        })

        const {screenWidth} = this.state;
        const shrinkWidth = screenWidth-370;

        if (screenWidth > 720 ) {
            this.setState({teaserText: 'Back to Website'});
            Object.assign(document.getElementById('wrapper').style,{width:`${shrinkWidth}px`, opacity: .5});
            Object.assign(document.getElementById('teaser').style,{width: `${shrinkWidth}px`});
            Object.assign(document.getElementById('rscroot').style,{right:'0px'});

        } else {
            this.setState({teaserText: ''});
            Object.assign(document.getElementById('wrapper').style,{display:'none'});
           // Object.assign(document.getElementById('teaser').style,{width: '20px', position:'absolute', bottom: '120px'});
            Object.assign(document.getElementById('rscroot').style,{right: '0px'});
        }

    }


    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);

    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    componentDidUpdate() {

        if (this.state.botShow && !this.state.botShowingNow) {
            this.loadScriptNow()
        }

        if (!this.state.botShow && this.state.botShowingNow) {
            this.hideBotNow()
        }

    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }



    render() {
        const { children } = this.props;
        const { loadScript, teaserText, botShowingNow, loadingActive } = this.state;


        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children()}
                   {/* <Contact />*/}
                   {/* <Footer/>*/}
                </div>



                <Menu onToggleMenu={this.handleToggleMenu} />
                <div
                    data-start="What Event are you planning ?"
                    data-greet="Wings Banquet Hall"
                    data-float="1"
                    data-vendorMail=""
                    data-light="#EEF2F5"
                    data-primary="#F3306B"
                    data-topic="gatsbytopical"
                    data-ich="1"
                    data-widget="Get Quote"
                    data-altone="svb"
                    data-alttwo="Get Quote"
                    data-justgyan=""
                    data-jumbo="Instant Response"
                    data-fl="bq"
                    data-city="bangalore"
                    data-hotd="10014838"
                    data-avtar="https://s3.ap-south-1.amazonaws.com/chainsite/wings/wings-small.png"
                    data-img="https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Shalom-Banquet-Hall-at-Wings-view-from-stage.jpg"
                    data-cityd="6053307"
                    data-bt="95"
                    id="bot">
                </div>

                <div
                    onClick={()=>this.setState({botShow:!this.state.botShow})}
                    //onClick={this.loadScriptNow}
                    id='teaser'
                    style={{color:'#fff',
                        position:'fixed',
                        height: 50,
                        width:'100%',
                        backgroundColor:'#2a2f4a',
                        textAlign: 'right',
                        zIndex:1000,
                        bottom:0,
                        paddingTop: 11,
                        fontSize:'1.2em',
                        boxShadow: '5px -5px 5px 5px #888888',
                        paddingRight: 80,
                        paddingLeft: 10,
                        cursor:'pointer'
                    }}
                >
                    {!botShowingNow ?
                        <FontAwesomeIcon icon={faComments} style={{float:'left'}}/>
                        :
                        <FontAwesomeIcon icon={faDesktop} style={{float:'left'}} />
                    }
                    {teaserText}
                    <div id="ringring" onClick={()=>this.setState({botShow:!this.state.botShow})}></div>
                    <div id="circle"   onClick={()=>this.setState({botShow:!this.state.botShow})}></div>
                </div>
                {loadScript && <Script
                    url="https://d135nng9hpqknm.cloudfront.net/start.js"
                    onCreate={this.onCreateIndicate}
                    onError={()=> console.log('script error')}
                    onLoad={this.onLoadIndicate}
                />}
            </div>
        )
    }
}



Template.propTypes = {
    children: React.PropTypes.func
}

export default Template
