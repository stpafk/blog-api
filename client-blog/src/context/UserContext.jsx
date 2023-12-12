import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = React.createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export default function UserProvider({children}) {
    const [user, setUser] = useState({});

    function handleUserData(data) {
        setUser(data);
    }

    return (
        <>
        <UserContext.Provider value={[user, handleUserData]}>
            {children}
        </UserContext.Provider>
        </>
    )
} 

UserProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}