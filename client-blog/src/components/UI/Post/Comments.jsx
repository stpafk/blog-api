import { useState } from "react";
import { useUserContext } from "../../../context/UserContext"

export default function Comments({messages}) {

    const [user, ] = useUserContext();
    const [messageHandler, setMessageHandler] = useState(messages.map(message => ({
        ...message,
        deleting: false,
    })));

    return(
        <>
        <section>
            <ul>
            {messageHandler.map((message) => {
                return <li key={message._id} id={message._id}>
                    {message.deleting ? <div>
                        <p>Do you want to delete?</p>
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