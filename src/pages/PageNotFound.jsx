import React from 'react'

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-6">404</h1>
        <p className="text-3xl font-semibold text-gray-700">Oops! The page you are looking for does not exist.</p>
        <p className="text-lg text-gray-500 mt-4">
          It might have been moved or deleted. Please check the URL or go back to the homepage.
        </p>
        <a href="/" className="mt-6 text-lg text-blue-500 hover:text-blue-700">
          Go to Homepage
        </a>
      </div>
    </div>
  )
}

export default PageNotFound
