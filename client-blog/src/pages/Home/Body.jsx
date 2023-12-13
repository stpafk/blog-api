import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Body() {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const nav = useNavigate();

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

    function moveToPage(e) {
        e.preventDefault();
        nav(`/post/${e.currentTarget.id}`)
    }

    if (loading) {
        return (
            <p>Fetching resource...</p>
        )
    }

    return(
        <ul>
            {posts["posts"].map(post => {
                return <StyledLi 
                key={post._id} 
                onClick={moveToPage}
                id={post._id}>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                </StyledLi>
            })}
        </ul>
    )
}

import styled from "styled-components";

const StyledLi = styled.li`
    cursor: pointer;
`