import LoginForm from "../../components/Form/LoginForm";
import { useIsLogged } from "../../context/LoggedContext";
import {useOutletContext} from "react-router-dom";
import { useEffect } from "react";

export default function Login() {

    const [, update] = useIsLogged();
    const [user, nav] = useOutletContext(); 

    useEffect(() => {       
        if (user) {
            nav("/");
        }

    }, [nav, user])


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": e.target.elements.username.value,
                "password": e.target.elements.password.value

            }),
        })
        .then(res => {
            if (res.status >= 400) {
                alert("error");
                return
            }
            
            res.json();
        })
        .then(() => {
            update(true);
            nav("/");
        })
        .catch(err => console.log(err))
    }

    if (!user) {
    return (
            <main>
                <h1>Login</h1>
                <LoginForm handleSubmit={handleSubmit}/>
            </main>
        )
    }
}