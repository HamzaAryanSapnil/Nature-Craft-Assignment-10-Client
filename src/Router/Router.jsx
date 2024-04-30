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
import UpdateCraft from "../Pages/Update Craft/UpdateCraft";
import PrivateRoutes from "../Private/PrivateRoutes";
  

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
            element: <PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
        },
        {
            path: "/myArtAndCraftList",
            element: <PrivateRoutes><MyArtAndCraftList></MyArtAndCraftList></PrivateRoutes>
        },
        {
            path: "/craftDetails/:id",
            element: <PrivateRoutes><CraftDetails></CraftDetails></PrivateRoutes>,
            
        },
        {
            path: "/craftUpdate/:id",
            element: <PrivateRoutes><UpdateCraft></UpdateCraft></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:3000/craftUpdates/${params.id}`)

        },
      ]
    },
  ]);


export default router;