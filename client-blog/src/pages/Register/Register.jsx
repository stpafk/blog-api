import RegisterForm from "../../components/Form/RegisterForm";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header/Header";

export default function Register() {

    return (
        <>
        <Header />
        <main>
            <h1>Register</h1>
            <RegisterForm />
        </main>
        <Footer />
        </>
    )

}