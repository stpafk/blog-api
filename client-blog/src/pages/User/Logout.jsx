import {useOutletContext} from "react-router-dom";
import { useEffect } from "react";

export default function Logout() {
     
    const [user, nav] = useOutletContext();

    useEffect(() => {
        if (!user) return nav("/")
    }, [user, nav])

    function handleLogout() {
        fetch("http://localhost:3000/logout", {
            method: "POST",
            credentials: "include",
        })
        .catch(err => console.log(err))
        .finally(nav("/"));
    }

    if (user) {
        return (
        <>
            <main>
                <h1>Logout</h1>
                <p>Are you sure you want to logout from "{user.user[0].username}"?</p>
                <button onClick={handleLogout}>Log Out</button>
            </main>
        </>
    )}
}