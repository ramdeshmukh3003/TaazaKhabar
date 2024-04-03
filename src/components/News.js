import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {

    static defaultProps ={
        country : 'in',
        pageSize :9,
        category: 'general'
    }
    
    static propTypes={
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
       
    }

   capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    constructor(props){
        super(props);
        this.state={
        articles : [],
        loading : false,
        page:1,
        
        }
        document.title= `${this.capitalizeFirstLetter(this.props.category)}- Taaja-Khabar`
    }
     

     async updateNews(){
          
       const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e672119a39f4dc1bca9e5c54c426864&page=${this.state.page}&pageSize=${this.props.pageSize}`
         this.setState({loading:true});
        let data = await fetch(url);
        let parsedData= await data.json();
        this.setState({
            articles: parsedData.articles ,
            totalarticles: parsedData.totalResults, 
            loading: false
        })
        

     }


    
    async componentDidMount(){
        this.updateNews();
        
      }

      handleNextClick=async()=>{

       await this.setState({page:this.state.page+1})
      this.updateNews();


      }

      handlePreviousClick=async()=>{

       
        await this.setState({page:this.state.page-1})
        this.updateNews();

      }
  render() {
    return (
        
      <div className='container my-5'>
        <div className='text-center'><h2>Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</h2></div>
        <div className='container text-center'>{this.state.loading &&<Spinner/>}</div>
        
        <div className='row mx-3 my-4' >
            {!this.state.loading && this.state.articles.map((element)=>{
                  return <div className='col-md-4 my-3' key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author?"Unknown":element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
            })}
      
      </div>
      <div className='container'>
     <div className="d-flex justify-content-between"> 
     <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
     <button type="button" disabled={this.state.page>(this.state.totalarticles/this.props.pageSize)}className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
     </div>
      </div>
  </div>
    )
  }  
}

export default News