

export default function DeleteComment({message, handleDelete, submitDelete}) {

    return(
        <div>
            <p>Do you want to delete this message?</p>
            <button onClick={() => submitDelete(message._id)}>Delete</button>
            <button onClick={() => handleDelete(message._id)}>Cancel</button>
        </div> 
    )
}