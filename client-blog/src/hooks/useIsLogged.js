import { useState, useEffect } from "react";

function useIsLogged() {

    const [logged, setLogged] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/user",  {
            method: "GET",
            credentials: 'include',  
            headers: {
                "Content-Type": "application/json", 
            } 
            })
        .then((res) => {
            if (res.status >= 400) {
                return false;
            } 
            res.json();
        })
        .then(() => setLogged(true))
    }, []);

    return logged;
};

export default useIsLogged;