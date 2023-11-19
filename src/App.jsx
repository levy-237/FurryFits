import "./App.css";
import { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import FAQ from "./pages/FAQ";
import Product from "./pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/shop/:id" element={<Product />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

export default App;
