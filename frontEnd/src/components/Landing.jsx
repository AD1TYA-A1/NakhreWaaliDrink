import React from 'react'
import { Link } from 'react-router-dom';
import bottle from '../assets/bottle.png';

const Landing = () => {
    // Store bottle in an array/object if you want consistency with carousel pattern
    const heroImage = bottle;

    return (
        <>
            <div className='m-auto min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden px-6 py-12 lg:py-0'>
                <div className='w-full lg:w-1/2 flex items-center justify-center flex-col gap-6 md:gap-8 lg:gap-10 order-2 lg:order-1 lg:pl-8 xl:pl-16'>
                    <div className='flex items-center justify-center flex-col text-center px-4 space-y-2 md:space-y-3'>
                        <div className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 font-light tracking-wide animate-fade-in'>
                            Welcome to Our
                        </div>
                        <div className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 drop-shadow-sm'>
                            Shopping App
                        </div>
                    </div>
                    <div className="about flex items-center justify-center text-gray-700 font-medium text-center px-4 md:px-8 lg:px-12 xl:px-16 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio maiores animi.
                    </div>
                    <div className='relative group'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500'></div>
                        <div className='relative bg-white border-2 border-gray-800 rounded-full px-8 py-3 md:px-10 md:py-4 flex items-center justify-center cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95'>
                            <Link to="/products" className='font-semibold text-base md:text-lg tracking-wide'>
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex items-center justify-center lg:pr-8 xl:pr-16 order-1 lg:order-2 mb-8 lg:mb-0'>
                    <div className='relative w-3/4 md:w-2/3 lg:w-full max-w-md lg:max-w-lg xl:max-w-xl'>
                        <div className='absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-200 rounded-full blur-3xl opacity-30 animate-pulse'></div>
                        <img 
                            src={heroImage} 
                            alt="Bottle" 
                            className='relative w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out' 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;
