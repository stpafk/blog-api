
const fetchUser = async () => { 
    const res = await fetch("http://localhost:3000/user",  {
            method: "GET",
            credentials: 'include',  
            headers: {
                "Content-Type": "application/json", 
            } 
        });
    const data = await res.json();

    if (data.user !== undefined) {
        return data;
    }

    return false

}

export { 
    fetchUser 
};