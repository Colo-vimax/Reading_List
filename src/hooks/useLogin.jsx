import React, { useState } from 'react'
import { useAuthContext } from './useAuthContext';
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from "firebase/auth";


// SIGNOUT FB
const useLogin = () => {
    const[error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    // login user
    const login = async(email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // // Signed in 
            // const user = userCredential.user;
            // // ...
          
            dispatch({ type:'LOGIN', payload:res.user })
            console.log("user signin:", res.user);
        })
        .catch((err) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            setError(err.message);
        });

    }
  return { error , login }
}

export default useLogin