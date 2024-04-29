import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCraftItem from "../Pages/Add Craft Item/AddCraftItem";
import MyArtAndCraftList from "../Pages/My Art And Craft List/MyArtAndCraftList";
import CraftDetails from "../Pages/Craft Details/CraftDetails";
  

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
            path: "/addCraftItem",
            element:<AddCraftItem></AddCraftItem>
        },
        {
            path: "/myArtAndCraftList",
            element:<MyArtAndCraftList></MyArtAndCraftList>
        },
        {
            path: "/craftDetails/:id",
            element:<CraftDetails></CraftDetails>,
            
        },
        {
            path: "/craftUpdate/:id",
            element:<CraftDetails></CraftDetails>,

        },
      ]
    },
  ]);


export default router;