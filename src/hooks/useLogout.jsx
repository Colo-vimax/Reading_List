import { useState } from 'react'
import { auth } from '../firebase/config'
import { signOut } from "firebase/auth";

// LOG OUT FB
const useLogout = () => {
    const[error, setError] = useState(null)
    
    // logout user
    const logout = () => {
        setError(null)
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("sign out");
          }).catch((err) => {
            // An error happened.
            setError(err.message)
          })
    }

  return {error, logout}
}

export default useLogout