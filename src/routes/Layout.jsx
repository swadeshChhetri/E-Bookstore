import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import Fetchbooks from "../components/UI/Fetchitems.jsx";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/UI/LoadingSpinner.jsx";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const fetchStatus = useSelector((store) => store.fetchStatus);

  // Define routes where header, footer, etc. should not appear
  const noHeaderFooterRoutes = ["/E_BookStore/Login", "/E_BookStore/Singup"];

  const showHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      {showHeaderFooter && location.pathname !== "/E_BookStore/bag"}
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      {showHeaderFooter && <Fetchbooks />}
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default Layout;



