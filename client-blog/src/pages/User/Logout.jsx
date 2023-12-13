import {useOutletContext} from "react-router-dom";
import { useEffect } from "react";
<<<<<<< HEAD
import { useIsLogged } from "../../context/LoggedContext";
import { useUserContext } from "../../context/UserContext";
=======
>>>>>>> a6d4c94b85689df7d9faca6942a5eb0f77008a4e

export default function Logout() {
     
    const [user, nav] = useOutletContext();
<<<<<<< HEAD
    const [, setUser] = useUserContext();
    const [, setLogged] = useIsLogged();
    
=======

>>>>>>> a6d4c94b85689df7d9faca6942a5eb0f77008a4e
    useEffect(() => {
        if (!user) return nav("/")
    }, [user, nav])

    function handleLogout() {
        fetch("http://localhost:3000/logout", {
            method: "POST",
            credentials: "include",
        })
<<<<<<< HEAD
        .then(() => {
            setLogged(false);
            setUser({});
        })
        .catch(err => console.log(err))
        .finally(() => {
            nav(-1);
        });
=======
        .catch(err => console.log(err))
        .finally(nav("/"));
>>>>>>> a6d4c94b85689df7d9faca6942a5eb0f77008a4e
    }

    if (user) {
        return (
        <>
            <main>
                <h1>Logout</h1>
<<<<<<< HEAD
                <p>Are you sure you want to logout from "{user.user[0].username}"?</p>
=======
                <p>Are you sure you want to logout from "{user.username}"?</p>
>>>>>>> a6d4c94b85689df7d9faca6942a5eb0f77008a4e
                <button onClick={handleLogout}>Log Out</button>
            </main>
        </>
    )}
}