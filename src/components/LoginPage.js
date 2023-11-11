import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
        <Header />
        <div className="flex flex-col items-center justify-center mt-32">
            <Link to="/RegisterPage" className="text-3xl mb-4 hover:text-gray-300">Regsiter by email</Link>
            <div className="flex flex-row items-center justify-center">
                Or Login with creditentials
            </div>
            <form className='formsLogin mt-5 max-w-md w-96'>
                {/* Email */}
                <div className="flex flex-col mb-4">
                    <label className="mb-1">E-mail</label>
                    <input type="text" className="border-2 border-black  py-2 rounded-md w-full" />
                </div>
                {/* Password */}
                <div className="flex flex-col mb-4">
                    <label className="mb-1">Password</label>
                    <input type="text" className="border-2 border-black py-2 rounded-md w-full" />
                </div>
                <button className="bg-black text-white p-2 rounded-md">Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage