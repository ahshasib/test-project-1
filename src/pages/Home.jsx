import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='bg-cyan-500'>
        <h1 className='text-center font-bold text-5xl text-indigo-500 py-10'>This our home page</h1>
        <div className='flex justify-center items-center w-full h-screen gap-5 '>
            <Link to="/login" className=' btn btn-primary'><button>Login</button></Link>
            <Link to="/registration" className=' btn btn-primary'><button>registration</button></Link>
        </div>
    </div>
  )
}

export default Home