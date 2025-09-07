import React, { useEffect, useState } from 'react'
import { Authcontext } from './Authcontext'
import { auth } from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

const createUser = (email,password) =>{
   return createUserWithEmailAndPassword(auth, email, password)
}

const loginUser = (email,password) =>{
  signInWithEmailAndPassword(auth, email, password)
}

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser({
        displayName: currentUser.displayName || currentUser.email.split('@')[0],
        email: currentUser.email,
        uid: currentUser.uid,
        photoURL: currentUser.photoURL || null,
      });
      setLoading(false)
    } else {
      setUser(null);
    }
  });

  return () => unsubscribe();
}, []);


const userInfo = {
  loading,
    user,
    createUser,
    loginUser
}

  return (
    <Authcontext.Provider value = {userInfo}>
        {children}
    </Authcontext.Provider>
  )
}

export default AuthProvider