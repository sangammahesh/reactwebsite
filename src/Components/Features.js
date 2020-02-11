import React, { Component } from 'react'
import Client from '../Pages/Client'
import BlackLoading from '../images/black-loader.gif'

class Features extends Component {
    constructor(props) {
        super(props)

        this.state = {
            homefeature: []

        }
    }

    componentDidMount() {
        Client.getEntries({
            'content_type': 'homeFeatures',
            'order': 'sys.createdAt'

        }).then((entries) => {
            this.setState({ homefeature: entries.items })
        })
    }
    render() {
        return (
            <>
                <section id="feature">
                    <div className="container text-center pt-4">
                        <h2>Features</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam laoreet nunc, eu gravida ex interdum in. Curabitur feugiat et mauris non scelerisque. </p>
                    </div>
                    <div className="container">
                        {this.state.homefeature.length === 0 ?
                            <div align="center"><img src={BlackLoading} alt="Loading..." /></div> :
                            <div className="row">
                                {this.state.homefeature.map((item, index) => {
                                    return (
                                        <div key={index} className="col-md-4">
                                            <div className="feature-wrap">
                                                <i className={item.fields.featureIcon}></i>
                                                <h2>{item.fields.featureTitle}</h2>
                                                <h3>{item.fields.featureDescription}</h3>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </section>
                
            </>
        )
    }
}

export default Features
