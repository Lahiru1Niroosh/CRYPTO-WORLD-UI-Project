import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newsbord from './components/Newsbord';
import NewsDetail from './components/NewsDetail';
import AboutUs from './components/About'; 
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Newsbord />} />
          <Route path="/news/:title" element={<NewsDetail />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
