import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full bg-black text-white flex items-center justify-between py-3 md:py-7 lg:py-6 z-50'>

        <h1 className='font-mono ml-5 cursor-pointer md:text-5xl lg:text-2xl lg:ml-24'>Ekomify</h1>

        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3 cursor-pointer md:w-20 md:h-20 lg:hidden">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <div className='hidden lg:flex lg:items-center mr-28'>
            <div className='border-r border-white p-0 font-bold'>
            <a href="#" className='mr-10 hover:text-green-500'>Premium</a>
            <a href="#" className='mr-10 hover:text-green-500'>Support</a>
            <a href="#" className='mr-3 hover:text-green-500'>Download</a>
            </div>
        <div>
            <div className='border-l border-white ml-0 '></div>
            <a href="#" className='ml-4 hover:text-green-500'>Sign up</a>
            <a href="#" className=' ml-6 hover:text-green-500'>Log in</a>
        </div>
        </div>


    </nav>
  )
}
