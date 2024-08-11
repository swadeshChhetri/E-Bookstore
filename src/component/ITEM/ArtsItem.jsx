import { useDispatch, useSelector } from "react-redux";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { bagActions } from "../../store/bagSlice";

const Artsbook = ({ arts }) => {
  const dispatch = useDispatch();
  const bagbooks = useSelector((store) => store.bag);
  const elementFound = bagbooks.indexOf(arts.id) >= 0;

  
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(arts.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(arts.id));
  };
  return (
    <>
      <div id="poet" className="book-container">
        <img className="book-image" src={arts.image} alt="book image" />
        <div className="rating">
          {arts.rating.stars} ⭐ | {arts.rating.count}
        </div>
        <div className="company-name">{arts.book}</div>
        <div className="book-name">{arts.author}</div>
        <div className="price">
          <span className="current-price">Rs {arts.current_price}</span>
          <span className="original-price">Rs {arts.original_price}</span>
          <span className="discount">({arts.discount_percentage}% OFF)</span>
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
    </>
  );
};

export default Artsbook;