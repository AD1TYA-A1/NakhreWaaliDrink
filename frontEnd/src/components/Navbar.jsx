import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b-2 border-slate-700 flex flex-col md:flex-row items-center justify-between md:justify-around h-auto md:h-20 top-0 z-10 shadow-2xl backdrop-blur-sm sticky px-4 py-4 md:py-0 gap-4 md:gap-0'>
                
                {/* Navigation Links */}
                <div className='flex items-center gap-4 md:gap-8 order-1'>
                    <Link to={"/"} className='text-white font-semibold text-sm md:text-lg hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group'>
                        Home
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                    
                    <Link to={"/"} className='text-white font-semibold text-sm md:text-lg hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group'>
                        About
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                    
                    <Link to={"/"} className='text-white font-semibold text-sm md:text-lg hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group'>
                        Contact
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                </div>
                
                {/* Search Bar */}
                <div className="search flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-slate-800/50 px-3 sm:px-4 py-2 rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg order-3 md:order-2 w-full sm:w-auto">
                    <input 
                        type="text" 
                        className='bg-slate-900/80 border-2 border-slate-700 rounded-full px-4 sm:px-6 h-10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 w-full sm:w-48 md:w-64 text-sm md:text-base' 
                        placeholder='Search Here' 
                    />
                    <div className="searchButton bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full px-4 sm:px-6 py-2 cursor-pointer text-white font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 text-sm md:text-base w-full sm:w-auto text-center">
                        Search
                    </div>
                </div>

                {/* Orders Button */}
                <Link 
                    className='bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-sm md:text-lg px-4 sm:px-6 py-2 md:py-3 rounded-full shadow-lg hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 order-2 md:order-3' 
                    to={"/orders"}
                >
                    Orders😻
                </Link>
            </nav>
        </>
    )
}

export default Navbar