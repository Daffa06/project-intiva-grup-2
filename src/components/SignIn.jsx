import React from 'react'
import { AiFillFacebook, AiFillGoogleSquare } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import SignUp from '../components/SignUp';

function SignIn() {
  return (
    <>
    <div className='bg-zinc-400 space-y-3 h-screen flex justify-center items-center'>
        {/* form */}
        <div className='bg-white rounded-lg shadow-lg shadow-black/10 h-96 pl-5 space-y-3 w-[350px] flex flex-col justify-center'>
            <form className='space-y-1' action="">
                <div>
                    <p className='text-center font-semibold text-2xl tracking-wide'>LOGIN</p>
                </div>
                <div className='mr-5'>
                    <p className='text-zinc-500 font-semibold'>Email</p>
                    <input className='outline-none h-10 px-5 border border-sm w-full' type="text" placeholder='Email' required/>
                </div>
                <div className='mr-5'>
                    <p className='text-zinc-500 font-semibold'>Password</p>
                    <input className='outline-none h-10 px-5 border border-sm w-full' type="password" placeholder='Password' required/>
                </div>
                <div className='flex space-y-2 gap-5 mt-1'>

                </div>
                <div className='mr-5'>
                    <button className='bg-red-400 h-10 rounded-full w-full hover:bg-red-500 duration-300 text-white font-semibold'>LOGIN</button>
                </div>
                <p className='flex justify-center font-bold'>OR</p>
                <div className='flex flex-row justify-center gap-10 text-3xl'>
                    <AiFillGoogleSquare className='rounded-full text-red-500'/>
                    <AiFillFacebook className='rounded-full text-red-500'/>
                </div>
                <div>
                    <p className='text-zinc-700'>Need an account ? <span className='text-red-500 font-semibold underline underline-offset-2'><Link to="/signUp" element={<SignUp/>}>Signup</Link></span></p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default SignIn;