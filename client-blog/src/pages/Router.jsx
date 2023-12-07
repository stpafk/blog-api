import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "./Home/Home";
import '../assets/index.css'

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />
        }
    ])

    return <RouterProvider router={router} />
}