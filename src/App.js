import NavigationInshorts from './components/NavigationInshorts';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Content from './components/content/content';
import apiKey  from './data/config';
import Footer from './components/footer/footer';

function App() {
  const [category, setCategory] = useState('general');
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState('');
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () =>{
    try{
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&pageSize=${loadMore}`);
      setArticles(news.data.articles);
      console.log(news);
      setTotalResults(news.data.totalResults);
    }catch(error){
      console.log(error.message);
    }
  }

  useEffect(() =>{
    // eslint-disable-next-line
    newsApi();
  },[category, totalResults, loadMore]);

  return (
    <div>
        <NavigationInshorts setCategory={setCategory} />
        <Content articles={articles} loadMore={loadMore} 
        setLoadMore={setLoadMore} totalResults={totalResults} />
        <Footer />
    </div>
  );
}

export default App;
