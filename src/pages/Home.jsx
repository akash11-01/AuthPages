import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='w-full h-full bg-gray-100'>
            <div className='w-[60%] mx-auto h-screen flex flex-col justify-center items-center'>
                <h2 className='font-bold text-xl md:text-2xl w-[80%] md:w-[500px] text-left mt-[200px] '>Welcome to the PopX</h2>
                <p className='w-[80%] md:w-[500px] text-left text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <Link to={'/register'} className='w-[80%] p-3 bg-blue-700 text-center rounded-lg font-semibold text-white md:w-[500px] m-3'>Create Account</Link>
                <Link to={'/login'} className='w-[80%] p-3 bg-slate-300 rounded-lg text-center font-semibold md:w-[500px]'>Already Registered? Login</Link>
            </div>
        </div>
    )
}
