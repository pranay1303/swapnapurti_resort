<<<<<<< HEAD
import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/About.css';
import heroImage from '../assets/heroimg.jpeg'; // fallback/default image

const About = ({
  title = "About Swanapurti",
  subtitle = "Discover the harmony of nature and comfort at our serene retreat.",
  cards = [
    {
      title: "Natural Serenity",
      desc: "Experience peace and comfort surrounded by lush greenery and calming landscapes at Swanapurti.",
      img: heroImage,
      phone: "tel:+918605957962",
      whatsapp: "https://wa.me/918605957962",
    },
    {
      title: "Modern Amenities",
      desc: "Enjoy a perfect blend of tradition and luxury — with Wi-Fi, AC rooms, private cottages, and more.",
      img: heroImage,
      phone: "tel:+918605957962",
      whatsapp: "https://wa.me/918605957962",
    },
    {
      title: "Perfect Getaway",
      desc: "Located away from city chaos — ideal for families, couples, and solo travelers looking to unwind.",
      img: heroImage,
      phone: "tel:+918605957962",
      whatsapp: "https://wa.me/918605957962",
    }
  ]
}) => {
  return (
    <section className="about">
      <div className="about__header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="about__cards">
        {cards.map((card, index) => (
          <div className="about__card" key={index}>
            <img src={card.img} alt={card.title} />
            <div className="about__content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="about__actions">
                <a href={card.phone} className="btn call">
                  <FiPhone style={{ marginRight: '6px' }} />
                  Call Now..!
                </a>
                <a
                  href={card.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn whatsapp"
                >
                  <FaWhatsapp style={{ marginRight: '6px' }} />
                  WhatsApp..!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
=======
import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/About.css';
import heroImage from '../assets/heroimg.jpeg'; // fallback/default image

const About = ({
  title = "About Swanapurti",
  subtitle = "Discover the harmony of nature and comfort at our serene retreat.",
  cards = [
    {
      title: "Natural Serenity",
      desc: "Experience peace and comfort surrounded by lush greenery and calming landscapes at Swanapurti.",
      img: heroImage,
      phone: "tel:+918605957962",
      whatsapp: "https://wa.me/918605957962",
    },
    {
      title: "Modern Amenities",
      desc: "Enjoy a perfect blend of tradition and luxury — with Wi-Fi, AC rooms, private cottages, and more.",
      img: heroImage,
      phone: "tel:+918605957962",
      whatsapp: "https://wa.me/918605957962",
    },
    {
      title: "Perfect Getaway",
      desc: "Located away from city chaos — ideal for families, couples, and solo travelers looking to unwind.",
      img: heroImage,
      phone: "tel:+918605957962",
      whatsapp: "https://wa.me/918605957962",
    }
  ]
}) => {
  return (
    <section className="about">
      <div className="about__header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="about__cards">
        {cards.map((card, index) => (
          <div className="about__card" key={index}>
            <img src={card.img} alt={card.title} />
            <div className="about__content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="about__actions">
                <a href={card.phone} className="btn call">
                  <FiPhone style={{ marginRight: '6px' }} />
                  Call Now..!
                </a>
                <a
                  href={card.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn whatsapp"
                >
                  <FaWhatsapp style={{ marginRight: '6px' }} />
                  WhatsApp..!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
>>>>>>> 7ada6c64a796a406fb05c3067c46d134a4b6f5b0
