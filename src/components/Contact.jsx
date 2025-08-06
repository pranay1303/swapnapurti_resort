import React from "react";
import "../styles/Contact.css";
import { FiPhone, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import resortImage from "../assets/heroimg.jpeg";

const Contact = ({
  resortName,
  contacts = [],
  whatsapp,
  instagram,
  email,
  youtube,
  maps,
}) => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Info Card */}
        <div className="contact-card">
          <img src={resortImage} alt="Resort" className="contact-image" />
          <h3 className="card-title">{resortName}</h3>
          <p className="card-connect">Feel free to connect with us!</p>

          <div className="card-info">
            {contacts.map((item, idx) => (
              <p key={idx}>
                <FiPhone />
                <a href={`tel:${item.number}`}>{item.number}</a>
              </p>
            ))}
            <p>
              <FaWhatsapp />
              <a
                href={`https://wa.me/${whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </p>
            <p>
              <FiInstagram />
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                @{resortName?.toLowerCase().replace(/\s/g, "")}
              </a>
            </p>
            <p>
              <FiMail />
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>
              <FiMapPin />
              <a href={maps} target="_blank" rel="noopener noreferrer">
                Find Us
              </a>
            </p>
          </div>
          <div className="card-social">
            <a
              href={`https://wa.me/${whatsapp.replace("+", "")}`}
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a href={instagram} target="_blank">
              <FiInstagram />
            </a>
            <a href={youtube} target="_blank">
              <FaYoutube />
            </a>
            <a href={`mailto:${email}`}>
              <FiMail />
            </a>
            <a href={maps} target="_blank">
              <FiMapPin />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-content">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Ready to book your stay at {resortName}? Reach out to us for
            reservations or inquiries.
          </p>
          <form
            action="https://formcarry.com/s/h3qB8OIqcmu"
            method="POST"
            className="contact-form"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              value={`New Message from ${resortName}`}
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;