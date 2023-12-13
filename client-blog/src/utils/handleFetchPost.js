
const fetchPost = async (id) => {

    const data = await fetch(`http://localhost:3000/post/${id}`, {
        method: "GET"
    });

    if (data.status === 404) {
        return false;
    }

    return data.json();
}

export { fetchPost };