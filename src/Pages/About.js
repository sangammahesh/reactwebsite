import React, { Component } from 'react'
import Client from './Client'
import BlackLoading from '../images/black-loader.gif'
import marked from 'marked' //to make font bold and headings

export class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
             aboutpage:[]
        }
    }

    componentDidMount(){
        Client.getEntries({
            'content_type': 'about'

        }).then((entries)=>{
            this.setState({aboutpage: entries.items[0]})
        })
    }

    //to make font bold and headings
    getParsedMarkdown(aboutDescription){
        return{
            __html:marked(aboutDescription, {sanitize:true})
        }
    }
    //to make font bold and headings - end
    
    render() {
        return (
            <div className="container">
                <h2 className="text-center">About Us</h2>
                {this.state.aboutpage.length === 0 ? 
                <div><img src={BlackLoading} alt="Loading..." /></div> : 
                <div dangerouslySetInnerHTML = {this.getParsedMarkdown(
                    this.state.aboutpage.fields.aboutDescription
                )}></div>
                //<p>{this.state.aboutpage.fields.aboutDescription} //simple content without bold or headings..</p>
                }            
            </div>
        )
    }
}

export default About
