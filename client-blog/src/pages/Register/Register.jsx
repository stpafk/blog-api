import RegisterForm from "../../components/Form/RegisterForm";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header/Header";
import { useNavigate } from "react-router-dom";
import { useIsLogged } from "../../context/LoggedContext";

export default function Register() {

    const nav = useNavigate();
    const [, update] =  useIsLogged();

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
                alert("error")
                //need to implement error handling
                return;
            };
            
            res.json();
        })
        .then( () => {
            update(true);
            nav("/"); 
        })
        .catch(err => console.log(err))
    }
    
    return (
        <>
        <Header />
            <main>
                <h1>Register</h1>
                <RegisterForm handleSubmit={handleSubmit}/>
            </main>
        <Footer />
        </>
    )

}