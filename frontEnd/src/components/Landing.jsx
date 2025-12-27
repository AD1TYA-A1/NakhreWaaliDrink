import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
            <div className='m-auto min-h-screen flex flex-col lg:flex-row bg-gray-300 overflow-hidden px-4 py-8 lg:py-0'>
                <div className='w-full lg:w-1/2 flex items-center justify-center flex-col gap-4 md:gap-6 lg:gap-8 order-2 lg:order-1'>
                    <div className='flex items-center justify-center flex-col text-center px-4'>
                        <div className='text-2xl md:text-3xl lg:text-4xl'>
                            Welcome to Our
                        </div>
                        <div className='text-4xl md:text-5xl lg:text-6xl font-medium'>
                            Shopping App
                        </div>
                    </div>
                    <div className="about flex items-center justify-center text-gray-900 font-[600] text-center px-4 md:px-8 lg:px-0 text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio maiores animi.
                    </div>
                    <div className='border-2 rounded-4xl w-[150px] md:w-[180px] items-center flex justify-center h-[40px] md:h-[45px] cursor-pointer hover:text-xl md:hover:text-2xl hover:w-[180px] md:hover:w-[200px] transition-all duration-300'>
                        <Link to="/products">
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex items-center justify-center lg:pl-20 order-1 lg:order-2 mb-8 lg:mb-0'>
                    <img src="src\assets\bottle.png" alt="Bottle" className='w-3/4 md:w-2/3 lg:w-full max-w-md lg:max-w-none object-contain lg:relative lg:bottom-9 lg:left-10' />
                </div>
            </div>
        </>
    )
}

export default Landing;