import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Layout from "./layout";
import BlogDetail from "./pages/blogDetail";
import Shop from "./pages/shop";

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
            }
            
        ]
    }

])