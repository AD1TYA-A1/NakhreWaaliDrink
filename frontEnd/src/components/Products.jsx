import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import EndlessCarousel from './carousel';
import Footer from './Footer';

const Products = () => {
  const navigate = useNavigate();
  const [DrinkName, setDrinkName] = useState("");
  const selectDrink = async (e) => {
    setDrinkName(e.currentTarget.getAttribute('name'));
  }
  useEffect(() => {
    // Navigate to checkout with state
      if (DrinkName.trim() !== "") {
      navigate('/checkout', { state: { drinkName: DrinkName } });
    }
  }, [DrinkName]);

  return (
    <>
      <Navbar />
      <EndlessCarousel />
      <div className="topSellers w-full max-w-7xl mx-auto mt-16 px-6 md:px-8 lg:px-12 pb-16">
        <div className="heading font-bold text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-14 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Top Sales
        </div>
        <div className='flex flex-col gap-16 md:gap-20'>
          <div className="row flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-12">
            <div className="group col w-full sm:w-72 md:w-80 lg:w-[340px] h-72 md:h-80 lg:h-[360px] flex flex-col items-center justify-center relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="src\assets\Drinks\Smoothie.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-blue-500/50 md:group-hover:h-[95%] md:group-hover:w-[95%] md:group-hover:shadow-blue-600/60 transition-all duration-300 cursor-pointer absolute object-cover"
                alt="Smoothie"
              />

              <div onClick={selectDrink} name="Shahi Sparkle" className="absolute top-[65%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-md text-white border-0 py-3 px-8 rounded-full font-bold transition-all duration-500 cursor-pointer text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 z-10" >
                BUY NOW
              </div>
              <div name="Shahi Sparkle" className="name font-bold absolute top-8 md:top-[-15%] w-auto px-6 md:px-8 flex items-center justify-center left-1/2 -translate-x-1/2 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-8 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md cursor-pointer border-0 py-3 rounded-full transition-all duration-500 text-sm md:text-base shadow-lg z-10">
                Shahi Sparkle
              </div>
            </div>
            <div className="group col w-full sm:w-72 md:w-80 lg:w-[340px] h-72 md:h-80 lg:h-[360px] flex flex-col items-center justify-center relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="src\assets\Drinks\Smoothie.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-blue-500/50 md:group-hover:h-[95%] md:group-hover:w-[95%] md:group-hover:shadow-blue-600/60 transition-all duration-300 cursor-pointer absolute object-cover"
                alt="Smoothie"
              />

              <div onClick={selectDrink} name="Juggad Juice" className="absolute top-[65%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-md text-white border-0 py-3 px-8 rounded-full font-bold transition-all duration-500 cursor-pointer text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 z-10" >
                BUY NOW
              </div>
              <div className="name font-bold absolute top-8 md:top-[-15%] w-auto px-6 md:px-8 flex items-center justify-center left-1/2 -translate-x-1/2 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-8 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md cursor-pointer border-0 py-3 rounded-full transition-all duration-500 text-sm md:text-base shadow-lg z-10">
                Jugaad Juice
              </div>
            </div>
            <div className="group col w-full sm:w-72 md:w-80 lg:w-[340px] h-72 md:h-80 lg:h-[360px] flex flex-col items-center justify-center relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="src\assets\Drinks\Smoothie.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-blue-500/50 md:group-hover:h-[95%] md:group-hover:w-[95%] md:group-hover:shadow-blue-600/60 transition-all duration-300 cursor-pointer absolute object-cover"
                alt="Smoothie"
              />

              <div onClick={selectDrink} name="Thanda Thumka" className="absolute top-[65%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-md text-white border-0 py-3 px-8 rounded-full font-bold transition-all duration-500 cursor-pointer text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 z-10" >
                BUY NOW
              </div>
              <div className="name font-bold absolute top-8 md:top-[-15%] w-auto px-6 md:px-8 flex items-center justify-center left-1/2 -translate-x-1/2 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-8 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md cursor-pointer border-0 py-3 rounded-full transition-all duration-500 text-sm md:text-base shadow-lg z-10">
                Thanda Thumka
              </div>
            </div>
          </div>

          <div className="heading font-bold text-3xl md:text-4xl lg:text-5xl mt-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Freshers
          </div>

          <div className="row flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-12">
            <div className="group col w-full sm:w-72 md:w-80 lg:w-[340px] h-72 md:h-80 lg:h-[360px] flex flex-col items-center justify-center relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="src\assets\Drinks\pinkDrink.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-pink-500/50 md:group-hover:h-[95%] md:group-hover:w-[95%] md:group-hover:shadow-pink-600/60 transition-all duration-300 cursor-pointer absolute object-cover"
                alt="pinkDrink"
              />

              <div onClick={selectDrink} name="Jala Khatta Crush" className="absolute top-[65%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-1/2 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 backdrop-blur-md text-white border-0 py-3 px-8 rounded-full font-bold transition-all duration-500 cursor-pointer text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 z-10" >
                BUY NOW
              </div>
              <div className="name font-bold absolute top-8 md:top-[-15%] w-auto px-6 md:px-8 flex items-center justify-center left-1/2 -translate-x-1/2 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-8 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md cursor-pointer border-0 py-3 rounded-full transition-all duration-500 text-sm md:text-base shadow-lg z-10">
                Kala Khatta Crush
              </div>
            </div>
            <div className="group col w-full sm:w-72 md:w-80 lg:w-[340px] h-72 md:h-80 lg:h-[360px] flex flex-col items-center justify-center relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="src\assets\Drinks\pinkDrink.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-pink-500/50 md:group-hover:h-[95%] md:group-hover:w-[95%] md:group-hover:shadow-pink-600/60 transition-all duration-300 cursor-pointer absolute object-cover"
                alt="pinkDrink"
              />

              <div onClick={selectDrink} name="Toofani Tonic" className="absolute top-[65%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-1/2 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 backdrop-blur-md text-white border-0 py-3 px-8 rounded-full font-bold transition-all duration-500 cursor-pointer text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 z-10" >
                BUY NOW
              </div>
              <div className="name font-bold absolute top-8 md:top-[-15%] w-auto px-6 md:px-8 flex items-center justify-center left-1/2 -translate-x-1/2 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-8 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md cursor-pointer border-0 py-3 rounded-full transition-all duration-500 text-sm md:text-base shadow-lg z-10">
                Toofani Tonic
              </div>


            </div>
            <div className="group col w-full sm:w-72 md:w-80 lg:w-[340px] h-72 md:h-80 lg:h-[360px] flex flex-col items-center justify-center relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="src\assets\Drinks\pinkDrink.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-pink-500/50 md:group-hover:h-[95%] md:group-hover:w-[95%] md:group-hover:shadow-pink-600/60 transition-all duration-300 cursor-pointer absolute object-cover"
                alt="pinkDrink"
              />

              <div onClick={selectDrink} name="Patakha" className="absolute top-[65%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-1/2 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 backdrop-blur-md text-white border-0 py-3 px-8 rounded-full font-bold transition-all duration-500 cursor-pointer text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 z-10" >
                BUY NOW
              </div>
              <div className="name font-bold absolute top-8 md:top-[-15%] w-auto px-6 md:px-8 flex items-center justify-center left-1/2 -translate-x-1/2 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-8 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md cursor-pointer border-0 py-3 rounded-full transition-all duration-500 text-sm md:text-base shadow-lg z-10">
                Patakha
              </div>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products;