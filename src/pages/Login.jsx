import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-center text-2xl bg-black text-white rounded'>Login</h1>
    <div class="card-body">
      <form class="fieldset">
        <label class="label">Email</label>
        <input type="email" class="input" placeholder="Email" />
        <label class="label">Password</label>
        <input type="password" class="input" placeholder="Password" />
        <div><a class="link link-hover">Forgot password?</a></div>
        <button class="btn btn-neutral mt-4">Login</button>
      </form>
    </div>
    <Link to="/" className=' btn btn-primary'><button>Home</button></Link>
  </div>
    </div>
  )
}

export default Login