import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCraftItem from "../Pages/Add Craft Item/AddCraftItem";
  

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element:<Register></Register>
        },
        {
            path: "/addcraftitem",
            element:<AddCraftItem></AddCraftItem>
        },
      ]
    },
  ]);


export default router;