import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export function useUserContext() {
    return useContext(UserContext);
};

export default function UserProvider({children}) {
    const [user, setUser] = useState({});

    function handleUserData(data) {
        console.log(data);
        setUser(data);
    };

    return (
        <>
        <UserContext.Provider value={[user, handleUserData]}>
            {children}
        </UserContext.Provider>
        </>
    )
} 