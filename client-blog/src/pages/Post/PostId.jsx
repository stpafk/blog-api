import ErrorPage from "../../components/Error/ErrorPage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchPost } from "../../utils/handleFetchPost";
import Article from "../../components/UI/Post/Article";

export default function PostId() {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
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
            console.log(err) 
            setError(true)
        })

    }, [])

    if (loading) return <main>Fetching data....</main>
    if (error) return <ErrorPage />

    return(
        <main>
            <Article post={post}/>
        </main>
    )

}