import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 mx-auto max-w-lg'>
      <h1 className='font-semibold text-center text-3xl my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' >
       <input type="text" placeholder='username' id='username' 
       className='rounded-lg border p-3' />
       <input type="text" placeholder='email' id='email' 
       className='rounded-lg border p-3' />
       <input type="text" placeholder='password' id='password' 
       className='rounded-lg border p-3' />
       <button className='text-white bg-slate-700 p-3 rounded-lg hover:opacity-90 disabled:opacity-80 
       uppercase'
       >Sign Up</button>
      </form>
      <div className='flex gap-3'> 
        <p>Have an account</p>
        <Link to='/sign-in'>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
