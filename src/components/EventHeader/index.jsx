// src/Header.js
import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">DesignVille</div>
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="user-actions">
          <a href="#">Favourites</a>
          <a href="#">Log In</a>
          <a href="#" className="cart">
            Cart 0.00 €
          </a>
        </div>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">Furniture</a>
          </li>
          <li className="dropdown">
            <a href="#">Lighting</a>
            <div className="dropdown-content">
              <div className="dropdown-column">
                <a href="#">Pendant lights</a>
                <a href="#">Socket pendants and lamp shades</a>
              </div>
              <div className="dropdown-column">
                <a href="#">Floor lamps</a>
                <a href="#">Table lamps</a>
              </div>
              <div className="dropdown-column">
                <a href="#">Wall lamps</a>
                <a href="#">Ceiling lights</a>
              </div>
              <div className="dropdown-column">
                <a href="#">Light bulbs and accessories</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Wallpapers</a>
          </li>
          <li>
            <a href="#">Dinnerware</a>
          </li>
          <li>
            <a href="#">For kids</a>
          </li>
          <li>
            <a href="#">Outdoor</a>
          </li>
          <li>
            <a href="#">Novelties</a>
          </li>
          <li>
            <a href="#">Summer Sale</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
