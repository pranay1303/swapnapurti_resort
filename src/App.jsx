import { Routes, Route } from "react-router-dom";
import Packages from "./components/Packages";
import {
  FaUmbrellaBeach,
  FaSwimmer,
  FaCampground,
  FaGlassCheers,
} from "react-icons/fa";

import heroImage1 from "./assets/heroimg1.png";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import heroImage from "./assets/heroimg.jpeg";
import About from "./components/About";
import Contact from "./components/Contact";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Hero
              title="Welcome to Swapnapurti"
              tagline="Where nature meets serenity and comfort"
              buttonText="Book Your Stay"
              buttonLink="/contact"
              secondaryText="Check Details"
              secondaryLink="/packages"
              image={heroImage}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              title="About Swapnapurti"
              subtitle="Discover the harmony of nature and comfort at our serene retreat."
              cards={[
                {
                  title: "Natural Serenity",
                  desc: "Experience peace and comfort surrounded by lush greenery and calming landscapes at Swapnapurti.",
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
                },
              ]}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              resortName="Swapnapurti Resort"
              contacts={[
                { number: "+918605957962" },
                { number: "+919876543210" },
              ]}
              whatsapp="+918605957962"
              instagram="https://instagram.com/swapnapurtiresort"
              email="swapnapurtistay@gmail.com"
              youtube="https://www.youtube.com/@swapnapurtistay"
              maps="https://maps.app.goo.gl/SwapnapurtiResort"
            />
          }
        />

        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/packages"
          element={
            <Packages
              title="Our Special Packages"
              packages={[
                {
                  name: "Weekday Escape",
                  desc: "Recharge during weekdays with peaceful stays, all meals, and scenic surroundings.",
                  original: 2299,
                  discounted: 1899,
                  image: heroImage,
                  amenities: [
                    "AC Rooms",
                    "Breakfast",
                    "Swimming Pool",
                    "Indoor Games",
                    "Free WiFi",
                    "Campfire",
                    "Parking",
                    "Peaceful View",
                  ],
                  phone: "tel:+918605957962",
                  whatsapp:
                    "https://wa.me/918605957962?text=I%20want%20to%20enquire%20about%20the%20Weekday%20Escape%20package",
                },
                {
                  name: "Weekend Retreat",
                  desc: "Perfect weekend getaway for couples and families with all amenities and fun.",
                  original: 2899,
                  discounted: 2299,
                  image: heroImage1,
                  amenities: [
                    "Private Cottages",
                    "Lunch + Dinner",
                    "Swimming Pool",
                    "Kids Zone",
                    "Music Night",
                    "Free WiFi",
                    "Trekking Trail",
                    "Room Service",
                  ],
                  phone: "tel:+918605957962",
                  whatsapp:
                    "https://wa.me/918605957962?text=I%20want%20to%20enquire%20about%20the%20Weekend%20Retreat%20package",
                },
                {
                  name: "Event & Party Pack",
                  desc: "Host unforgettable events with custom decor, pool party, meals, and DJ night.",
                  original: 3499,
                  discounted: 2999,
                  image: heroImage,
                  amenities: [
                    "DJ Setup",
                    "Food & Drinks",
                    "Pool Access",
                    "Custom Decor",
                    "Bonfire",
                    "Stage Setup",
                    "Lawn Area",
                    "Photo Spot",
                  ],
                  phone: "tel:+918605957962",
                  whatsapp:
                    "https://wa.me/918605957962?text=I%20want%20to%20enquire%20about%20the%20Event%20%26%20Party%20Pack",
                },
                {
                  name: "Year-End Celebration",
                  desc: "Celebrate the year-end with fireworks, buffet, live music, and luxury stay.",
                  original: 3999,
                  discounted: 2999,
                  image: heroImage1,
                  amenities: [
                    "Live Band",
                    "Gala Dinner",
                    "Fireworks",
                    "Luxury Stay",
                    "Clock Countdown",
                    "Dance Floor",
                    "Selfie Booth",
                    "Welcome Drinks",
                  ],
                  phone: "tel:+918605957962",
                  whatsapp:
                    "https://wa.me/918605957962?text=I%20want%20to%20enquire%20about%20the%20Year-End%20Celebration%20package",
                },
              ]}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
