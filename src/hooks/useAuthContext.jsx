import { useContext } from 'react';
import { authContext } from "../context/AuthContext";

export const useAuthContext = () => {
    const context = useContext(authContext)

    if (!context) {
        throw new Error("useAuthContext should be inside AuthContext Provider")
    }

    return context
}