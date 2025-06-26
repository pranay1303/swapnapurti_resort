import React, { useState } from 'react';
import '../styles/Gallery.css';
import heroimg from '../assets/heroimg.jpeg';
import heroimg1 from '../assets/heroimg1.png';

// Later you will replace these arrays with real images (5 unique per category)
const galleryImages = {
  Resort: [heroimg, heroimg1, heroimg, heroimg1, heroimg],
  Pool: [heroimg1, heroimg, heroimg1, heroimg, heroimg1],
  Games: [heroimg, heroimg, heroimg1, heroimg1, heroimg],
  Amenities: [heroimg1, heroimg1, heroimg, heroimg, heroimg1],
  Food: [heroimg, heroimg1, heroimg, heroimg1, heroimg],
};

const categories = ['All', ...Object.keys(galleryImages)];

// Shuffle utility
const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamically compute images
  const imagesToDisplay =
    activeCategory === 'All'
      ? shuffleArray(Object.values(galleryImages).flat())
      : galleryImages[activeCategory] || [];

  return (
    <section className="gallery-section">
      {/* Hero Section */}
      <div
        className="gallery-hero"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="gallery-overlay">
          <h1 className="gallery-title">Swapnapurti</h1>
          <p className="gallery-subtitle">Discover the beauty of our resort</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="gallery-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`gallery-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="gallery-grid">
        {imagesToDisplay.map((img, idx) => (
          <div className="gallery-card" key={idx}>
            <img src={img} alt={`${activeCategory}-${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
