import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const Historybook = ({ history }) => {
  const dispatch = useDispatch();
  const bagbook = useSelector((store) => store.bag);
  const elementFound = bagbook.indexOf(history.id) >= 0;
 

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(history.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(history.id));
  };

  return (
    <>
      <div id="poet" className="book-container">
        <img className="book-image" src={history.image} alt="book image" />
        <div className="rating">
          {history.rating.stars} ⭐ | {history.rating.count}
        </div>
        <div className="company-name">{history.book}</div>
        <div className="book-name">{history.author}</div>
        <div className="price">
          <span className="current-price">Rs {history.current_price}</span>
          <span className="original-price">Rs {history.original_price}</span>
          <span className="discount">({history.discount_percentage}% OFF)</span>
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

export default Historybook;
