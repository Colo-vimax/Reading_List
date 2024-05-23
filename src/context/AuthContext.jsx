import React, { createContext, useEffect, useReducer } from 'react';
import { Auth } from '../firebase/config';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, user: action.payload}            
        case 'LOGOUT':
            return {...state, user: null }
        case 'AUTH_IS_READY':
            return {...state, user: action.payload , authIsReady: true}
        default:
            return state
    }

}
export const AuthContextProvider = ({ children }) => {

    const [state, dispatch]= useReducer(authReducer, { 
        user : null,
        authIsReady : false
    })
    
    // PERFORM FB INITIAL CHECK(user/loggin or not)
    useEffect(() => {
        const unsub = Auth.onAuthStateChanged((user) => {
            dispatch({type : 'AUTH_IS_READY', payload: user })
            unsub()
        })
    },[])
   
    // console.log({'Authcontext state': state});
    return (
        <AuthContext.Provider value={{...state, dispatch }}>
            { children }
        </AuthContext.Provider>

    )
}