
const handlePostMessage = async (postId, value) => {

    const res = await fetch(`http://localhost:3000/post/${postId}/message`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "content": value,
            })})
            
            if (res.status !== 201) {
                throw new Error("Not logged/Unauthorized to send message.")
            }

            const message = await res.json();

            return message;

}

const handleDeleteMessage = async (postId, messageId) => {

    const response = await fetch(
        `http://localhost:3000/post/${postId}/message/${messageId}`, {
        method: "DELETE",
        credentials: "include",
    })
    
    if (response.status === 403) {
        throw new Error("Not allowed");
    }

    if (response.status === 404) {
        throw new Error("Message does not exist")
    }

    return response.status;

}

export {
    handleDeleteMessage,
    handlePostMessage
}