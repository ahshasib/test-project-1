import React from 'react'
import { Authcontext } from './Authcontext'
import { auth } from '../firebase/firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const AuthProvider = ({children}) => {

const createUser = (email,password) =>{
   return createUserWithEmailAndPassword(auth, email, password)
}


const userInfo = {
    createUser,
}

  return (
    <Authcontext.Provider value = {userInfo}>
        {children}
    </Authcontext.Provider>
  )
}

export default AuthProvider