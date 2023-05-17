import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../FireBase/FireBase.config';
  

export const AuthContext = createContext()

const Authntication = ({children}) => {
    const auth = getAuth(app);

  const [users, setUser] = useState(null)


  const registerUser = (email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        return ()=>{
            return unsubscribe
        }
    })
  },[])

const authInfo ={
   users,
   registerUser
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authntication;