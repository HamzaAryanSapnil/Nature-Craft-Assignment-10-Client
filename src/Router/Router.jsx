import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCraftItem from "../Pages/Add Craft Item/AddCraftItem";
import MyArtAndCraftList from "../Pages/My Art And Craft List/MyArtAndCraftList";
import CraftDetails from "../Pages/Craft Details/CraftDetails";
import UpdateCraft from "../Pages/Update Craft/UpdateCraft";
import PrivateRoutes from "../Private/PrivateRoutes";
import AllArtAndCraftItems from "../Pages/All Art and Craft Items/AllArtAndCraftItems";
import SubCategories from "../Pages/Sub Categories Page/SubCategories";
import ErrorPage from "../Pages/Not Found/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoutes>
            <AddCraftItem></AddCraftItem>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allArtAndCraftItems",
        element: (
          <PrivateRoutes>
            <AllArtAndCraftItems></AllArtAndCraftItems>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(
            "https://art-and-craft-server-nine.vercel.app/allArtAndCraftItems"
          ),
      },
      {
        path: "/myArtAndCraftList",
        element: (
          <PrivateRoutes>
            <MyArtAndCraftList></MyArtAndCraftList>
          </PrivateRoutes>
        ),
      },
      {
        path: "/craftDetails/:id",
        element: (
          <PrivateRoutes>
            <CraftDetails></CraftDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-server-nine.vercel.app/craftDetails/${params.id}`
          ),
      },
      {
        path: "/subCategories/:sub_categories",
        element: (
          <PrivateRoutes>
            <SubCategories></SubCategories>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-server-nine.vercel.app/subCategoriesLists/${params.sub_categories}`
          ),
      },
      {
        path: "/craftUpdate/:id",
        element: (
          <PrivateRoutes>
            <UpdateCraft></UpdateCraft>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-server-nine.vercel.app/craftUpdates/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
