import React, {  useContext, useState } from 'react'
import { Link } from 'react-router'
import { auth } from '../firebase/firebase.config';
import {  sendEmailVerification, updateProfile } from 'firebase/auth';
import { Authcontext } from './../context/Authcontext';

const Reg = () => {
  const {createUser} = useContext(Authcontext)

  const [user,setuser] = useState(null)

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
  

    createUser(email, password)
    
  .then((userCredential) => {

//email verification
sendEmailVerification(auth.currentUser)
.then(() => {
  console.log("Verification email sent to:", auth.currentUser.email);
})


    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name,
    })
    .then(() => {
      setuser({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      });
    })

    .catch((error) => {
      console.error("Profile update error:", error.message);
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });


  }

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-center text-2xl bg-black text-white rounded'>registration</h1>
        <div class="card-body">
          <form class="fieldset" onSubmit={handleSubmit}>
            <label class="label">Name</label>
            <input type="text" class="input" placeholder="Name" name='name'/>
            <label class="label">Email</label>
            <input type="email" class="input" placeholder="Email" name='email'/>
            <label class="label">Password</label>
            <input type="password" class="input" placeholder="Password" name='password'/>
           
            <button class="btn btn-neutral mt-4" type='submit'>Login</button>
          </form>
        </div>
        <Link to="/" className=' btn btn-primary'><button>Home</button></Link>
      </div>
      <div>
      {user && (
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <h1 className="text-xl font-bold mb-2">User Information</h1>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>UID:</strong> {user.uid}</p>
            </div>
          )}
      </div>
    </div>
  )
}

export default Reg