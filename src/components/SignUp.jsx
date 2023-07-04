import React from 'react'
import {Link} from 'react-router-dom';
import Login from '../components/SignIn';

function SignUp() {
  return (
    <>
    <div className='bg-zinc-400 space-y-3 h-screen flex justify-center items-center'>
        {/* form */}
        <div className='bg-white rounded-lg shadow-lg shadow-black/10 h-96 pl-5 space-y-3 w-[350px] flex flex-col justify-center'>
            <form className='space-y-1' action="">
                <div>
                    <p className='text-center font-semibold text-2xl tracking-wide'>REGISTER</p>
                </div>
                <div className='mr-5'>
                    <p className='text-zinc-500 font-semibold'>Email</p>
                    <input className='outline-none h-10 px-5 border border-sm w-full' type="text" placeholder='Email' required/>
                </div>
                <div className='mr-5'>
                    <p className='text-zinc-500 font-semibold'>Password</p>
                    <input className='outline-none h-10 px-5 border border-sm w-full' type="password" placeholder='Password' required/>
                </div>
                <div className='mr-5'>
                    <p className='text-zinc-500 font-semibold'>Confirm Password</p>
                    <input className='outline-none h-10 px-5 border border-sm w-full' type="password" placeholder='Password' required/>
                </div>
                <div className='space-y-3 gap-5 mt-5'>
                    <div className='mr-5'>
                        <button className='bg-red-400 h-10 rounded-full w-full hover:bg-red-500 duration-300 text-white font-semibold'>Register</button>
                    </div>
                </div>
                <div>
                    <p className='text-zinc-700'>Already have an account ? <span className='text-red-500 font-semibold underline underline-offset-2'><Link to="/" element={<Login/>}>Login</Link></span></p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default SignUp