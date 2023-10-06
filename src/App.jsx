import Product from "./components/Product"
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import PreveArrows from "./components/PreveArrows";
import NextArrows from "./components/NextArrows";
import Input from "./components/Input";
import Routeleyout from "./components/Routeleyout";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";
import Error from "./pages/Error";
import Singup from "./pages/Singup";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>


      <Route
        path="/"
        element={<Routeleyout />}
        >

        <Route
          path="/product"
         element={<Product />}
        >
        </Route>
        <Route
          path="*"
         element={<Error/>}
        >
        </Route>

        <Route
          path="/sing-up"
         element={<Singup/>}
        >
        </Route>

        <Route
          path="/contact"
         element={<Contact/>}
        >
        </Route>

        <Route
          path="/login"
         element={<Login/>}
        >
        </Route>

        <Route
          path="/checkout"
         element={<Checkout/>}
        >
        </Route>

        <Route
          path="/"
         element={<Home/>}
        >
        </Route>


      </Route>
    
    </Route>
  )
);



function App() {

  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
