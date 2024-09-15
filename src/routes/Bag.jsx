import Bagbook from "../component/BagItem/BagItem";
import BagSummary from "../component/BagItem/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagbooks = useSelector((state) => state.bag);

  const books = useSelector((state) => state.books);

  const finalbooks = books.filter((book) => {
    const bookIndex = bagbooks.indexOf(book.id);
    return bookIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-books-container">
          {finalbooks.map((book) => (
            <Bagbook book={book} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
