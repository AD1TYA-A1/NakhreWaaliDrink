import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const Orders = () => {
  const location = useLocation();
  const [order, setOrder] = useState([]);
  const [email, setEmail] = useState("")

  useEffect(() => {
    setEmail(location.state?.Email);
  }, [location.state?.Email])


  useEffect(() => {
    if (!email) {
      return;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:3000/api/users/api/findOrder", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOrder(result);
      })
      .catch((error) => console.error(error));
  }, [email])

  // useEffect(() => {
  // }, [order]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-10 pt-10 pb-10 px-4">
        <div className="text-2xl md:text-4xl font-bold">
          Here are your orders
        </div>
        <div className="name w-full">
          {
            order.order && order.order.length > 0 ? (
              order.order.map((item, index) => (
                <div key={item._id || item.id || `order-${index}`} className="w-full max-w-2xl mx-auto bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-8 mb-6 border border-slate-700 hover:border-blue-500 group">
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-inner min-h-[280px]">
                    <div className="flex items-center justify-between mb-6 pb-5 border-b border-slate-700 group-hover:border-blue-500/30 transition-colors duration-300">
                      <div className="name flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-2xl">{item.name?.charAt(0) || "?"}</span>
                        </div>
                        <div>
                          <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Customer Name</span>
                          <span className="text-2xl font-bold text-white">{item.name}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bottleName flex items-center gap-4 mb-5 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-200">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🥤</span>
                      </div>
                      <div>
                        <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Drink</span>
                        <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{item.bottleName}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-700">
                      <div className="quantity flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
                          <span className="text-white text-xl">📦</span>
                        </div>
                        <div>
                          <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Quantity</span>
                          <span className="text-3xl font-bold text-green-400">{item.quantity}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Total Price</span>
                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Rs.1200</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-slate-700">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center mb-8 shadow-xl">
                  <span className="text-7xl">📭</span>
                </div>
                <p className="text-slate-400 text-3xl font-semibold tracking-wide mb-3">No Orders Found</p>
                <p className="text-slate-500 text-lg">Your order list is empty</p>
              </div>
            )
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Orders