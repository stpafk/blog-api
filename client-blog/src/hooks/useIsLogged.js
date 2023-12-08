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
                if (res.status === 200) {
                    setLogged(true);
                    throw new Error('Already logged');
                }
            })
            .catch(err => console.log(err))
    }, []);

    return logged;
};

export default useIsLogged;