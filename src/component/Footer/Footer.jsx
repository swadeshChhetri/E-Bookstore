import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>Support</h3>

          <a href="#">Order Status</a>
          <a href="#">Shipping</a>
          <a href="#">Accessibility Menu</a>
          <a href="#">Return Policy</a>
          <a href="#">Support Center</a>
          <a href="#">FAQs</a>
        </div>

        <div className="footer_column">
          <h3>Shop</h3>
          <a href="#">Gift Certificate</a>
          <a href="#">Wholesale</a>
          <a href="#">PReviews</a>
          <a href="#">Arts & Architecture</a>
          <a href="#">Affiliates Program</a>
          <a href="#">MDeals & Discountsn</a>
        </div>

        <div className="footer_column">
          <h3>Our Services</h3>
          <a href="#">Find a Drop Box</a>
          <a href="#">Libraries</a>
          <a href="#">Campus</a>
          <a href="#">Booksellers</a>
          <a href="#">Host a Drop Box</a>
          <a href="#">Client Portal</a>
        </div>

        <div className="footer_column">
          <h3>About Us</h3>
          <a href="#">Our Mission</a>
          <a href="#">B Corp</a>
          <a href="#">History</a>
          <a href="#">Internet Archive</a>
          <a href="#">Blog</a>
          <a href="#">Press & Media</a>
        </div>
      </div>
      <hr />

      <div className="copyright">
        © 2024 www.onlinebookstore.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
