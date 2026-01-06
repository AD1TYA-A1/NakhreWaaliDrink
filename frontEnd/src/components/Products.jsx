import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import EndlessCarousel from './carousel';
import Footer from './Footer';
import pinkDrink from '../assets/Drinks/pinkDrink.png';
import smoothie from '../assets/Drinks/Smoothie.png';

const Products = () => {
  const navigate = useNavigate();
  const [DrinkName, setDrinkName] = useState("");
  
  // Define your drinks data with images
  const topSales = [
    { name: "Shahi Sparkle", image: smoothie, color: "blue" },
    { name: "Jugaad Juice", image: smoothie, color: "blue" },
    { name: "Thanda Thumka", image: smoothie, color: "blue" }
  ];

  const freshers = [
    { name: "Kala Khatta Crush", image: pinkDrink, color: "pink" },
    { name: "Toofani Tonic", image: pinkDrink, color: "pink" },
    { name: "Patakha", image: pinkDrink, color: "pink" }
  ];

  const selectDrink = async (e) => {
    setDrinkName(e.currentTarget.getAttribute('name'));
  }

  useEffect(() => {
    if (DrinkName.trim() !== "") {
      navigate('/checkout', { state: { drinkName: DrinkName } });
    }
  }, [DrinkName, navigate]);

  const DrinkCard = ({ drink }) => (
    <div className="group col w-full sm:w-72 md:w-80 lg:w-[340px] h-72 md:h-80 lg:h-[360px] flex flex-col items-center justify-center relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src={drink.image}
        className={`w-[88%] h-[85%] rounded-3xl shadow-2xl shadow-${drink.color}-500/50 md:group-hover:h-[95%] md:group-hover:w-[95%] md:group-hover:shadow-${drink.color}-600/60 transition-all duration-300 cursor-pointer absolute object-cover`}
        alt={drink.name}
      />

      <div 
        onClick={selectDrink} 
        name={drink.name} 
        className={`absolute top-[65%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-1/2 bg-gradient-to-r from-${drink.color}-600 to-${drink.color}-700 hover:from-${drink.color}-700 hover:to-${drink.color}-800 backdrop-blur-md text-white border-0 py-3 px-8 rounded-full font-bold transition-all duration-500 cursor-pointer text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 z-10`}
      >
        BUY NOW
      </div>
      
      <div className="name font-bold absolute top-8 md:top-[-15%] w-auto px-6 md:px-8 flex items-center justify-center left-1/2 -translate-x-1/2 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-8 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md cursor-pointer border-0 py-3 rounded-full transition-all duration-500 text-sm md:text-base shadow-lg z-10">
        {drink.name}
      </div>
    </div>
  );

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
            {topSales.map((drink, index) => (
              <DrinkCard key={index} drink={drink} />
            ))}
          </div>

          <div className="heading font-bold text-3xl md:text-4xl lg:text-5xl mt-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Freshers
          </div>

          <div className="row flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-12">
            {freshers.map((drink, index) => (
              <DrinkCard key={index} drink={drink} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products;
