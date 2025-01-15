import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const Motivationbook = ({ motivation }) => {
  const dispatch = useDispatch();

  const bagbooks = useSelector((store) => store.bag);
  const elementFound = bagbooks.indexOf(motivation.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(motivation.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(motivation.id));
  };
  return (
    <div id="poet" className="book-container">
      <img className="book-image" src={motivation.image} alt="book image" />
      <div className="rating">
        {motivation.rating.stars} ⭐ | {motivation.rating.count}
      </div>
      <div className="company-name">{motivation.book}</div>
      <div className="book-name">{motivation.author}</div>
      <div className="price">
        <span className="current-price">Rs {motivation.current_price}</span>
        <span className="original-price">Rs {motivation.original_price}</span>
        <span className="discount">
          ({motivation.discount_percentage}% OFF)
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

export default Motivationbook;
