import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Layout from "./layout";
import BlogDetail from "./pages/blogDetail";
import Shop from "./pages/shop";
import Login from "./pages/login";
import Signin from "./pages/signin";

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
                path: '/login',
                id:'login',
                element: <Login/>,
            },
            {
                path: '/signin',
                id:'signin',
                element: <Signin/>,
            }
            
        ]
    }

])