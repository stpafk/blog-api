import { useLoaderData, useOutletContext, useSearchParams } from "react-router-dom";
import ErrorPage from "../../components/Error/ErrorPage";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { fetchPost } from "../../utils/handleFetchPost";

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
            setPost(res)
        })
        .catch(err => {
            console.log(err) 
            setError(true)
        })
        .finally(setLoading(false));
    }, [postId])

    if (loading) return <main>Fetching data....</main>
    if (error) return <ErrorPage />

    return(
        <main>
            <article>
                <h1>{post.header.title}</h1>
                <p>{post.content}</p>
            </article>
        </main>
    )

}