/* eslint-disable no-undef */
// pages/Home.jsx
import React, { useEffect } from "react";
import "./home.css";
import CountUp from "../animations/CountUp";
import AOS from "aos";
import "aos/dist/aos.css";
import BookCard from "../bookcards/BookCard";
import JamboContainer from "../jambo/JamboContainer";
import AppNavbar from "../navbar/Navbar";
import { fetchBooksFromAPI } from "../api/data";
import Header from "../../componenets/header/Header";

import { useDispatch, useSelector } from "react-redux";
import { setBooks, setLoading } from "../../redux/BookSlice";

export default function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loader = useSelector((state) => state.books.loader);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const loadBooks = async () => {
      dispatch(setLoading());
      try {
        const data = await fetchBooksFromAPI();
        dispatch(setBooks(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    loadBooks();
  }, [dispatch]);

  return (
    <>
      {/* Book list */}
      {loader ? (
        <p style={{ textAlign: "center" }}>Loading books...</p>
      ) : error ? (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      ) : (
        <>
          <Header />
          <div className="home-herosection">
            <div className="home-hero-text-container" data-aos="fade-right">
              <div className="home-hero-heading">
                Discover, explore and enjoy unlimited books
              </div>
              <div className="home-hero-para">
                Vast collections of books from various authors and genres
              </div>
              <div className="home-hero-btn">
                <a href="#">
                  <button>Start Reading</button>
                </a>
              </div>
              <div className="home-hero-counts" data-aos="fade-right">
                <div className="count">
                  <CountUp from={100} to={500} duration={1} className="books" />
                  + <div className="book">book</div>
                </div>
                <div className="count">
                  <CountUp
                    from={100}
                    to={1000}
                    duration={1}
                    className="books"
                  />
                  + <div className="author">author</div>
                </div>
                <div className="count">
                  <CountUp
                    from={995}
                    to={5000}
                    duration={1}
                    className="books"
                  />
                  + <div className="reader">reader</div>
                </div>
              </div>
            </div>

            {/* pic container */}

            <div className="home-hero-card-container">
              <div className="hero-img1" data-aos="fade-right">
                <img
                  src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3N8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
              </div>
              <div className="img-box">
                <div className="hero-img2" data-aos="fade-left">
                  <img
                    src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzfGVufDB8fDB8fHww"
                    alt=""
                  />
                </div>
                <div className="hero-img3" data-aos="fade-down">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1721762724233-1332468b252f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJvb2tzfGVufDB8fDB8fHww"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <BookCard books={books.slice(0, 32)} />
          <JamboContainer />
          <AppNavbar />
        </>
      )}
    </>
  );
}
