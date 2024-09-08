/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import DefaultNews from '../assets/DefultNews.jpg'; 

const NewsItem = ({ title, source, publishedAt, description, image, author, content }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${title}`, {
      state: { title, source, publishedAt, description, image, content },
    });
  };

  // Format the date to "yyyy/mm/dd"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0'); 
    return `${year}/${month}/${day}`;
  };

  return (
    <div className="card news-card bg-dark text-light mb-4 mx-3 my-3" onClick={handleClick}>
      <img
        src={image || DefaultNews} 
        className="card-img-top"
        alt={title}
      />
      <div className="card-body news-card-body">
        <h5 className="card-title news-card-title">{title.slice(0, 70)}</h5>
        <p className="card-text news-card-text">
          <span className="font-weight-bold">{author || "Unknown"}</span> - <span>{source || "Unknown"}</span>
        </p>
        <p className="card-text news-card-text">
          <small>{formatDate(publishedAt)}</small>
        </p>
        <p className="card-text news-card-text">
          {description ? description.slice(0, 60) : "No description available ..."}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
