import Header from "../../components//UI//Header/Header";
import Footer from "..//../components/UI/Footer"
import { useLoaderData, Outlet } from "react-router-dom";

export default function Post() {

    const user = useLoaderData();

    return (
        <>
        <Header />
            <Outlet context={user}/>
        <Footer />
        </>
    )

}