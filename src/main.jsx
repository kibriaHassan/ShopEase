import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutesLayout from "./routes/Routes.jsx";
import App from "./App.jsx";
import Categories from "./pages/Categories.jsx";
import Shop from "./pages/Shop.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutesLayout />, // layout wrapper
    children: [
      { index: true, element: <App /> },
      { path: "categories", element: <Categories /> },
      { path: "shop", element: <Shop /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
