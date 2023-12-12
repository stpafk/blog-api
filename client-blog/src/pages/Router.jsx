import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "./Home/Home";
import '../assets/index.css'
import Login from './User/Login';
import Register from './User/Register';
import Logout from "./User/Logout";
import Index from "./User/Index";
import { fetchUser } from "../utils/handleFetchUser";

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
        }
    ])

    return <RouterProvider router={router} />
}