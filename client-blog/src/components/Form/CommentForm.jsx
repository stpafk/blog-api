import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";

export default function CommentForm({submitMessage}) {
    const [user, ] = useUserContext();
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        submitMessage(value);
        setValue("");
    }

    return (
        user.user ? 
    <form onSubmit={handleSubmit}>
        <label htmlFor="content">New Message</label>
        <textarea name="content" id="content" cols="30" rows="2" value={value}
        onChange={(e) => setValue(e.target.value)}></textarea>
        <button type="submit">Submit</button>
    </form> : 
    <div>   
        <p>Log In to send message</p>
        <Link to="/user/login">Log In</Link>
    </div>
    )
}