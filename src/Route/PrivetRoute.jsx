import React, { use } from 'react'
import { Authcontext } from '../context/Authcontext'
import { Navigate } from 'react-router'

const PrivetRoute = ({children}) => {

    const {user} = use(Authcontext)
    
    if(!user){
        return <Navigate to="/login"></Navigate>
    }
  return children
}

export default PrivetRoute