// pages/SearchPage.js
import React, { useState } from "react";
import { fetchBooksFromAPI } from "../api/data";
import BookList from "../SearchBookList/BookList";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      setError("");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const books = await fetchBooksFromAPI(value);
      setResults(books);
    } catch (err) {
      setError("Error fetching books.");
      setResults([]);
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "4rem auto", padding: "1rem" }}>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "1rem",
        }}
      />
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      <BookList books={results} />
    </div>
  );
};

export default SearchPage;
