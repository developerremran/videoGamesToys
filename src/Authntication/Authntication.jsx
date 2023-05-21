import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../FireBase/FireBase.config';


export const AuthContext = createContext()

const Authntication = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const [users, setUser] = useState([])
  const [loading, setLoading] = useState(true)


  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)

  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const singOut = () => {
    return signOut(auth)
  }

  const googleNewUser = () => {
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);

      return () => {
        return unsubscribe;
      }
      
    })
    setLoading(false)
  }, [])

  const authInfo = {
    users,
    registerUser,
    loginUser,
    singOut,
    googleNewUser,
    loading
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authntication;