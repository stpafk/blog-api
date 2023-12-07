import LoginForm from "../../components/Form/LoginForm";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header/Header";
import useIsLogged from "../../hooks/useIsLogged";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const isLogged = useIsLogged();
    const nav = useNavigate();

    if (isLogged) {
        nav('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
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
                alert("error")
                return;
            };
            
            res.json();
        })
        .then(nav("/"))
        .catch(err => console.log(err))
    }

    if (!isLogged) {
        return (
            <>
                <Header />
                    <main>
                        <h1>Login</h1>
                        <LoginForm handleSubmit={handleSubmit}/>
                    </main>
                <Footer />
            </>
        )
    }

}