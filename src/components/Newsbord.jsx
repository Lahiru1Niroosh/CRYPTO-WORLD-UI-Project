/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import '../components/css/Newsbord.css';
const Newsbord = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1); // Page number for pagination
  const [hasMore, setHasMore] = useState(true); // To check if more articles are available
  const [loading, setLoading] = useState(true); // Loading state
  const [totalResults, setTotalResults] = useState(0); // Total results from API

  const fetchNews = async (page) => {
    const pageSize = 10; // Number of articles per page
    const apiKey = "417eac836abe48c7b4f73e9460d6c544"; 
    const url = `https://newsapi.org/v2/everything?q=bitcoin&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

    try {
      setLoading(true); 
      await new Promise(resolve => setTimeout(resolve, 1000)); // Add a delay of 1 second between requests

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      console.log("API Response:", data);

      const sortedArticles = data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      setArticles((prevArticles) => [...prevArticles, ...sortedArticles]);
      setTotalResults(data.totalResults);

      setHasMore(articles.length + sortedArticles.length < data.totalResults);
    } catch (error) {
      console.error("Fetching news failed:", error);
      setHasMore(false); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  return (
    <div className="newsbord-container">
      <h2 className="text-center latest-heading">
        <br />
        Latest <span className="badge bg-danger latest-badge">News</span>
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={<div className="text-center"><div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status"><span className="visually-hidden">Loading...</span></div></div>}
        endMessage={<p className="text-center">No more articles</p>}
      >
        <div className="news-card-container">
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              content={news.content}
              source={news.source.name}
              author={news.author || "Unknown"}
              publishedAt={new Date(news.publishedAt).toLocaleDateString('en-CA')}
              description={news.description}
              image={news.urlToImage || "default-news.png"}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Newsbord;
