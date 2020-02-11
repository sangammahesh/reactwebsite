import React, { Component } from 'react';
import Client from './Client';
import WhiteLoading from '../images/loader.gif';


class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicespage: []
        }
    }

    componentDidMount(){
        Client.getEntries({
            'content_type': 'services', 
            'order': 'sys.createdAt'

        }).then((entries)=>{
            this.setState({servicespage: entries.items})
        })
    }

    render() {
        return (
            <div>
                <section id="services" className="p-4">
                    <div className="container">
                        <div className="text-center">
                            <h2>Our Services</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta in ipsum non facilisis.</p>
                        </div>

                        {this.state.servicespage.length === 0 ?
                            <div align="center"><img src={WhiteLoading} alt="Loading..." /></div> :
                            <div className="row">
                                {this.state.servicespage.map((item, index) => {
                                    return(
                                        <div key={index} className="col-md-4">
                                            <div className="media service-wrap">
                                                <div>
                                                    <img className="pr-3" src={item.fields.serviceIcon.fields.file.url} alt="icon" />
                                                </div>
                                                <div className="media-body">
                                                    <h3 className="media-heading">{item.fields.serviceTitle}</h3>
                                                    <p>{item.fields.serviceDescription}</p>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                                )
                                }
                            </div>
                        }
                    </div>
                </section>
            </div>
        );
    }
}
export default Services
