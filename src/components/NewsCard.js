import './NewsCard.css';
import React from 'react';

const NewsCard = ({articles, loadMore, setLoadMore, totalResults}) =>{
    return(
        <div>
        {articles.map(({ author, description, source, title, urlToImage, publishedAt, url }) =>{
            const date = new Date(publishedAt);
            const dateArray = date.toString().split(' ');
            const time = dateArray[4].substring(0,2);
            const seconds = dateArray[4].substring(3,5);

            return(
                <div className="newscard-container" key={title}>
                    <div className="news-img">
                        <img src={urlToImage ? urlToImage : 
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' } 
                        alt={title} style={{cursor: "pointer"}} />
                    </div>
                    <div className="news-description">
                        <h2 className="title">{title}</h2>
                        <p className="blog-link"><a href={url} target="_blank">short</a> 
                        <span className="author"> by {author ? author : 'UnKnown'}</span> / 
                        <span>{time >= 12 ? `${(time == 12) ?time: (time-12)}:${seconds}pm`
                            : `${time}:${seconds}am`}</span></p>
                        <p className="description">{description}</p>
                    </div>
                </div>
            )
        })         
    }
    {(loadMore <= totalResults) && <button className="loadmore" 
    onClick= {() => {setLoadMore(loadMore + 20)}}>Loadmore</button> }
    </div>
    )
    
}

export default NewsCard;