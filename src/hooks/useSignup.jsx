import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

// Fb imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

// connect backend
const useSignup = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

//   sign user
  const signup = (email, password) => {
    setError(null)
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
        // // Signed up 
        // const user = userCredential.user;
        // // ...
        console.log('user signed up:', res.user);
        dispatch({ type:LOGIN, payload: res.user})
        
      })

    .catch((err) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // ..
        setError(err.message)
      });
  }

  return {error , signup }
}

export default useSignup
