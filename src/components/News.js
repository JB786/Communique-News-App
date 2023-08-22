import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 10
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=167488a9927846cb99614892a694c93d&page=1&pageSize=10"
        let fetchData = await fetch(url);
        let parsedData = await fetchData.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePrevClick = async () => {
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=167488a9927846cb99614892a694c93d&page=${this.state.page - 1}&pageSize=10`
        let fetchData = await fetch(url);
        let parsedData = await fetchData.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        console.log("next")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {

        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=167488a9927846cb99614892a694c93d&page=${this.state.page + 1}&pageSize=10`
            let fetchData = await fetch(url);
            let parsedData = await fetchData.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h1>Communiqué - Top Headlines</h1>
                <div className="row my-4">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.ndtv.com/common/images/ogndtv.png"} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark"> &larr; Previous</button>
                    <button type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News


// componentDidMount() - This method gets invoked once the component has been rendered.
// As a result, the constructor of our application gets executed first, followed by the ‘render method,’ and at last, the ComponentDidMount() method is invoked.
// Note: ComponentDidMount() is a lifecycle method. 


// In above code Math.ceil return the total no. of pages.
// Math.floor returns the smallest value in roundoff decimal no. for eg. in 3.5 it will return 3 whereas Math.ceil returns the biggest value in roundoff decimal no. means it will return 4 if no. is 3.5
