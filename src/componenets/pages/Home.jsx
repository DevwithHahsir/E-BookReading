import React from "react";
import "./home.css";
import CountUp from "../animations/CountUp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BookCard from "../bookcards/BookCard";
import JamboContainer from "../jambo/JamboContainer";
import AppNavbar from "../navbar/Navbar";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      {/* HEREOSECTIONNNNNNNNNNNNNN */}

      <div className="home-herosection">
        {/* heading/text/button container */}

        <div className="home-hero-text-container" data-aos="fade-right">
          <div className="home-hero-heading">
            Discover, explore and enjoy unlimited books
          </div>
          <div className="home-hero-para">
            vast collections of book from various author and genres
          </div>
          <div className="home-hero-btn">
            {" "}
            <a href="http://">
              <button>Start Reading</button>
            </a>
          </div>
          <div
            className="home-hero-counts"
            data-aos="fade-right"
            // data-aos-duration="3000"
          >
            <div className="count">
              <CountUp
                from={100}
                to={500}
                separator=","
                direction="up"
                duration={1}
                className="books"
              />
              +{" "}
              <div className="book">
                book <br />
              </div>
            </div>


            <div className="count">
              <CountUp
                from={100}
                to={1000}
                separator=","
                direction="up"
                duration={1}
                className="books"
              />
              +{"  "}
              <div className="author">author</div>
            </div>

            <div className="count">
              <CountUp
                from={995}
                to={5000}
                separator=","
                direction="up"
                duration={1}
                className="books"
              />
              + <div className="reader">reader</div>
            </div>
          </div>
        </div>

        {/* HEROOOOOOO CAAAARRRRDDDDDDDDD */}

        <div className="home-hero-card-container" data-aos="fade-left">
          <div className="hero-card">
            <div className="img">
              <img
                src="https://images.unsplash.com/photo-1600181982553-ce7d36051c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwYm9va3N8ZW58MHx8MHx8fDA%3D"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="hero-card-info">
              <div className="book-ver">
                <p>Book</p>
                <p className="rating">4.2</p>
              </div>

              <div className="hero-card-time">
                <p>Reading Time</p>
                <p className="time">1h 11m 42s left</p>
              </div>
            </div>
            <div className="hero-card-btn">
              <button className="read">read</button>
              <button className="detail">view detail</button>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDERRRRR */}


      <BookCard/>
      <JamboContainer/>
      <AppNavbar/>
    </>
  );
}
