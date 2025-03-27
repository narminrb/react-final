import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Layout from "./layout";
import BlogDetail from "./pages/blogDetail";
import Shop from "./pages/shop";
import Login from "./pages/login";
import Signin from "./pages/signin";
import CheckOut from "./pages/checkout";
import ShopDetail from "./pages/shopDetail";

export const Router = createBrowserRouter([
    {
        path: "/",
        id:'layout',
        element: <Layout/>,
        children: [
            { 
                path: "/", 
                id:'home',
                element: <Home/>
             },
            { 
                path: "/blog",
                id:'blog',
                element: <Blog/>,
             },
             {
                path: "/blog/:id",
                id:'blog-detail',
                element: <BlogDetail/>,
            },
            {
                path: '/shop',
                id:'shop',
                element: <Shop/>,
            },
            {
                path: "/shop/:id",
                id:'shop-detail',
                element: <ShopDetail/>,
            },
            {
                path: '/login',
                id:'login',
                element: <Login/>,
            },
            {
                path: '/signin',
                id:'signin',
                element: <Signin/>,
            },
            {
                path:'/checkout',
                id:'checkout',
                element: <CheckOut/>,
            }
            
        ]
    }

])