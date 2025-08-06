<<<<<<< HEAD
// Packages.jsx
import React from "react";
import "../styles/Packages.css";
import {
  FaCheckCircle,
  FaRupeeSign,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Packages = ({ title, packages }) => {
  return (
    <section className="package-section">
      <h2 className="package-heading">{title}</h2>
      <div className="package-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.image} alt={pkg.name} className="package-image" />
            <div className="package-details">
              <h3>{pkg.name}</h3>
              <p className="package-desc">{pkg.desc}</p>
              <div className="package-amenities-grid">
                {pkg.amenities.map((item, i) => (
                  <div key={i} className="amenity-item">
                    <FaCheckCircle className="amenity-icon" /> {item}
                  </div>
                ))}
              </div>

              <div className="package-price">
                <span className="original-price">₹{pkg.original}/person</span>
                <span className="discounted-price">
                  ₹{pkg.discounted}/person
                </span>
              </div>
              <div className="package-buttons">
                <a href={pkg.phone} className="btn book-btn">
                  Book Now
                </a>
                <a
                  href={`${pkg.whatsapp}?text=Hi! I want to enquire about the '${pkg.name}' package.`}
                  className="btn enquiry-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Make Enquiry
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
=======
// Packages.jsx
import React from "react";
import "../styles/Packages.css";
import {
  FaCheckCircle,
  FaRupeeSign,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Packages = ({ title, packages }) => {
  return (
    <section className="package-section">
      <h2 className="package-heading">{title}</h2>
      <div className="package-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.image} alt={pkg.name} className="package-image" />
            <div className="package-details">
              <h3>{pkg.name}</h3>
              <p className="package-desc">{pkg.desc}</p>
              <div className="package-amenities-grid">
                {pkg.amenities.map((item, i) => (
                  <div key={i} className="amenity-item">
                    <FaCheckCircle className="amenity-icon" /> {item}
                  </div>
                ))}
              </div>

              <div className="package-price">
                <span className="original-price">₹{pkg.original}/person</span>
                <span className="discounted-price">
                  ₹{pkg.discounted}/person
                </span>
              </div>
              <div className="package-buttons">
                <a href={pkg.phone} className="btn book-btn">
                  Book Now
                </a>
                <a
                  href={`${pkg.whatsapp}?text=Hi! I want to enquire about the '${pkg.name}' package.`}
                  className="btn enquiry-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Make Enquiry
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
>>>>>>> 7ada6c64a796a406fb05c3067c46d134a4b6f5b0
