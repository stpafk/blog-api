import React, { useState } from "react";

export const LoggedContext = React.createContext();
export const UpdateLogged = React.createContext();

export default function LoggedInProvider({children}) {

    const [logged, setLogged] = useState(false);

    function toggleLogged() {
        setLogged(prev => !prev);
    }

    return ( 
    <LoggedContext.Provider value={logged}>
        <UpdateLogged.Provider value={toggleLogged}>
            {children}
        </UpdateLogged.Provider>
    </LoggedContext.Provider>
    )
}
