import React from 'react'
import CustomButton from '../common/CustomButton'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className= ' h-200 pt-40 items-center justify-center px-40 relative overflow-hidden'>
        <div className='flex flex-col items-center gap-8 text-white z-10 text-center'>
        <h1 className='text-5xl font-bold'>Plan your trip With wander wise</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Illum neque error iusto omnis expedita officiis. Eligendi, officiis nam aliquid fuga, 
            vel eveniet temporibus eaque esse pariatur tempora cupiditate, perferendis fugit?
        </p>
        <CustomButton text="Get Started"/>
        <Button variant='secondary'>Hello</Button>
        </div>

        {/*background image*/}
        <div className='absolute -z-10 left-0 top-0 w-full h-full overflow-hidden'>
            <img className="w-full h-full"src ="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="wanderwise" />
        </div>


        {/* black overlay*/}
        <div className='absolute -z-5 left-0 top-0 w-full h-full bg-black opacity-40'></div>

    </section>
  )
}

export default Hero