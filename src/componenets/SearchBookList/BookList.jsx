import React from "react";

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <ul><li>No results found.</li></ul>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {books.map((book, idx) => (
        <li
          key={idx}
          style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          {book.image && (
            <img
              src={book.image}
              alt={book.title}
              style={{ width: "100px", float: "left", marginRight: "1rem" }}
            />
          )}
          <div>
            <strong>Title:</strong> {book.title} <br />
            <strong>Author:</strong> {book.author} <br />
            {book.year && (
              <>
                <strong>Year:</strong> {book.year} <br />
              </>
            )}
            {book.genre && (
              <>
                <strong>Genre:</strong> {book.genre} <br />
              </>
            )}
            {book.link && (
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                View Book
              </a>
            )}
          </div>
          <div style={{ clear: "both" }}></div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
