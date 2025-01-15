import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import "../../styles/HomeItem.css";
import { Link } from "react-router-dom";

const Homebook = ({ book }) => {
  
  const dispatch = useDispatch();

  const bagbooks = useSelector((store) => store.bag);

  const elementFound = bagbooks.indexOf(book.id) >= 0;


  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(book.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(book.id));
  };


  return (
    <div id="poet" className="book-container">
      <img className="book-image" src={book.image} alt="book image" />
      <div className="rating">
        {book.rating.stars} ⭐ | {book.rating.count}
      </div>
      <Link to={`/E_BookStore/productDetails/${book.id}`} className="company-name">{book.book}</Link>
      <div className="book-name">{book.author}</div>
      <div className="price">
        <span className="current-price">Rs {book.current_price}</span>
        <span className="original-price">Rs {book.original_price}</span>
        <span className="discount">({book.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-warning"
          onClick={handleAddToBag}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default Homebook;
