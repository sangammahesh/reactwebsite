import React, { Component } from 'react'
import SlideShow from '../Components/SlideShow'
import './Main.css'
import HomeGallery from '../Components/HomeGallery'
import FAQs from '../Components/FAQs'
import Features from '../Components/Features'

class Home extends Component {


    render() {
        return (
            <div>
                <SlideShow />
                <Features/>
                <HomeGallery/>
                <FAQs/>
                <div className="spacer"></div>
            </div>
        );
    }
}

export default Home
