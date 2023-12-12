import { useIsLogged } from '../../../context/LoggedContext';
import {Link} from "react-router-dom";

export default function Anchor() {

    const [ isLogged , ] = useIsLogged();

    return(
            <>
            {isLogged ?
                <div>
                    <Link to="/user/logout">Logout</Link>
                </div>
            : 
            <div>
                <Link to="/user/login">Login</Link>
                <Link to="/user/register">Register</Link>
            </div>
            }
            </>
    )

   
}