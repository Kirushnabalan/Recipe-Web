import React from 'react'

const PageFooter = () => {
  return (
    <div>
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4">
        <p className='text-gray-600 dark:text-gray-300'>
            &copy; {new Date().getFullYear()} Flavour. All rights reserved.
        </p>
    </footer>
    </div>
  )
}

export default PageFooter
