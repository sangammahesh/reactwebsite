import React, { Component } from 'react'
import Client from './Client';
import BlackLoading from '../images/black-loader.gif'
import { Link } from 'react-router-dom';

class Blogs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogpage: [],
            search: '',
            name:''
        }
    }

    componentDidMount() {
        Client.getEntries({
            'content_type': 'blogs',
            'order': 'sys.createdAt'

        }).then((entries) => {
            this.setState({ blogpage: entries.items })
            //console.log({entries});
            
        })
    }

    seachandle = (e) => {
        this.setState({ search: e.target.value })
    }

    render() {

        const { search } = this.state;
        
        // const filteredBlogs = this.state.blogpage.filter(items => {
        //     return items.entries.toLowerCase().indexOf(search.toLowerCase()) !== -1
        // })

        const filteredBlogs = this.state.blogpage.filter(item =>
            item.fields.toLowerCase().includes(search.toLowerCase()))

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
                                <input label="Search Article" icon="search" onChange={this.seachandle} />
                            </div>
                            <div className="col"></div>
                        </div>

                        {this.state.blogpage.length === 0 ?
                            <div align="center"><img src={BlackLoading} alt="Loading..." /></div> :
                            <div className="row">
                                {filteredBlogs.map((item, index) => {
                                    return (
                                        <div key={index} className="col-md-6 blog-content">
                                            <Link to={`../Blogs/${item.fields.slug}`}>
                                                <img src={item.fields.blogThumbnail.fields.file.url} className="img-blog img-fluid" alt="" /></Link>

                                            <h3><Link to={`../Blogs/${item.fields.slug}`}>{item.fields.blogTitle}</Link></h3>

                                            <p className="truncate">{item.fields.blogDescription}</p>
                                            <button className="btn btn-primary"><Link to={`../Blogs/${item.fields.slug}`}>Read more...</Link></button>
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
