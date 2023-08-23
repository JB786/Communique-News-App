import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: "in",
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 3
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=167488a9927846cb99614892a694c93d&page=${this.state.page}&pageSize=${this.state.pageSize}`
        this.setState({ loading: true })
        let fetchData = await fetch(url);
        let parsedData = await fetchData.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=167488a9927846cb99614892a694c93d&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`
        this.setState({ loading: true })
        let fetchData = await fetch(url);
        let parsedData = await fetchData.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        console.log("next")
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=167488a9927846cb99614892a694c93d&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`
            this.setState({ loading: true })
            let fetchData = await fetch(url);
            let parsedData = await fetchData.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">Communiqué - Trending Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row my-5">
                    {this.state.articles ? this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.ndtv.com/common/images/ogndtv.png"} newsUrl={element.url} />
                        </div>
                    }) : <Spinner/>}
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark"> &larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
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
