import { useUserContext } from "../../../context/UserContext"

export default function CommentDetail({message, handleDelete}) {

    const [user,] = useUserContext()
    return(
        <div>
             <p>{message.username.username}</p>
            <p>{message.time_stamp}</p>
            <p>{message.content}</p>
            {user.user && user.user[0]._id === message.username._id ? 
            <button onClick={() => handleDelete(message._id)}>Delete</button> 
            : <></>} 
        </div>
    )
}