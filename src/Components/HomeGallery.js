import React, { Component } from 'react'
import Client from '../Pages/Client'
import BlackLoading from '../images/black-loader.gif'

class HomeGallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            homegallery: []
        }
    }

    componentDidMount() {
        Client.getEntries({
            'content_type': 'homeGallery',
            'order': 'sys.createdAt'

        }).then((entries) => {
            this.setState({ homegallery: entries.items })
        })
    }
    render() {
        return (
            <>
                <section id="portfolio">
                    <div className="container text-center pt-4">
                        <h2>Portfolio</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam laoreet nunc, eu gravida ex interdum in. Curabitur feugiat et mauris non scelerisque. </p>
                    </div>
                    {this.state.homegallery.length === 0 ?
                            <div align="center" className="pt-5"><img src={BlackLoading} alt="Loading..." /></div> :
                    <div className="container">
                            <div className="grid">
                                {this.state.homegallery.map((item, num=0) => {
                                    num = num + 1
                                    return (
                                        <div key={num} className="grid-item">
                                            <input type="checkbox" id={num} />
                                            <label htmlFor={num} className="lightbox"><img src={item.fields.galleryImage.fields.file.url} alt="test" /></label>
                                            <label htmlFor={num}><img src={item.fields.galleryImage.fields.file.url} alt="test" /></label>
                                        </div>
                                    )
                                })}
                            </div>
                    </div>
                    }
                </section>
                
            </>
        )
    }
}

export default HomeGallery
