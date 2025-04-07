import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <form className="bg-white text-black p-8 rounded-2xl shadow-md w-full max-w-md">
    <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

    <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
        Confirm Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      className="w-full cursor-pointer bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition-colors"
    >
      Register
    </button>

    <p className="mt-4 text-sm text-center text-gray-600">
      Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
    </p>
  </form>
</div>

  )
}

export default Register
