import React, { useState, useContext } from "react";

const LoggedContext = React.createContext();
const UpdateLogged = React.createContext();

export function useIsLogged() {
    return useContext(LoggedContext);
};

export function useUpdateLogged() {
    return useContext(UpdateLogged);
}

export default function LoggedInProvider({children}) {

    const [logged, setLogged] = useState(false);

    function toggleLogged() {
        console.log('is it called?')
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
