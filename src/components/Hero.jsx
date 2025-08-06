<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = ({
  title,
  tagline,
  buttonText,
  buttonLink,
  secondaryText,
  secondaryLink,
  image
}) => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="hero">
      <div
        className="hero__background"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* ✅ Added dark overlay */}
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <div className="hero__textbox">
          <h1>{title}</h1>
          <p className="hero__highlight">{tagline}</p>
          <div className="hero__buttons">
            <button className="hero__btn primary" onClick={() => navigate(buttonLink)}>
              {buttonText}
            </button>
            <button className="hero__btn secondary" onClick={() => navigate(secondaryLink)}>
              {secondaryText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = ({
  title,
  tagline,
  buttonText,
  buttonLink,
  secondaryText,
  secondaryLink,
  image
}) => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="hero">
      <div
        className="hero__background"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* ✅ Added dark overlay */}
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <div className="hero__textbox">
          <h1>{title}</h1>
          <p className="hero__highlight">{tagline}</p>
          <div className="hero__buttons">
            <button className="hero__btn primary" onClick={() => navigate(buttonLink)}>
              {buttonText}
            </button>
            <button className="hero__btn secondary" onClick={() => navigate(secondaryLink)}>
              {secondaryText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
>>>>>>> 7ada6c64a796a406fb05c3067c46d134a4b6f5b0
