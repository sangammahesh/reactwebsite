import React, { Component } from 'react'
import Client from '../Pages/Client'
import BlackLoading from '../images/black-loader.gif'

export class SlideShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
         homebanner:[]
    }
}

componentDidMount(){
    Client.getEntries({
        'content_type': 'homeBanner'

    }).then((entries)=>{
        this.setState({homebanner: entries.items})
    })
}

setClass = (index) =>{
  if(index === 0){
    return "carousel-item active"
  } else {
    return "carousel-item"
  }
}
  render() {
    return (
      <>
      {this.state.homebanner.length === 0 ?
            <div align="center"><img src={BlackLoading} alt="Loading..." /></div> :
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            {this.state.homebanner.map((item, index) => {
              return(
          <div key={index} className={this.setClass(index)}>
            <img src={item.fields.homeBannerImage.fields.file.url} class="d-block w-100" alt="..." />
          </div>
          )
          })}
        </div>
  
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      }
    </>
    )
  }
}

export default SlideShow
