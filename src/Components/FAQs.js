import React, { Component } from 'react'
import Client from '../Pages/Client'
import BlackLoading from '../images/black-loader.gif'

class FAQs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            homefaqs: []

        }
    }

    componentDidMount() {
        Client.getEntries({
            'content_type': 'homeFaqs',
            'order': 'sys.createdAt'

        }).then((entries) => {
            this.setState({ homefaqs: entries.items })
        })
    }

    render() {
        return (
            <>
                <section id="faqs">
                    <div className="container text-center pt-4">
                        <h2>Faqs</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam laoreet nunc, eu gravida ex interdum in. Curabitur feugiat et mauris non scelerisque. </p>
                    </div>
                    {this.state.homefaqs.length === 0 ?
                            <div align="center"><img src={BlackLoading} alt="Loading..." /></div> :
                    <div className="container mt-10">
                        <div className="col-md-12">
                            <div className="panel-group" id="accordion3" role="tablist" aria-multiselectable="true">
                                {this.state.homefaqs.map((item, num=0) => {
                                    num = num + 1
                                    return (
                                <div className="panel panel-default">
                                    <div  className="panel-heading" role="tab" id="headingOne3">
                                        <h4 className="panel-title">
                                            <a role="button" className="collapsed" data-toggle="collapse" href={"#one" + num} aria-expanded="true" aria-controls="collapseOne3">
                                            {item.fields.faqTitle}
                                    </a>
                                        </h4>
                                    </div>
                                    <div id={"one" + num} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne3">
                                        <div className="panel-body">
                                            <p>{item.fields.faqDescription}</p>
                                        </div>
                                    </div>
                                </div>  
                                )
                            })}                              
                            </div>
                        </div>
                    </div>
                    }
                </section>
                
            </>
        )
    }
}

export default FAQs
