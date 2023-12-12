import { useEffect, useState } from "react";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header/Header";
import Body from "./Body";
import { fetchUser } from "../../utils/handleFetchUser";
import { useUpdateUserContext } from "../../context/UserContext";
import { useIsLogged } from "../../context/LoggedContext";

export default function Home() {

    const updateUser = useUpdateUserContext();
    const [, update] = useIsLogged();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetch = async () => {
            const data = await fetchUser();

            if (!data) {
                return false; 
            }

            update(true);
            updateUser(data);
            return false;
        }

        fetch().catch(err => console.log(err))
        .finally(res => setLoading(res));
    }, [])
    

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

};