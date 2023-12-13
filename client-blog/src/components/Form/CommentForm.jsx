import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export default function CommentForm({submitMessage}) {
    const [user, ] = useUserContext();

    return (
        user.user ? 
    <form onSubmit={submitMessage}>
        <label htmlFor="content">New Message</label>
        <textarea name="content" id="content" cols="30" rows="2"></textarea>
        <button type="submit">Submit</button>
    </form> : 
    <div>   
        <p>Log In to send message</p>
        <Link to="/user/login">Log In</Link>
    </div>
    )
}