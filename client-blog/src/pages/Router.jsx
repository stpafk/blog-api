import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "./Home/Home";
import '../assets/index.css'
import Login from "./Login/Login";
import Register from "./Register/Register";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />
        },

        {
            path: "/register", 
            element: <Register />,
            errorElement: <ErrorPage />
        },

        {
            path: "/login",
            element: <Login />,
            errorElement: <ErrorPage />
        },
    ])

    return <RouterProvider router={router} />
}