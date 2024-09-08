import { useLocation, useNavigate } from 'react-router-dom';
import '../components/css/Newsdetail.css';

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, source, publishedAt, image, content } = location.state || {}; 

  console.log('Location State:', location.state);

  // Redirect to home if title is not available
  if (!title) {
    return <div>No details available</div>;
  }

  return (
    <div className="news-detail-container">
      <div className="news-detail-card">
        <img src={image} className="news-detail-image" alt={title} />
        <div className="news-detail-body">
          <h2 className="news-detail-title">{title}</h2>
          <h5 className="news-detail-source">{source}</h5>
          <p className="news-detail-date">{publishedAt}</p>
          <p className="news-detail-content">
            {content ? content : "No content available"}
          </p>
          <div className="news-detail-button-container">
            <button onClick={() => navigate('/')} className="news-detail-button">Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
