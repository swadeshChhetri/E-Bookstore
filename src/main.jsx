import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Poetry from "./pages/Poetry/Poetry.jsx";
import Arts from "./pages/Arts/Arts.jsx";
import Stories from "./pages/Stories/Stories.jsx";
import Motivation from "./pages/Motivation/Motivation.jsx";
import Psychologybook from "./pages/Psychology/Psychology.jsx";
import History from "./pages/History/History.jsx";
import Login from "./pages/Login.jsx";
import Singup from "./pages/Singup.jsx";
import OrderStatus from "./pages/OrderStatus/OrderStatus.jsx";
import ProductDetails from "./pages/productDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/E_BookStore/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/E_BookStore/bag", element: <Bag /> },
      { path: "/E_BookStore/poetry", element: <Poetry /> },
      { path: "/E_BookStore/history", element: <History /> },
      { path: "/E_BookStore/psychology", element: <Psychologybook /> },
      { path: "/E_BookStore/arts", element: <Arts /> },
      { path: "/E_BookStore/stories", element: <Stories /> },
      { path: "/E_BookStore/motivation", element: <Motivation /> },
      { path: "/E_BookStore/Login", element: <Login /> },
      { path: "/E_BookStore/Singup", element: <Singup /> },
      { path: "/E_BookStore/OrderStatus", element: <OrderStatus /> },
      { path: "/E_BookStore/productDetails/:id", element: <ProductDetails /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
