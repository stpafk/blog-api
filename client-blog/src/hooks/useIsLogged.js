import { useState, useEffect } from "react";

function useIsLogged() {

    const [loading, setLoading] = useState(true)
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
                    setLoading(false);
                    throw new Error('Already logged');
                }
            })
            .catch(err => console.log(err))
            .finally(setLoading(false));
    });

    if (!loading) return logged;

};

export default useIsLogged;