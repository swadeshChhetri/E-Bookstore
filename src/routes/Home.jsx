import Homebook from "../component/HomeItem/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const books = useSelector((store) => store.books);

  return (
    <main>
      <div className="books-container">
        {books.map((book) => (
          <Homebook key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default Home;
