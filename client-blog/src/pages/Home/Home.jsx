import { useEffect, useState } from "react";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header/Header";
import Body from "./Body";
import {useLoaderData} from "react-router-dom";
import { useIsLogged } from "../../context/LoggedContext";
import { useUserContext } from "../../context/UserContext";

export default function Home() {

    const [, updateUser] = useUserContext();
    const [, update] = useIsLogged();
    const data = useLoaderData();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (data) {
            updateUser(data);
            update(true);
            setLoading(false);
        }

        setLoading(false);
    }, [data, update, updateUser])
    

    if (loading) {
        return (
            <></>
        )
    }

    return(
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );

}