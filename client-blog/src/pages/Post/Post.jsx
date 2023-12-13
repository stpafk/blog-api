import { useEffect, useState } from "react";
import Header from "../../components//UI//Header/Header";
import Footer from "..//../components/UI/Footer"
import { useLoaderData, Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useIsLogged } from "../../context/LoggedContext";

export default function Post() {

    const user = useLoaderData();
    const [, updateUser] = useUserContext();
    const [, update] = useIsLogged();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (user) {
            updateUser(user);
            update(true);
            setLoading(false);
        }

        setLoading(false)
    })

    if (loading) {
        return(<></>)
    }

    return (
        <>
        <Header />
            <Outlet context={user}/>
        <Footer />
        </>
    )

}