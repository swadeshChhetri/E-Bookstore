import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/E_BookStore/">
          <img className="logo_home" src="image/logo1.jpg" alt="Book Store" />
        </Link>
      </div>

      <div class="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link to="/E_BookStore/" class="dropdown-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="poetry" class="dropdown-item">
              poetry
            </Link>
          </li>
          <li>
            <Link to="history" class="dropdown-item">
              History
            </Link>
          </li>
          <li>
            <Link to="psychology" class="dropdown-item">
              Psychology
            </Link>
          </li>
          <li>
              <Link to="arts" class="dropdown-item">
                Arts & Architecture
              </Link>
          </li>
          <li>
            <Link to="stories" class="dropdown-item">Stories</Link>
          </li>
          <li>
            <Link to="motivation" class="dropdown-item" >
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
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sign In
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Sing In or Create Account
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Order Status
              </a>
            </li>
            <hr />
            <li>
              <a class="dropdown-item" href="#">
                My Wishlist
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                My Account
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Country
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                India
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                United States
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
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
      <div className="menu_container"></div>
    </header>
  );
};

export default Header;
