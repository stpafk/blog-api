import Footer from "../../components/UI/Footer";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom"

export default function Index() {

    const user = useLoaderData();
    const nav = useNavigate();

    return(
        <>
            <nav>
                <h1>Beto Blog</h1>
            </nav>
            <Outlet context={[user, nav]}/>
            <Footer />        
        </>
    )

}