import { useEffect } from "react";
import RegisterForm from "../../components/Form/RegisterForm";
import {useOutletContext} from "react-router-dom";
import { useIsLogged } from "../../context/LoggedContext";

export default function Register() {

    const [, update] =  useIsLogged();
    const [user, nav] = useOutletContext(); 

    useEffect(() => {
        if (user) {
            nav("/");
        }

    }, [user, nav])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/register", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": e.target.elements.username.value,
                "email": e.target.elements.email.value,
                "password": e.target.elements.password.value,   
                "password_confirm": e.target.elements.password_confirm.value,
            }),
        })
        .then(res => {
            if (res.status >= 400) {
                alert("error");
                //need to implement error handling
                return
            }
            
            res.json();
        })
        .then( () => {
            update(true);
            nav("/"); 
        })
        .catch(err => console.log(err))
    }
    
    if (!user) {
        return (
            <>
            <main>
                <h1>Register</h1>
                <RegisterForm handleSubmit={handleSubmit}/>
            </main>
            </>
        )
        }
}