
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
    console.log(response)
    return response.status;

}

export {
    handleDeleteMessage
}