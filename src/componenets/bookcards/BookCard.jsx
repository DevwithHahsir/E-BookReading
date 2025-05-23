import "./bookcard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import DetailCard from "../detailCard/DetailCard";

export default function Slider({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDetail = (book) => {
    setSelectedBook(book);
  };

  const closeDetail = () => {
    setSelectedBook(null);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!books || books.length === 0) {
    return (
      <div className="book-card-heading" data-aos="fade-right">
        <h2>No books found.</h2>
      </div>
    );
  }

  return (
    <>
      <div className="book-card-heading" data-aos="fade-right">
        <h1>EXPLORE OUR TOP BOOKS</h1>
      </div>

      <div
        className="book-card-container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {books.map((book, index) => (
          <div className="book-container" key={book.key || index}>
            <div className="book-card-img">
              <img
                src={book.img}
                loading="lazy"
                alt={book.title || "Book Cover"}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
            </div>

            <div className="detail-btn">
              <div className="title-rating">
                <p className="title">
                  {book.title && book.title.length > 20
                    ? `${book.title.substring(0, 17)}...`
                    : book.title || "Unknown Title"}
                </p>
                <p className="rating">
                  {Array.isArray(book.authors) && book.authors.length > 0
                    ? book.authors[0]
                    : "Unknown Author"}
                  {book.publishYear && ` (${book.publishYear})`}
                </p>
              </div>
              <div className="det-btn">
                <button onClick={() => handleDetail(book)}>
                  Show Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Card Modal */}
      {selectedBook && (
        <div className="modal-overlay">
        
          <div className="modal-content">
            <DetailCard book={selectedBook} onClose={closeDetail} />
          </div>
        </div>
      )}
    </>
  );
}