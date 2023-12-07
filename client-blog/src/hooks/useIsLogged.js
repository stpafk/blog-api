import { useState, useEffect } from "react";

function useIsLogged() {

    const [logged, setLogged] = useState(false);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/user",  {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',   
                }        
            })
        .then((res) => {
            if (res.status >= 400) {
                return false;
            } 
            
            res.json();
        })
        .then(() => setLogged(logged))
        .catch(err => console.log(err))
    }, []);

    return logged;
};

export default useIsLogged;