import React, { createContext, useContext, useState } from 'react'


export const AuthContext  = createContext();



export const  AuthProvider = ({children})=>{


    const [token , setToken ] = useState(localStorage.getItem("token"));


    const storeTokenInLS = (serverToken) =>{
        const nextToken = serverToken
         localStorage.setItem("token" , nextToken);
          setToken(nextToken);

    }

       let isLoggedIn  = !!token;   
       console.log("log in value, token ", isLoggedIn) 

    const logoutUser = () => {
      localStorage.removeItem("token");
       setToken("");
    }
    


    return <AuthContext.Provider value={{storeTokenInLS , logoutUser, isLoggedIn}}>
        {children}
    </AuthContext.Provider>
}


export const  useAuth = () =>{
 const authContextValue =  useContext(AuthContext);

 if(!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
 }
    return authContextValue;
}