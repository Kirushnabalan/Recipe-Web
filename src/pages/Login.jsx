import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form  className="bg-white text-black p-8 rounded-2xl shadow-md w-full max-w-md" >
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <button type="submit" className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 cursor-pointer">Login</button>
        <p className="mt-4 text-sm text-gray-600">Don't have an account? <Link to='/register' className="text-blue-600 hover:underline">Register</Link></p>
      </form>
    </div>
  )
}

export default Login
