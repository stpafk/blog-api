import React, { useState, useContext } from "react";

const LoggedContext = React.createContext();

export function useIsLogged() {
    return useContext(LoggedContext);
};

export default function LoggedInProvider({children}) {

    const [logged, setLogged] = useState(false);

    function toggleLogged(bool) {
        setLogged(bool);
    }

    return ( 
    <LoggedContext.Provider value={[logged, toggleLogged]}>
        {children}
    </LoggedContext.Provider>
    )
}
