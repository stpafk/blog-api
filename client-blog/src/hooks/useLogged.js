import { useContext } from "react";
import { LoggedContext, UpdateLogged } from "../context/LoggedContext";


export function useIsLogged() {
    return useContext(LoggedContext);
};

export function useUpdateLogged() {
    return useContext(UpdateLogged);
}