import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Poetry from "./component/ITEM/Poetry.jsx"
import Arts from "./component/ITEM/Arts.jsx";
import Stories from "./component/ITEM/Stories.jsx";
import Motivation from "./component/ITEM/Motivation.jsx";
import Psychologybook from "./component/ITEM/Psychology.jsx";
import History from "./component/ITEM/History.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag",element: <Bag />},
      { path: "/poetry", element: <Poetry/>},
      { path: "/history",element: <History />,},
      { path: "/psychology",element: <Psychologybook />},
      { path: "/Arts",element: <Arts />},
      { path: "/stories",element: <Stories />},
      { path: "/motivation",element: <Motivation />},
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);