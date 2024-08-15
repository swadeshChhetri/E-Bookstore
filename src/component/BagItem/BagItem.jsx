import { useDispatch } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { bagActions } from "../../store/bagSlice";
import "./BagItem.css";

const Bagbook = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemovebook = () => {
    dispatch(bagActions.removeFromBag(book.id));
  };

  return (
    <div className="bag-book-container">
      <div className="book-left-part">
        <img className="bag-book-img" src={book.image} />
      </div>
      <div className="book-right-part">
        <div className="company">{book.company}</div>
        <div className="book-name">{book.book_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {book.current_price}</span>
          <span className="original-price">Rs {book.original_price}</span>
          <span className="discount-percentage">
            ({book.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{book.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{book.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleRemovebook}>
        <RiDeleteBin5Fill />
      </div>
    </div>
  );
};

export default Bagbook;
