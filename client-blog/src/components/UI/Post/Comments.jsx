import { useState } from "react";
import { useUserContext } from "../../../context/UserContext"
import { useParams } from "react-router-dom";
import { handleDeleteMessage } from "../../../utils/handleDeleteMessage";

export default function Comments({messages}) {

    const { postId } = useParams();
    const [user, ] = useUserContext();
    const [messageHandler, setMessageHandler] = useState(messages.map(message => ({
        ...message,
        deleting: false,
    })));

    function submitDelete(messageId) {

        setMessageHandler(prev => prev.filter(message =>
            message._id !== messageId))
        
        handleDeleteMessage(postId, messageId)
        .catch(err => console.log(err))
    }

    function handleDelete(id) {
        setMessageHandler(messageHandler.map(message => message._id === id ? {
            ...message, deleting: !message.deleting
        } : message))
    }
    // future change: create two components to handle both delete and display data
    return(
        <>
        <section>
            <ul>
            {messageHandler.map((message) => {
                return <li key={message._id} id={message._id}>
                    {message.deleting ? <div>
                        <p>Do you want to delete this message?</p>
                        <button onClick={() => submitDelete(message._id)}>Delete</button>
                        <button onClick={() => handleDelete(message._id)}>Cancel</button>
                    </div> : <>
                            <p>{message.username.username}</p>
                            <p>{message.time_stamp}</p>
                            <p>{message.content}</p>
                            {user.user && user.user[0]._id === message.username._id ? 
                            <button onClick={() => handleDelete(message._id)}>Delete</button> 
                            :
                        <></>}
                    </>}
                </li>
            })}

            </ul>
            </section>
        </>
    )
} 