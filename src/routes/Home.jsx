import Homebook from "../components/HomeItem/HomeItem";
import { useSelector } from "react-redux";
import HomeSection from "../components/Home/HomeSec";

const Home = () => {
  const books = useSelector((store) => store.books);
 
  return (
    <main>
      <HomeSection/>
      <div className="books-container">
        {books.map((book) => (
          <Homebook key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default Home;
