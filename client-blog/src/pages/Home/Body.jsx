import { useEffect, useState } from "react";

export default function Body() {

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:3000/", {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json"
            }
        })
        .then((request) => {
            return request.json()
        })
        .then((data) => setPosts(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <p>Fetching resource...</p>
        )
    }

    return(
        <ul>
            {posts["posts"].map(post => {
                return <li key={post._id}>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                </li>
            })}
        </ul>
    )
}