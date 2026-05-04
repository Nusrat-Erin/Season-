import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
 
import MainLayout from "../Layouts/MainLayout";
import AllFood from "../Pages/AllFood";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyOrder from "../Pages/MyOrder";
import AddItem from "../Pages/AddItem";
import UpdateItem from "../Pages/UpdateItem";
import MyItem from "../Pages/MyItem";
import { element } from "prop-types";
import SingleFood from "../Pages/SingleFood";
import CheckOut from "../Pages/CheckOut";
import PrivetRoute from "./PrivetRoute";
import Error from "../Pages/Error/Error";
 


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'all-food',
            element:<AllFood></AllFood>,
            loader:()=> fetch('https://seasons-server.vercel.app/itemCount')
        },
        {
            path:'blog',
            element:<Blog></Blog>
        },
        {
          path:'my-order',
          element: <PrivetRoute><MyOrder></MyOrder></PrivetRoute> 
        },
        {
          path:'add-item',
          element: <PrivetRoute><AddItem></AddItem></PrivetRoute>
        },
        {
          path:'update-item/:id',
          element: <PrivetRoute><UpdateItem></UpdateItem></PrivetRoute>,
          loader: ({params})=>fetch(`https://seasons-server.vercel.app/api/v1/all-foods/${params.id}`)
        },
        {
          path:'my-item',
          element:<PrivetRoute><MyItem></MyItem></PrivetRoute>
        },
        {
          path:'single-food/:id',
          element:<PrivetRoute><SingleFood></SingleFood></PrivetRoute>,
          loader: ({params})=>fetch(`https://seasons-server.vercel.app/api/v1/all-foods/${params.id}`)
        },
        {
          path:'checkOut/:id',
          element:<PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
          // loader: ({params})=>fetch(`https://seasons-server.vercel.app/api/v1/all-foods/${params.id}`)
        }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);

export default router;
