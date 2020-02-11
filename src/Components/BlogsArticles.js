import React from 'react'
import BlackLoading from '../images/black-loader.gif'
import {Link} from 'react-router-dom';

const BlogsArticles = (props) => {
        return (
            <div>
                <section className="pt-4">
                    <div className="container">
                        <div className="text-center">
                            <h2> Blogs </h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta in ipsum non facilisis.</p>
                        </div>

                        {props.blogpage.length === 0 ?
                            <div align="center"><img src={BlackLoading} alt="Loading..." /></div> :
                        <div className="row">
                            {props.blogpage.map((item, index) => {
                                    return(
                            <div key={index} className="col-md-6 blog-content">
                                <Link to={`../Blogs/${props.item.fields.slug}`}>
                                    <img src={props.item.fields.blogThumbnail.fields.file.url} className="img-blog img-fluid" alt="" /></Link>
                                <h3><Link to={`../Blogs/${props.item.fields.slug}`}>{item.fields.blogTitle}</Link></h3>
                                <p className="truncate">{props.item.fields.blogDescription}</p>
                                <button className="btn btn-primary"><Link to={`../Blogs/${props.item.fields.slug}`}>Read more...</Link></button>
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
        )
}

export default BlogsArticles
