import React, { Component } from 'react'
import Client from './Client';
import BlackLoading from '../images/black-loader.gif'
import { Link } from 'react-router-dom';

class Blogs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogpage: [],
            filter: '',
            name: ''
        }
    }

    // getData = async () => {
    //     try {
    //         let response = await Client.getEntries({
    //             'content_type': "blogs",
    //             'order': 'sys.createdAt'
    //         }).then((response) => {
    //         this.setState({blogpage: response.items})
    //     })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // componentDidMount() {
    //     this.getData()
    // }

    componentDidMount() {
        Client.getEntries({
            'content_type': 'blogs',
            'order': 'sys.createdAt'

        }).then((entries) => {
            this.setState({ blogpage: entries.items })
            //console.log({entries});

        })
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })

    }

    render() {

        const blogpage = this.state.blogpage.filter((items) => {
            return items.fields.blogTitle.toString().toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1 })

        return (
            
            <div>
                <section className="pt-4">
                    <div className="container">
                        <div className="text-center">
                            <h2> Blogs </h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta in ipsum non facilisis.</p>
                        </div>

                        <div className="row">
                            <div className="col"></div>
                            <div className="col">
                                <form>
                                    <label htmlFor="search">Search :  </label>
                                    <input type="text" id="search" name="filter" value={this.state.filter} onChange={this.handleChange}/>
                                </form>
                            </div>
                            <div className="col"></div>
                        </div>

                        {this.state.blogpage.length === 0 ?
                            <div align="center"><img src={BlackLoading} alt="Loading..." /></div> :
                            <div className="row">
                                {blogpage.map((items, index) => {
                                    return (
                                        <div key={index} className="col-md-6 blog-content">
                                            <Link to={`../Blogs/${items.fields.slug}`}>
                                                
                                                <img src={items.fields.blogThumbnail.fields.file.url} className="img-blog img-fluid" alt="" /></Link>

                                            <h3><Link to={`../Blogs/${items.fields.slug}`}>{items.fields.blogTitle}</Link></h3>

                                            <p className="truncate">{items.fields.blogDescription}</p>
                                    <button className="btn btn-primary"><Link to={`../Blogs/${items.fields.slug}`}>Read more...</Link></button>
                                            
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

export default Blogs
