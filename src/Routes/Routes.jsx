import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AllToys from "../Pages/AllToys";
import AddToys from "../Pages/AddToys";
import MyToys from "../Pages/MyToys";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/all_toys',
                element:<AllToys></AllToys>
            },
            {
                path:'/add_toys',
                element:<AddToys></AddToys>
            },
            {
                path:'/my_toys',
                element:<MyToys></MyToys>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;