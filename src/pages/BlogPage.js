import React, { useState } from 'react'; 
import './BlogPage.css';
import { FaSearch } from 'react-icons/fa';

const allBlogPosts = [
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKWJtDHQf1jEYOpkLJVv2vIohl0Wj_dxTdg&s', category: 'Preparedness', date: 'August 20, 2025', title: 'Flood Preparedness 101: Essential Tips for Staying Safe', excerpt: 'Flooding is one of the most common natural disasters. Knowing how to prepare can make all the difference...' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyaE9bwHF09LYePwpivY094pqOMMC8MWOlcA&s', category: 'Wildfire', date: 'August 15, 2025', title: 'From Chaos to Clarity: How Real-Time Wildfire Alerts Work', excerpt: 'Dive into the technology behind instant alerts and how geo-targeting helps deliver critical information to those in harm\'s way...' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh80wzU50DgpjJGqgP-YFjXg7ouOzk1F3OaWsUg6MDv_tyKNW19Cd8cY1qjtqScWp8RT8&usqp=CAU', category: 'Community', date: 'August 10, 2025', title: 'Life-Saving Alerts Often Start With You: The Power of Community Reporting', excerpt: 'Learn why crowdsourced information is a game-changer in the first crucial hours of an emergency...' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvrW7sTMtG4o4q5C914CQDuajnqWvm5idiw&s', category: 'Safety Guides', date: 'August 05, 2025', title: 'Earthquake Drills: Turning Plans Into Action', excerpt: 'An evacuation plan is only as good as its execution. Here’s how to conduct an effective earthquake drill for your family or workplace...' },
  { image: 'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg', category: 'Technology', date: 'July 28, 2025', title: 'Understanding Severe Storm Warnings and Watches', excerpt: 'Do you know the difference between a warning and a watch? This guide breaks down the terminology so you can take appropriate action.' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhi_XsBDylo7kWMYleX-TzpaN1Vdr5xgdSQ&s',  category: 'Evacuation', date: 'July 22, 2025', title: 'The Secret to Effective Mass Evacuation Notifications', excerpt: 'Discover the key elements of a successful evacuation alert, from clarity and timing to multi-channel delivery...' }
];

const categories = ['All', 'Preparedness', 'Technology', 'Wildfire', 'Community', 'Evacuation', 'Safety Guides'];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredPosts(allBlogPosts);
    } else {
      const filtered = allBlogPosts.filter(post => post.category === category);
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="blog-page">
      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">Blog</h1>
          <div className="powered-by">
            POWERED BY <span className="powered-by-logo">ALERTHUB</span>
          </div>
        </div>

        <div className="filter-and-search">
          <div className="category-filters">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => handleFilterClick(cat)}
                className={activeCategory === cat ? 'active' : ''}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button><FaSearch /></button>
          </div>
        </div>

        <div className="blog-grid">
          {}
          {filteredPosts.map((post, index) => (
            <div className="blog-post-card" key={index}>
              <a href="#/" className="blog-post-image-link">
                <img src={post.image} alt={post.title} className="blog-post-image" />
              </a>
              <div className="blog-post-content">
                <div className="blog-post-meta">
                  <span className="blog-post-category">{post.category}</span>
                </div>
                <h2 className="blog-post-title">
                  <a href="#/" className="blog-title-link">{post.title}</a>
                </h2>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-footer">
                    <span className="blog-post-date">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;