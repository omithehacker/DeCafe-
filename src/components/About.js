import React from 'react';
import './About.css'

function About() {
  return (
    <div id="about" className='about-container'>
      <div className='title'>
      <h1>About Us</h1>
      </div>
      <div className='about-section'>
      <div className="about-intro">
        <h3>Our Story</h3>
        <p>
          Welcome to <strong>De Cafe&#769;</strong>, where passion for coffee meets the art of community.
          Founded with a love for the perfect cup, we set out to create a place where coffee lovers
          can savor the rich, authentic flavors of premium coffee.
         </p>
         <p>
          At <strong>De Cafe&#769;</strong>, every brew tells a story. We believe coffee is more than a beverage.
        </p>
      </div>

      <div className="about-mission">
        <h3>Our Mission</h3>
        <p>
          To deliver exceptional coffee while building a warm, welcoming space for friends,
          families, and individuals to connect, recharge, and enjoy.
        </p>  
    <p>
    We strive to provide a perfect balance of quality, comfort, and care in everything we do. 
    We’re dedicated to creating an experience that energizes your day 
    and brings people together, one sip at a time.
  </p>
      </div>

      <div className="about-offer">
        <h3>What We Offer</h3>
        <ul>
           <li>
            <strong className='offer-title'>Specialty Coffee:</strong> 
            <p>Handpicked beans sourced responsibly and brewed to perfection.</p>
           </li>
           <li>
            <strong className='offer-title'>Locally Sourced Ingredients:</strong> 
            <p>Fresh and sustainable ingredients in all our offerings.</p>
           </li>
           <li>
            <strong className='offer-title'>Community Vibes:</strong> 
            <p>A cozy environment designed for working, relaxing, or connecting.</p>
          </li>
        </ul>
      </div>

      <div className="about-visit">
        <h3>Visit Us</h3>
        <p>
          Whether you're here for a quick espresso, a long chat with friends, or to discover your
          next favorite brew, we're excited to welcome you to <strong>De Cafe</strong>.
        </p>
        <p>
          📍 <strong>Address:</strong> 123 Coffee Street, Beanville <br />
          ⏰ <strong>Hours:</strong> Mon-Sat: 8 AM - 8 PM | Sun: 10 AM - 6 PM
        </p>
      </div>
     </div>
    </div>
  );
}

export default About;

