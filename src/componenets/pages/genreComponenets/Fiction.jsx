/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import "../../bookcards/bookscard"; // Assuming you have the relevant CSS

export default function Fiction() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchFictionBooksFromAPI = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BOOKS_API_URL;
      const response = await fetch(`${baseUrl}?q=fiction`);
      const data = await response.json();
      if (Array.isArray(data.docs)) {
        setBooks(
          data.docs.map((item) => ({
            title: item.title || "Unknown Title",
            img: item.cover_i
              ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
              : "https://via.placeholder.com/150x220",
            authors: item.author_name || ["Unknown Author"],
            publishYear: item.first_publish_year || "Unknown year",
            key: item.key || "",
          }))
        );
      } else {
        throw new Error("Invalid data format");
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDetail = (book) => {
    setSelectedBook(book);
  };

  const closeDetail = () => {
    setSelectedBook(null);
  };

  useEffect(() => {
    fetchFictionBooksFromAPI();
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (loading) return <p className="book-card-heading">Loading fiction books...</p>;
  if (error) return <p className="book-card-heading" style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <div className="book-card-heading" data-aos="fade-right">
        <h1>Fiction Books</h1>
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
                  e.target.src = "https://via.placeholder.com/150x220";
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
                <button onClick={() => handleDetail(book)}>Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Card Modal */}
      
    </>
  );
}
