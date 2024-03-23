import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Help from "./components/Help";
 
import About from "./components/About";
import Contact from "./components/contact";



export const router=createBrowserRouter([
    {path: "/", element:<Home/>},
    {path: "/home", element:<Home/>},
    {path: "/help", element:<Help/>},
    {path: "/contact", element:<Contact/>},
    {path: "/about", element:<About/>}
])