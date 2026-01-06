import React from 'react'
import CustomButton from '../common/CustomButton'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center px-20 py-4'>
        {/* left navbar */}
        <div className='flex items-center gap-4'>
            <img src="/logo.png" alt="WanderWise Logo" className='w-12 h-12 rounded-full'/>
            <h2 className='text-3xl font-bold'>WanderWise</h2>
        </div>


        {/* right navbar */}
        <div className='flex items-center gap-10'>
            <nav className='flex items-center gap-6 [&>a]:text-lg [&>a]:font-medium [&>a]:hover:text-blue-600'>
                <a href="#">Features</a>
                <a href="#">About</a>
                <a href='#'>Famous Trips</a>
                <a href="#">Contact</a>

            </nav>
            <div>
                <CustomButton text="Sign in" />
                
            </div>
        </div>
    </header>
  )
}

export default Navbar
