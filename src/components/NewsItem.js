import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { description, title, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="card">
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">
                    {source}
                </span>
                <img src={imageUrl} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                </div>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        )
    }
}

export default NewsItem
