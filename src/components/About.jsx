import '../components/css/AboutUs.css';
import newsImage from '../assets/news.jpg';
import news1Image from '../assets/bbc.jpg';
import news2Image from '../assets/cnn.jpg';
import news3Image from '../assets/nbc.png';
import news4Image from '../assets/news4.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h1 className="text-center">About Us</h1><br/><br/>

        <section className="mission-vision">
          <h2>Our Mission</h2><br/>

          <p>
            Our mission is to provide reliable, up-to-date, and relevant news from around the world. 
            We strive to offer a comprehensive view of current events to keep you informed and engaged.
          </p><br/>


          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone has access to accurate and unbiased information. 
            Our goal is to be a trusted source of news, fostering informed discussions and empowering our audience.
          </p>
        </section><br/>


        <section className="team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={news4Image} alt="Lahiru Niroshan" />
              <h3>Lahiru Niroshan</h3>
              <p>Founder & CEO</p>
              <p>Lahiru has over 15 years of experience in journalism and is passionate about delivering quality news.</p>
            </div>
            <div className="team-member">
              <img src={newsImage} alt="Chamodi Triwarthana" />
              <h3>Chamodi Triwarthana</h3>
              <p>Editor-in-Chief</p>
              <p>Chamodi is an expert in news curation and ensures that our content meets the highest standards of journalism.</p>
            </div>
          </div>
        </section><br/>


        <section className="carousel-section">
          <h2>Sources</h2>
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1500">
                <img src={news1Image} className="d-block w-100" alt="BBC News" />
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src={news3Image} className="d-block w-100" alt="NBC News" />
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src={news2Image} className="d-block w-100" alt="CNN News" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to reach out to us:</p>
          <ul>
            <li>Email: <a href="mailto:www.lahiruniroosh@gmail.com">www.lahiruniroosh@gmail.com</a></li>
            <li>Phone: +94 761545631</li>
            <li>Address: 47/13 Kdalana, Moratuwa, Sri Lanka</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
