import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const Poetrybook = ({ poetry }) => {
  const dispatch = useDispatch();
  const bagbooks = useSelector((store) => store.bag);
  const elementFound = bagbooks.indexOf(poetry.id) >= 0;
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(poetry.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(poetry.id));
  };
  return (
    <div id="poet" className="book-container">
      <img className="book-image" src={poetry.image} alt="book image" />
      <div className="rating">
        {poetry.rating.stars} ⭐ | {poetry.rating.count}
      </div>
      <div className="company-name">{poetry.book}</div>
      <div className="book-name">{poetry.author}</div>
      <div className="price">
        <span className="current-price">Rs {poetry.current_price}</span>
        <span className="original-price">Rs {poetry.original_price}</span>
        <span className="discount">({poetry.discount_percentage}% OFF)</span>
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

export default Poetrybook;
