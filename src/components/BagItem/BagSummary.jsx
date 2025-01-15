import { useSelector } from "react-redux";
import '../../styles/BagSummary.css';

const BagSummary = () => {
  const bagbookIds = useSelector((state) => state.bag);
  const books = useSelector((state) => state.books);
  const finalbooks = books.filter((book) => {
    const bookIndex = bagbookIds.indexOf(book.id);
    return bookIndex >= 0;
  });

  const CONVENIENCE_FEES = 99;
  let totalbook = bagbookIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalbooks.forEach((bagbook) => {
    totalMRP += bagbook.original_price;
    totalDiscount += bagbook.original_price - bagbook.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalbook} books) </div>

        <div className="price-book">
          <span className="price-book-tag">Total MRP</span>
          <span className="price-book-value">₹{totalMRP}</span>
        </div>

        <div className="price-book">
          <span className="price-book-tag">Discount on MRP</span>
          <span className="price-book-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>

        <div className="price-book">
          <span className="price-book-tag">Convenience Fee</span>
          <span className="price-book-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-book-tag">Total Amount</span>
          <span className="price-book-value">₹{finalPayment}</span>
        </div>
      </div>
      
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;