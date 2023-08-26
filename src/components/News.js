import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    static defaultProps = {
        country: "in",
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 6,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} News - Communiqué`
    }

    async updateNews() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=167488a9927846cb99614892a694c93d&page=${this.state.page}&pageSize=${this.state.pageSize}`
        this.setState({ loading: true })
        let fetchData = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await fetchData.json()
        this.props.setProgress(70)
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=167488a9927846cb99614892a694c93d&page=${this.state.page}&pageSize=${this.state.pageSize}`
        let fetchData = await fetch(url);
        let parsedData = await fetchData.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    }

    render() {
        return (
            <>
                <h1 className="text-center">Trending {this.capitalizeFirstLetter(this.props.category)} Articles</h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row my-5">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.title}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.ndtv.com/common/images/ogndtv.png"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll>

            </>
        )
    }
}

export default News


// componentDidMount() - This method gets invoked once the component has been rendered.
// As a result, the constructor of our application gets executed first, followed by the ‘render method,’ and at last, the ComponentDidMount() method is invoked.
// Note: ComponentDidMount() is a lifecycle method.


// In above code Math.ceil return the total no. of pages.
// Math.floor returns the smallest value in roundoff decimal no. for eg. in 3.5 it will return 3 whereas Math.ceil returns the biggest value in roundoff decimal no. means it will return 4 if no. is 3.5


// react-infinite-scroll-component loads all the content as we scroll down.
