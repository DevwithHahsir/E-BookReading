/* eslint-disable no-unused-vars */

import Navbar from "../navbar/Navbar";
import "./gener.css";
import Header from "../header/Header";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";

import Comedy from "../pages/genreComponenets/Comedy"
import Fiction from "../../componenets/pages/genreComponenets/fiction"
import Romantic from "../pages/genreComponenets/Romantic"
import War from "../pages/genreComponenets/War"

function Gener() {
  const [showList, setList] = useState(false);
  const [OpenArrow, setOpenArrow] = useState(false);

  const handleGenreList = () => {
    setList((prev) => !prev);
    setOpenArrow((prev) => !prev);
  };

  return (
    <div>
      <div className="gene-header">
        <Header />
      </div>

      {/* <div className="genre-jambo-container">
        <JamboContainer/>
      </div> */}

      <div className="genre-main-container">
        <hr />
        <div className="genre-heading">
          <h1>Genre</h1>
          <div className="gen-icon" onClick={handleGenreList}>
            {OpenArrow ? <GoChevronDown /> : <GoChevronUp />}
          </div>
        </div>

        {showList ? (
          <div className="genre-list" >
            <ul type="none">
              <a href="">
                <li>Genre Fiction</li>
              </a>
              <a href="">
                <li>Non-Fiction Genre</li>
              </a>
              <a href="">
                <li>War Genre</li>
              </a>
              <a href="">
                <li>Horror Genre</li>
              </a>
              <a href="">
                <li>Biography</li>
              </a>
            </ul>
          </div>

          






        ) : (
          ""
        )}



      




        <hr />
      </div>

      {/* different Genre books show ki huwio */}

      <div className="genre-deatiail-container">
        <hr />
        <div className="fiction-container"><Fiction/></div>
        <hr />
        <div className="war-container"><War/></div>
        <hr />
        <div className="romantic-container"><Romantic/></div>
        <hr />
        <div className="Comedy-container"><Comedy/></div>
        <hr />
      </div>

      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default Gener;
