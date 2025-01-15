import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const Psychologybook = ({ psychology }) => {
  const dispatch = useDispatch();
  const bagbooks = useSelector((store) => store.bag);
  const elementFound = bagbooks.indexOf(psychology.id) >= 0;
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(psychology.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(psychology.id));
  };
  return (
    <div id="poet" className="book-container">
      <img className="book-image" src={psychology.image} alt="book image" />
      <div className="rating">
        {psychology.rating.stars} ⭐ | {psychology.rating.count}
      </div>
      <div className="company-name">{psychology.book}</div>
      <div className="book-name">{psychology.author}</div>
      <div className="price">
        <span className="current-price">Rs {psychology.current_price}</span>
        <span className="original-price">Rs {psychology.original_price}</span>
        <span className="discount">
          ({psychology.discount_percentage}% OFF)
        </span>
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

export default Psychologybook;
