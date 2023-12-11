import { useIsLogged } from '../../../context/LoggedContext'

export default function Anchor() {

    const isLogged = useIsLogged();

    return(
            <>
            {isLogged ?
                <div>
                    <a href="/login">Logout</a>
                </div>
            : 
            <div>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            }
            </>
    )

   
}