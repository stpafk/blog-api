import { useIsLogged } from '../../../context/LoggedContext'

export default function Anchor() {

    const [ isLogged , ] = useIsLogged();

    return(
            <>
            {isLogged ?
                <div>
                    <a href="/user/logout">Logout</a>
                </div>
            : 
            <div>
                <a href="/user/login">Login</a>
                <a href="/user/register">Register</a>
            </div>
            }
            </>
    )

   
}