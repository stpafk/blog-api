import useIsLogged from "../../../hooks/useIsLogged"

export default function Anchor() {

    const isLogged = useIsLogged();

    if (isLogged) {
        return(
        <>
            <a href="" type="hidden"></a>
            <a href="/logout">Logout</a>
        </>
        )
    }

    if (!isLogged) {
        return(
        <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </> 
        )
    }
}