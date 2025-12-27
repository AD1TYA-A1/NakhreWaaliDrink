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
      <div className="topSellers w-[90vw] mx-auto mt-10 px-4">
        <div className="heading font-bold text-2xl md:text-3xl mb-6">
          Top Sales
        </div>
        <div className='flex flex-col gap-10'>
          <div className="row flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-10 mt-6 md:mt-12">
            <div className="group col w-full sm:w-64 md:w-80 h-60 flex flex-col items-center justify-center relative">
              <img
                src="src\assets\Drinks\Smoothie.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-blue-700 group-hover:h-full group-hover:w-full transition-all duration-100 cursor-pointer absolute"
                alt="Smoothie"
              />

              <div onClick={selectDrink} name="Shahi Sparkle" className="absolute top-[60%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:top-1/2 bg-white/20 backdrop-blur-md text-white border border-white/30 py-2 px-6 rounded-lg font-semibold transition-all duration-500 cursor-pointer text-sm md:text-base" >
                BUY NOW
              </div>
              <div name="Shahi Sparkle" className="name font-bold absolute top-[-10%] w-48 md:w-56 flex items-center justify-center left-1/2 -translate-x-1/2 text-black opacity-0 group-hover:opacity-100 group-hover:top-10 bg-black/20 backdrop-blur-md cursor-pointer border border-white/30 py-2 px-4 md:px-6 rounded-lg transition-all duration-500 text-sm md:text-base">
                Shahi Sparkle
              </div>
            </div>
            <div className="group col w-full sm:w-64 md:w-80 h-60 flex flex-col items-center justify-center relative">
              <img
                src="src\assets\Drinks\Smoothie.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-blue-700 group-hover:h-full group-hover:w-full transition-all duration-100 cursor-pointer absolute"
                alt="Smoothie"
              />

              <div onClick={selectDrink} name="Juggad Juice" className="absolute top-[60%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:top-1/2 bg-white/20 backdrop-blur-md text-white border border-white/30 py-2 px-6 rounded-lg font-semibold transition-all duration-500 cursor-pointer text-sm md:text-base" >
                BUY NOW
              </div>
              <div className="name font-bold absolute top-[-10%] w-48 md:w-56 flex items-center justify-center left-1/2 -translate-x-1/2 text-black opacity-0 group-hover:opacity-100 group-hover:top-10 bg-black/20 backdrop-blur-md cursor-pointer border border-white/30 py-2 px-4 md:px-6 rounded-lg transition-all duration-500 text-sm md:text-base">
                Jugaad Juice
              </div>
            </div>
            <div className="group col w-full sm:w-64 md:w-80 h-60 flex flex-col items-center justify-center relative">
              <img
                src="src\assets\Drinks\Smoothie.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-blue-700 group-hover:h-full group-hover:w-full transition-all duration-100 cursor-pointer absolute"
                alt="Smoothie"
              />

              <div onClick={selectDrink} name="Thanda Thumka" className="absolute top-[60%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:top-1/2 bg-white/20 backdrop-blur-md text-white border border-white/30 py-2 px-6 rounded-lg font-semibold transition-all duration-500 cursor-pointer text-sm md:text-base" >
                BUY NOW
              </div>
              <div className="name font-bold absolute top-[-10%] w-48 md:w-56 flex items-center justify-center left-1/2 -translate-x-1/2 text-black opacity-0 group-hover:opacity-100 group-hover:top-10 bg-black/20 backdrop-blur-md cursor-pointer border border-white/30 py-2 px-4 md:px-6 rounded-lg transition-all duration-500 text-sm md:text-base">
                Thanda Thumka
              </div>
            </div>
          </div>

          <div className="heading font-bold text-2xl md:text-3xl mt-6">
            Freshers
          </div>

          <div className="row flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="group col w-full sm:w-64 md:w-80 h-60 flex flex-col items-center justify-center relative">
              <img
                src="src\assets\Drinks\pinkDrink.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-blue-700 group-hover:h-full group-hover:w-full transition-all duration-100 cursor-pointer absolute"
                alt="pinkDrink"
              />

              <div onClick={selectDrink} name="Jala Khatta Crush" className="absolute top-[60%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:top-1/2 bg-black/20 backdrop-blur-md text-white border border-white/30 py-2 px-6 rounded-lg font-semibold transition-all duration-500 cursor-pointer text-sm md:text-base" >
                BUY NOW
              </div>
              <div className="name font-bold absolute top-[-10%] w-48 md:w-56 flex items-center justify-center left-1/2 -translate-x-1/2 text-black opacity-0 group-hover:opacity-100 group-hover:top-10 bg-black/20 backdrop-blur-md cursor-pointer border border-white/30 py-2 px-4 md:px-6 rounded-lg transition-all duration-500 text-sm md:text-base">
                Kala Khatta Crush
              </div>
            </div>
            <div className="group col w-full sm:w-64 md:w-80 h-60 flex flex-col items-center justify-center relative">
              <img
                src="src\assets\Drinks\pinkDrink.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-blue-700 group-hover:h-full group-hover:w-full transition-all duration-100 cursor-pointer absolute"
                alt="pinkDrink"
              />

              <div onClick={selectDrink} name="Toofani Tonic" className="absolute top-[60%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:top-1/2 bg-black/20 backdrop-blur-md text-white border border-white/30 py-2 px-6 rounded-lg font-semibold transition-all duration-500 cursor-pointer text-sm md:text-base" >
                BUY NOW
              </div>
              <div className="name font-bold absolute top-[-10%] w-48 md:w-56 flex items-center justify-center left-1/2 -translate-x-1/2 text-black opacity-0 group-hover:opacity-100 group-hover:top-10 bg-black/20 backdrop-blur-md cursor-pointer border border-white/30 py-2 px-4 md:px-6 rounded-lg transition-all duration-500 text-sm md:text-base">
                Toofani Tonic
              </div>


            </div>
            <div className="group col w-full sm:w-64 md:w-80 h-60 flex flex-col items-center justify-center relative">
              <img
                src="src\assets\Drinks\pinkDrink.png"
                className="w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-blue-700 group-hover:h-full group-hover:w-full transition-all duration-100 cursor-pointer absolute"
                alt="pinkDrink"
              />

              <div onClick={selectDrink} name="Patakha" className="absolute top-[60%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:top-1/2 bg-black/20 backdrop-blur-md text-white border border-white/30 py-2 px-6 rounded-lg font-semibold transition-all duration-500 cursor-pointer text-sm md:text-base" >
                BUY NOW
              </div>
              <div className="name font-bold absolute top-[-10%] w-48 md:w-56 flex items-center justify-center left-1/2 -translate-x-1/2 text-black opacity-0 group-hover:opacity-100 group-hover:top-10 bg-black/20 backdrop-blur-md cursor-pointer border border-white/30 py-2 px-4 md:px-6 rounded-lg transition-all duration-500 text-sm md:text-base">
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