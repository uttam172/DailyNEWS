import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "auto", border: "none" }}>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{marginLeft:'-10%', zIndex:'1'}}>{source}</span>

                    <img src={!imageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/15999/production/_132937488_7f178422942a84ceaf60990e6918a02af0e77eae0_0_3262_47131384x2000.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
