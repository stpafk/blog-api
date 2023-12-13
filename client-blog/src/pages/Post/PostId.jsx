import ErrorPage from "../../components/Error/ErrorPage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchPost } from "../../utils/handleFetchPost";
import Article from "../../components/UI/Post/Article";
import Comments from "../../components/UI/Post/Comments";
import CommentForm from "../../components/Form/CommentForm";

export default function PostId() {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);
    const [error, setError] = useState(false);
    const { postId } = useParams();

    useEffect(() => {
        fetchPost(postId).then(res => {
            if (!res) {
                throw new Error("Post does not exist.")
            }
            setPost(res);
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setError(true);
            setLoading(false); 
        })

    }, [postId])

    function submitMessage(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/post/${postId}/message`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "content": e.target.elements.content.value,
            })})
            .then(res => {

                if (res.status !== 201) {
                    throw new Error("Not logged to send message.")
                }

                return res.json();
            })
            .then(data => {
                let message = data.message.message;
                setPost(prev => ({
                    ...prev,
                    messages: {
                        messages: [message, ...prev.messages.messages]
                    }
                }))
            })
            .catch(err => console.log(err))

    }
    
    if (loading) return <main>Fetching data....</main>
    if (error) return <ErrorPage />


    return(
        <main>
            <Article post={post}/>
            <div>
                <CommentForm submitMessage={submitMessage}/>
                <Comments messages={post.messages.messages}/>
            </div>
        </main>
    )

}