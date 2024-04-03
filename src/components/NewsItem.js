import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    
    return (<>

      <div><div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:1}}>{source}</span>
  <img src={!imageUrl?"https://media.wfaa.com/assets/WFAA/images/efed0173-8e28-4706-aa4b-1a4ef9e51651/efed0173-8e28-4706-aa4b-1a4ef9e51651_1140x641.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{!description?"Click on read more":description}....</p>
      <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target ="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div></div>
    </>)
  }
}

export default NewsItem