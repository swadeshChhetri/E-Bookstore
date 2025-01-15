import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const Storiesbook = ({ stories }) => {
  const dispatch = useDispatch();
  const bagbooks = useSelector((store) => store.bag);
  const elementFound = bagbooks.indexOf(stories.id) >= 0;
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(stories.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(stories.id));
  };
  return (
    <div id="poet" className="book-container">
      <img className="book-image" src={stories.image} alt="book image" />
      <div className="rating">
        {stories.rating.stars} ⭐ | {stories.rating.count}
      </div>
      <div className="company-name">{stories.book}</div>
      <div className="book-name">{stories.author}</div>
      <div className="price">
        <span className="current-price">Rs {stories.current_price}</span>
        <span className="original-price">Rs {stories.original_price}</span>
        <span className="discount">({stories.discount_percentage}% OFF)</span>
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

export default Storiesbook;
