import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ReactDOM from "react-dom/client";
import "./index.css";
import ProductList from "./component/ProductList";
import ProductDetails from "./routes/ProductDetails";
import { detailsLoader } from "./routes/ProductDetails";
import { listLoader } from "./component/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
    errorElement: <div>خطا در بارگذاری اطلاعات</div>,
    loader: listLoader,
  },
  {
    path: "ProductDetails/:detailsId",
    element: <ProductDetails />,
    loader: detailsLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
