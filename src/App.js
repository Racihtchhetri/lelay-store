import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Men from './Pages/Men/Men';
import Women from './Pages/Women/Women';
import Kids from './Pages/Kids/Kids';
import Product from "./Pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AddProductForm from './Pages/AddProductForm/AddProductForm';
import "./App.scss";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/addProductForm",
        element: <AddProductForm />, // AddProductForm page
      },
      {
        path: "/men",
        element: <Men />, // Men page
      },
      {
        path: "/women",
        element: <Women />, // Women page
      },
      {
        path: "/kids",
        element: <Kids />, // Kids page
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ]
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
