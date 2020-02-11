import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Client from './Client'
import marked from 'marked' //to make font bold and headings
import BlackLoading from '../images/black-loader.gif'

class SingleArticle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             article:[]
        }
    }

    componentDidMount(){
        const slug = this.props.match.params.slug
        if(slug){
            Client.getEntries({
                'content_type': 'blogs', 
                'fields.slug': slug
    
            }).then((entries)=>{
                this.setState({article: entries.items[0]})
            })

        }
        
    }

    //to make font bold and headings
    getParsedMarkdown(blogDescription){
        return{
            __html:marked(blogDescription, {sanitize:true})
        }
    }
    //to make font bold and headings - end
    
    redirectToTarget=()=>{
        this.props.history.push('/Blogs')
    }
    render() {
        return (
            <div className="container">
                {this.state.article.length === 0 ?
                    <div align="center"><img src={BlackLoading} alt="Loading..." /></div> :
                <div className="row">
                    <div className="col-md-12">
                    
                        <h2>{this.state.article.fields.blogTitle}</h2>
                        <img src={this.state.article.fields.blogThumbnail.fields.file.url} className="img-blog img-fluid" alt="{blogTitle}" style={{float:'left', margin:'0 20px 0 0'}}/>
                        <p style={{textAlign:'justify'}} dangerouslySetInnerHTML = 
                        {this.getParsedMarkdown(this.state.article.fields.blogDescription)}></p>
                        <p><button className="btn btn-primary"><Link to="#" onClick={this.redirectToTarget}>Back to Blogs</Link></button></p>
                        <p>..</p>
                        
                    </div>
                    </div>
                }
            </div>
        )
    }
}

export default SingleArticle
