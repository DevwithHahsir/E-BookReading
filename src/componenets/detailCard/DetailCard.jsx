import React from 'react'
import "./detailsCards.css"
import { useNavigate } from 'react-router'

export default function DetailCard({ book, onClose }) {

  const navigate=useNavigate();
const handleExplore=()=>{
     
  navigate("/")
  
}


  return (
    <div className="Detail-main-container">
      <div className="cls-btn" onClick={onClose}>Close</div>
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

      <div className="lang">{book?.language || "Unknown"}</div>
      <div className="edi-count">Editions: {book?.edition_count || "Unknown"}</div>
      <div className="pub-year">Year: {book?.publishYear || "Unknown Year"}</div>
      </div>

      <div className="exp-btn">
        <button onClick={handleExplore}>Explore </button>
      </div>
    </div>
  )
}