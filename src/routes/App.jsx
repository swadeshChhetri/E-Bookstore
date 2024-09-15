import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer.jsx";
import Header from "../component/Header/Header.jsx";
import Fetchbooks from "../component/Fetchitems";
import { useSelector } from "react-redux";
import HomeSec from "../component/Home/HomeSec.jsx";
import LoadingSpinner from "../component/LoadingSpinner.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header/>
      {location.pathname !== '/E_BookStore/bag' && <HomeSec />}
      <Fetchbooks />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
