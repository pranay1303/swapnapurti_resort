import React from 'react';
import '../styles/Rooms.css';
import heroimg from '../assets/heroimg.jpeg';

const Rooms = () => {
  const rooms = [
    {
      title: 'Deluxe Suite',
      description: 'Spacious suite with a stunning view and a king-sized bed.',
      image: heroimg,
      price: 3999,
      amenities: ['AC', 'Free WiFi', 'Room Service', 'Sea View'],
      rating: 4.8,
    },
    {
      title: 'Standard Room',
      description: 'Cozy and budget-friendly with all essential facilities.',
      image: heroimg,
      price: 2499,
      amenities: ['Fan', 'WiFi', '24x7 Water'],
      rating: 4.3,
    },
    {
      title: 'Luxury Villa',
      description: 'Private villa with pool and premium services.',
      image: heroimg,
      price: 7999,
      amenities: ['Private Pool', 'AC', 'WiFi', 'Garden View'],
      rating: 5.0,
    },
    {
      title: 'Family Room',
      description: 'Ideal for families with ample space and comfort.',
      image: heroimg,
      price: 5499,
      amenities: ['Double Bed', 'TV', 'Mini Fridge', 'Hot Water'],
      rating: 4.5,
    },
  ];

  return (
    <section className="rooms-section">
      <div className="rooms-container">
        <div className="rooms-heading">
          <h2>Our Rooms</h2>
        </div>

        <div className="room-grid">
          {rooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.title} className="room-image" />
              <div className="room-details">
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <div className="room-rating">⭐ {room.rating}/5</div>
                <ul className="room-amenities">
                  {room.amenities.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                <p className="room-price">Price: ₹{room.price} / night</p>
                <div className="room-actions">
                  {/* ✅ Call on click */}
                  <a href="tel:+918605957962" className="room-book-btn">Book Now</a>

                  {/* ✅ Navigate to contact section/page */}
                  <a href="/contact" className="room-enquiry-btn">Make Enquiry</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
