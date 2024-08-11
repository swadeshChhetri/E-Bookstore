import { BsFillPersonFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="image/Booklogo.jpg"
            alt="Book Store"
          />
        </Link>
      </div>

      <nav className="nav_bar">
        <Link to="/">Home</Link>
        <Link to="poetry">poetry</Link>
        <Link to="history">History</Link>
        <Link to="psychology">Psychology</Link>
        <Link to="arts">Arts & Architecture</Link>
        <Link to="stories">Stories</Link>
        <Link to="motivation">
          Motivation <sup>New</sup>
        </Link>
      </nav>
      <BsFillMenuButtonWideFill size={55} className="menu_icon" />

      <div className="search_bar">
        <FiSearch size={22} />
        <input className="search_input" placeholder="Search for books" />
      </div>

      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill size={22} />
          <span className="action_name" to="/footer">
            Profile
          </span>
        </div>
        <div className="action_container">
          <FaRegHeart size={22} />
          <span className="action_name">Wishlist</span>
        </div>
        <Link className="action_container cart" to="/bag">
          <BsCart4 size={22} />
          <span className="action_name "> My Cart</span>
          <sup className="bag-book-count">{bag.length}</sup>
        </Link>
      </div>
      <div className="menu_container"></div>
    </header>
  );
};

export default Header;
