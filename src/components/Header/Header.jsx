/*import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import "../../styles/Header.css";



  return (
    <header>
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item"></li>

              <li class="nav-item">
                
              </li>

             

              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;*/
import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import "../../styles/Header.css";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="navbar navbar-light bg-light d-flex justify-content-between">
        <div className="logo_container">
          <Link to="/E_BookStore/">
            <img className="logo_home" src="image/logo1.jpg" alt="Book Store" />
          </Link>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link to="/E_BookStore/" className="dropdown-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="poetry" className="dropdown-item">
                poetry
              </Link>
            </li>
            <li>
              <Link to="history" className="dropdown-item">
                History
              </Link>
            </li>
            <li>
              <Link to="psychology" className="dropdown-item">
                Psychology
              </Link>
            </li>
            <li>
              <Link to="arts" className="dropdown-item">
                Arts & Architecture
              </Link>
            </li>
            <li>
              <Link to="stories" className="dropdown-item">
                Stories
              </Link>
            </li>
            <li>
              <Link to="motivation" className="dropdown-item">
                Motivation<sup>New</sup>
              </Link>
            </li>
          </ul>
        </div>
        <BsFillMenuButtonWideFill size={55} className="menu_icon" />

        <div className="search_bar">
          <FiSearch size={22} />
          <input
            className="search_input"
            placeholder="Search by Title, Author, or ISBN"
          />
        </div>

        <div className="action_bar">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sign In
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="Singup" className="dropdown-item" href="#">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="Login" className="dropdown-item" href="#">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="OrderStatus" className="dropdown-item">
                  Order Status
                </Link>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  My Wishlist
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  My Account
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Country
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  India
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  United States
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Australia
                </a>
              </li>
            </ul>
          </div>

          <Link className="action_container cart" to="bag">
            <BsCart4 size={22} />
            <sup className="bag-book-count">{bag.length}</sup>
          </Link>
        </div>

        <button
          className="navbar-toggler d-md-none"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>





      <div className={`offcanvas-menu ${isOpen ? "open" : ""}`}>
        <button
          className="btn-close"
          onClick={toggleMenu}
          aria-label="Close"
        ></button>
        <ul className="nav flex-column">
        <li>
              <Link to="/E_BookStore/" className="dropdown-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="poetry" className="dropdown-item">
                poetry
              </Link>
            </li>
            <li>
              <Link to="history" className="dropdown-item">
                History
              </Link>
            </li>
            <li>
              <Link to="psychology" className="dropdown-item">
                Psychology
              </Link>
            </li>
            <li>
              <Link to="arts" className="dropdown-item">
                Arts & Architecture
              </Link>
            </li>
            <li>
              <Link to="stories" className="dropdown-item">
                Stories
              </Link>
            </li>
            <li>
              <Link to="motivation" className="dropdown-item">
                Motivation<sup>New</sup>
              </Link>
            </li>
        </ul>
      </div>

      <style jsx="true">{`
        .offcanvas-menu {
          position: fixed;
          top: 0;
          right: -300px;
          width: 300px;
          height: 100%;
          background-color: #fff;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
          overflow-y: auto;
          transition: right 0.3s ease-in-out;
          z-index: 1045;
        }
        .offcanvas-menu.open {
          right: 0;
        }
        .btn-close {
          margin: 1rem;
          font-size: 1.5rem;
        }
        @media (min-width: 481px) {
          .navbar-toggler {
            display: none;
          }
          .offcanvas-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
