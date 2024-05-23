import React, { useState } from 'react'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from "firebase/auth";

// SIGNOUT FB
const useLogin = () => {
    const[error, setError] = useState(null)

    // login user
    const login = (email, password) => {
   signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
        // // Signed in 
        // const user = userCredential.user;
        // // ...
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