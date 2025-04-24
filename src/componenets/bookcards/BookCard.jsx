import "./bookcard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Slider() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div
        className="book-card-heading"
        data-aos="fade-right"
        
      >
        <h1>EXPLORE OUR TOP</h1>
      </div>

      <div
        className="book-card-container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="book-container">
          <div className="book-card-img">
            <img
              src="https://images.unsplash.com/photo-1600181982553-ce7d36051c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwYm9va3N8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="detail-btn">
            {/* <div className="booktitle">Al-Chemist</div> */}
            <div className="title-rating">
              <p className="title">Al-chemist</p>
              <p className="rating">4.3</p>
            </div>
            <div className="det-btn">
              <button>explore</button>
            </div>
          </div>
        </div>
        <div className="book-container">
          <div className="book-card-img">
            <img
              src="https://images.unsplash.com/photo-1600181982553-ce7d36051c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwYm9va3N8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="detail-btn">
            {/* <div className="booktitle">Al-Chemist</div> */}
            <div className="title-rating">
              <p className="title">Al-chemist</p>
              <p className="rating">4.3</p>
            </div>
            <div className="det-btn">
              <button>explore</button>
            </div>
          </div>
        </div>
        <div className="book-container">
          <div className="book-card-img">
            <img
              src="https://images.unsplash.com/photo-1600181982553-ce7d36051c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwYm9va3N8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="detail-btn">
            {/* <div className="booktitle">Al-Chemist</div> */}
            <div className="title-rating">
              <p className="title">Al-chemist</p>
              <p className="rating">4.3</p>
            </div>
            <div className="det-btn">
              <button>explore</button>
            </div>
          </div>
        </div>
        <div className="book-container">
          <div className="book-card-img">
            <img
              src="https://images.unsplash.com/photo-1600181982553-ce7d36051c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwYm9va3N8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="detail-btn">
            {/* <div className="booktitle">Al-Chemist</div> */}
            <div className="title-rating">
              <p className="title">Al-chemist</p>
              <p className="rating">4.3</p>
            </div>
            <div className="det-btn">
              <button>explore</button>
            </div>
          </div>
        </div>
        <div className="book-container">
          <div className="book-card-img">
            <img
              src="https://images.unsplash.com/photo-1600181982553-ce7d36051c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwYm9va3N8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="detail-btn">
            {/* <div className="booktitle">Al-Chemist</div> */}
            <div className="title-rating">
              <p className="title">Al-chemist</p>
              <p className="rating">4.3</p>
            </div>
            <div className="det-btn">
              <button>explore</button>
            </div>
          </div>
        </div>
        
       
      </div>
    </>
  );
}
