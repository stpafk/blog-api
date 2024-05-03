import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "./Home/Home";
import '../assets/index.css'
import Login from './User/Login';
import Register from './User/Register';
import Logout from "./User/Logout";
import Index from "./User/Index";
import { fetchUser } from "../utils/handleFetchUser";
import Post from "./Post/Post";
import PostId from "./Post/PostId";
import Admin from "./Admin/Admin";


export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
            loader: async () => {
                return await fetchUser();
            }
        },
        {
            path: "/user",
            element: <Index />, 
            errorElement: <ErrorPage />,
            loader: async () => { return await fetchUser() },
            children: [
                {path: "login", element: <Login />},
                {path: "register", element: <Register />},
                {path: "logout", element: <Logout />}
            ]
        },
        {
            path: "/post", 
            element: <Post />,
            errorElement: <ErrorPage />,
            loader: async () => { return await fetchUser()},
            children: [
                {path: ":postId", element: <PostId />}
            ]
        },
        {
            path: "/admin",
            element: <Admin />,
            errorElement: <ErrorPage />,
            children: [
                // {path: "/create", element: null},
                // {path: "/posts", element: null},
                // {path: "/post/:id/update", element: null},
                // {path: "/post/:id/delete", element: null},
                // {path: "/messages", element: null},
            ]
        }
    ])

    return <RouterProvider router={router} />
}