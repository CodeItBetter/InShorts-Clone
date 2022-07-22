import React from 'react';
import Container from '@mui/material/Container';
import './content.css';
import NewsCard from "../NewsCard";

const Content = ({articles, loadMore, setLoadMore, totalResults}) => {
  return (
    <Container maxWidth="md">
        <div className="download">
            <p>For the best experience use<span> inshorts </span>app on your smartphone</p>
            <div className="download-img">
              <img src="https://assets.inshorts.com/website_assets/images/appstore.png" 
              alt="app-store" height="40px" style={{cursor: 'pointer'}} />
              <img src="https://assets.inshorts.com/website_assets/images/playstore.png" 
              alt="google-playstore" height="40px" style={{cursor: 'pointer'}} />
            </div>
        </div>
        <NewsCard articles={articles} loadMore={loadMore} 
        setLoadMore={setLoadMore} totalResults={totalResults} />
    </Container>
  )
}

export default Content;