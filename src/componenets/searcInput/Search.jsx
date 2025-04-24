import React from 'react'
import "./search.css"
import { FaSearch } from "react-icons/fa"; // Import Font Awesome search icon
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";

export default function Search() {
  return (
    <>
    <div className="search-container">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{
                    outline: "none", // Removes the outline
                    boxShadow: "none", // Removes any focus shadow
                  }}
                />

                <button
                  type="button"
                  className="search-icon-btn"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaSearch size={20} />
                </button>
              </div>



      
    </>
  )
}
