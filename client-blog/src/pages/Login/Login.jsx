import LoginForm from "../../components/Form/LoginForm";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header/Header";
import { useNavigate } from "react-router-dom";
import { useUpdateLogged } from "../../context/LoggedContext";

export default function Login() {

    const nav = useNavigate();
    const update = useUpdateLogged();

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
                alert("error")
                return;
            };
            
            res.json();
        })
        .then(() => {
            update();
            nav("/");
        })
        .catch(err => console.log(err))
    }

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