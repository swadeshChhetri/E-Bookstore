import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer.jsx";
import Header from "../component/Header/Header.jsx";
import Fetchbooks from "../component/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../component/LoadingSpinner.jsx";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <Fetchbooks />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;