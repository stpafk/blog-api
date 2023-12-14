import { useState } from "react";
import { useParams } from "react-router-dom";
import DeleteComment from "./DeleteComment";
import CommentDetail from "./CommentDetail";
import CommentForm from "../../Form/CommentForm";
import { handlePostMessage, handleDeleteMessage } from "../../../utils/handleMessage";

export default function Comments({messages}) {

    const { postId } = useParams();
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

    function submitMessage(value) {
    
        handlePostMessage(postId, value)
        .then(data => {
            let message = data.message.message;
            message.deleting = false;
            setMessageHandler(prev => [message, ...prev])
        }).catch(err => console.log(err));

        setMessageHandler(prev => prev)
    }

    function handleDelete(id) {
        setMessageHandler(messageHandler.map(message => message._id === id ? {
            ...message, deleting: !message.deleting
        } : message))
    }
    return(
        <>
        <section>
            <CommentForm submitMessage={submitMessage}/>
            <ul>
                {messageHandler.map((message) => {
                    return <li key={message._id} id={message._id}>
                        {message.deleting ? 
                        <DeleteComment message={message}
                        handleDelete={handleDelete}
                        submitDelete={submitDelete}
                        />
                        : 
                        <CommentDetail message={message} 
                        handleDelete={handleDelete}/>}
                    </li>
                })}
            </ul>
            </section>
        </>
    )
} 