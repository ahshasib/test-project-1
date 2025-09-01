import React, { useState } from 'react'
import { Link } from 'react-router'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/firebase.config';




const Login = () => {
  const provider = new GoogleAuthProvider();
  const [user,setUser] = useState(null)

  const handleSubmit = (e) =>{
    e.preventDefault()
//for social login
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
    setUser(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


  //login with email and password
  

  }


  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-center text-2xl bg-black text-white rounded'>Login</h1>
        <div class="card-body">
          <form class="fieldset" onSubmit={handleSubmit}>
            <label class="label">Email</label>
            <input type="email" class="input" placeholder="Email" />
            <label class="label">Password</label>
            <input type="password" class="input" placeholder="Password" />
            <div><a class="link link-hover">Forgot password?</a></div>
            <button class="btn btn-neutral my-4 ">Login</button>
            <hr />
            <button class="btn bg-white text-black border-[#e5e5e5] mt-5" type='submit'>
              <svg aria-label="Google logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
          </form>
        </div>
        <Link to="/" className=' btn btn-primary'><button>Home</button></Link>
      </div>

      {user && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
        <h1 className="text-xl font-bold mb-2">User Information</h1>
        <p><strong>Name:</strong> {user.displayName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>
      )}
    </div>
  )
}

export default Login