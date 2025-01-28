import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div id="home">
      <header className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="title">
            Sip the <span className="highlight">Extraordinary</span>
          </h1>
          <p className="home-subtitle">Unveil the magic of Coffee!</p>
          <button className="discover-btn" onClick={() => navigate('/about')}>
            Discover More
          </button>
        </div>
      </header>

      <section className="info-section">
        <div className="info-card">
          <h2>Freshly Brewed</h2>
          <p>Our coffee is brewed to perfection with the finest beans sourced worldwide.</p>
        </div>
        <div className="info-card">
          <h2>Artisan Roasts</h2>
          <p>Explore our range of artisan roasts, crafted to bring out unique flavors.</p>
        </div>
        <div className="info-card">
          <h2>Delivered to You</h2>
          <p>Enjoy fresh coffee delivered to your doorstep, any time, anywhere.</p>
        </div>
      </section>



    </div>
  );
}

export default Home;


