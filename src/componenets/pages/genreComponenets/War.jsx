/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./fiction.css";
import DetailCard from "../../detailCard/DetailCard";

// import "../../bookcards/bookscard"; // Assuming you have the relevant CSS

export default function Fiction() {
  const [books, setBooks] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [detail, setDetail] = useState("");

  const handleDetail = (book) => {
    setDetail(book);
  };

  const closeDetail = () => {
    setDetail(null);
  };

  const [more, setMore] = useState(false);

  const fetchFictionBooksFromAPI = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BOOKS_API_URL;
      const response = await fetch(`${baseUrl}?q=war`);
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
      // setLoading(false); // If you want to keep loading, uncomment this
    } catch (err) {
      // Error handling removed as per user request
      // setLoading(false);
    }
  };

  const handleMore = () => {
    setMore((prev) => !prev);
  };

  useEffect(() => {
    fetchFictionBooksFromAPI();
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="genre-detail-container" data-aos="fade-right">
        <div className="genre-detail-heading">
          <h1>War Books</h1>
          <div className="genre-deatils">
            <ul type="none">
              <li>Mystery</li>
              <li>Romance</li>
              <li>Adventure</li>
              <li>Suspense</li>
            </ul>
          </div>
        </div>

        <div className="genre-img">
          <img
          src="https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FyfGVufDB8fDB8fHww"
            loading="lazy"
          />

          <span className="more" onClick={handleMore}>
            {more ? "-" : "+"}
          </span>
        </div>
      </div>

      {more &&
        (books && books.length > 0 ? (
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
                    <button onClick={() => handleDetail(book)}>ShowDetail</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "Loading....."
        ))}

      {/* Detail Card Modal */}

      {detail && (
        <div className="modal-overlay">
          <div className="modal-content">
            <DetailCard book={detail} onClose={closeDetail} />
          </div>
        </div>
      )}
    </>
  );
}
