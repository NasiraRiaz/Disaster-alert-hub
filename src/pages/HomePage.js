import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaMapMarkedAlt, FaUsers, FaQuoteLeft } from 'react-icons/fa';
import './HomePage.css';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const features = [
  { icon: <FaBell />, title: 'Real-Time Alerts', description: 'Receive instant notifications for floods, earthquakes, and other emergencies directly on your device.' },
  { icon: <FaMapMarkedAlt />, title: 'Interactive Safety Map', description: 'View a live map of your area with designated safe zones, hospitals, shelters, and active danger zones.' },
  { icon: <FaUsers />, title: 'Community Reporting', description: 'Empower your community by reporting emergencies with your location to help keep others safe and informed.' }
];

const testimonials = [
  { quote: "AlertHub is one of the fastest ways we can reach people. Now, we can deliver important safety information to our community in various ways.", author: "Fatima Khan", title: "Director of Emergency Management, Islamabad" },
  { quote: "This emergency notification system allows us to strengthen our communications with residents, ensuring they receive direct information in the event of an emergency.", author: "Ali Ahmed", title: "Fire Chief, City of Rawalpindi" },
  { quote: "Some parts of our district are very rural. The AlertHub system is a tool that they can have in their hands to alert them about things like flooding and road closures.", author: "Sana Tariq", title: "Manager of Communications, Northern Areas District" }
];

const caseStudy = {
  situation: "A district in Punjab was planning for seasonal flash floods, but communication with remote villages was slow, often leading to confusion and delayed evacuations.",
  solution: "AlertHub was implemented, providing a central platform for authorities to issue instant, geo-targeted alerts. The interactive map showed villagers the nearest safe shelters.",
  impact: "The district used AlertHub to send clear evacuation orders, reducing panic and ensuring residents moved to safety efficiently. Community reports also helped map blocked roads in real-time."
};

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await addDoc(collection(db, 'subscribers'), {
          email: email,
          subscribedAt: serverTimestamp()
        });
        setSubscribeSuccess(true);
        setEmail('');
        setTimeout(() => {
          setSubscribeSuccess(false);
        }, 3000);
      } catch (error) {
        console.error("Error adding subscriber: ", error);
        alert('Sorry, there was an error. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="top-line">For Communities & Emergency Responders</div>
          <h1 className="heading">
            Receive real-time disaster alerts and safety information
          </h1>
          <p className="subtitle">
            AlertHub provides instant notifications, interactive safety maps, and community-powered reporting to keep you safe and informed during any emergency.
          </p>
          <Link to="/login" className="hero-button">
            Get Started
          </Link>
        </div>
      </div>

      <div className="features-section">
        <h2 className="features-heading">How AlertHub Keeps You Safe</h2>
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-section">
        <div className="testimonials-container">
          <div className="top-line">Testimonials</div>
          <h2 className="testimonials-heading">What our partners say about AlertHub</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-quote-icon"><FaQuoteLeft /></div>
                <p className="testimonial-text">"{testimonial.quote}"</p>
                <div className="testimonial-author-info">
                  <p className="testimonial-author">{testimonial.author}</p>
                  <p className="testimonial-title">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="case-study-section">
        <div className="case-study-container">
          <div className="top-line">Case Studies</div>
          <h2 className="case-study-heading">How our notification system solves real problems</h2>
          <p className="case-study-subheading">Learn how communities use AlertHub to overcome challenges during critical events.</p>
          <div className="case-study-card">
            <div className="case-study-column">
              <h4>Situation</h4>
              <p>{caseStudy.situation}</p>
            </div>
            <div className="case-study-column">
              <h4>Solution</h4>
              <p>{caseStudy.solution}</p>
            </div>
            <div className="case-study-column">
              <h4>Impact</h4>
              <p>{caseStudy.impact}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe-section">
        <div className="subscribe-container">
          <div className="subscribe-text">
            <h3>Subscribe to our Newsletter</h3>
            <p>Keep up to date on new insights, thoughts and opinions for emergency alerting and mass communications.</p>
          </div>
          <div className="subscribe-form">
            <form onSubmit={handleSubscribe}>
              <label htmlFor="email-subscribe">Email*</label>
              <input type="email" id="email-subscribe" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit" className="subscribe-button">Subscribe</button>
            </form>
            {subscribeSuccess && (
              <div className="subscribe-success-message">Thank you for subscribing!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;