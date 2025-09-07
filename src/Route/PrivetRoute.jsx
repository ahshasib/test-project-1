import React, { use } from 'react'
import { Authcontext } from '../context/Authcontext'
import { Navigate } from 'react-router'


const PrivetRoute = ({children}) => {

    const {user, loading} = use(Authcontext)
    if(loading){
        return <span class="loading loading-spinner text-primary"></span>
    }

    if(!user){
        return <Navigate to="/login"></Navigate>
    }
  return children
}

export default PrivetRoute