import React from "react";
import "./detailsCards.css";

export default function DetailCard({ book, onClose }) {
  // Get the correct read link using edition-specific identifiers
  const getReadLink = () => {
    // Use the edition_key if available
    if (book?.edition_key && book.edition_key.length > 0) {
      return `https://openlibrary.org/books/${book.edition_key[0]}`;
    }
    // Use the ia identifier if available
    if (book?.ia && book.ia.length > 0) {
      return `https://archive.org/details/${book.ia[0]}`;
    }
    // Fallback to work key
    if (book?.key) {
      return `https://openlibrary.org${book.key}`;
    }
    return null;
  };

  const readLink = getReadLink();

  return (
    <div className="Detail-main-container">
      <div className="cls-btn" onClick={onClose}>
        Close
      </div>
      <div className="detail-img-container">
        <img
          src={book?.img || "https://via.placeholder.com/300x450"}
          alt={book?.title || "Book cover"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x450";
          }}
        />
      </div>
      <div className="detail-title">{book?.title || "Unknown Title"}</div>
      <div className="detail-author">
        {book?.authors?.join(", ") || "Unknown Author"}
      </div>
      <div className="details-item">
        <div className="edi-count">Editions: {book?.editionCount || 0}</div>
        <div className="pub-year">
          Year: {book?.publishYear || "Unknown Year"}
        </div>
      </div>

      {readLink && (
        <div className="exp-btn">
          <button
            className="exp-btn"
            onClick={() => window.open(readLink, "_blank")}
          >
            Read / View Book
          </button>
        </div>
      )}
    </div>
  );
}
