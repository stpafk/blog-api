import React, { useContext, useState } from "react";

const UserContext = React.createContext();
const UpdateUser = React.createContext();

export function useUserContext() {
    return useContext(UserContext);
};

export function useUpdateUserContext() {
    return useContext(UpdateUser);
};

export default function UserProvider({children}) {
    const [user, setUser] = useState({});

    function handleUserData(data) {
        setUser(data);
    };

    return (
        <>
        <UserContext.Provider value={user}>
            <UpdateUser.Provider value={handleUserData}>
                {children}
            </UpdateUser.Provider>
        </UserContext.Provider>
        </>
    )
} 