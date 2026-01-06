import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const UserCheckout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [pNo, setpNo] = useState("");
  const drinkName = location.state?.drinkName;
  const [quantity, setQuantity] = useState(0);

  // State for validation errors
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    pNo: false,
    quantity: false
  });

  const nameHandle = (e) => {
    setName(e.target.value);
    // Clear error when user starts typing
    if (errors.name) {
      setErrors({ ...errors, name: false });
    }
  }

  const emailHandle = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: false });
    }
  }

  const pNoHandle = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit to 10 digits
    if (/^\d*$/.test(value) && value.length <= 10) {
      setpNo(value);
      if (errors.pNo) {
        setErrors({ ...errors, pNo: false });
      }
    }
  }

  const quantHandle = (e) => {
    setQuantity(e.target.value);
    if (errors.quantity) {
      setErrors({ ...errors, quantity: false });
    }
  }

  const submit = async () => {
    // Validate all fields
    const newErrors = {
      name: Name.trim() === "",
      email: Email.trim() === "",
      pNo: pNo.trim() === "",
      quantity: quantity === 0 || quantity === "" || quantity < 1
    };

    setErrors(newErrors);

    // Check if any field has error
    const hasErrors = Object.values(newErrors).some(error => error === true);


    // If validation passes, proceed with submission
    // console.log(Name);
    // console.log(Email);
    // console.log(pNo);
    // console.log(drinkName);
    // console.log(quantity);

    //SUBMIT TO DATABSE
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": Name,
      "email": Email,
      "pho": pNo,
      "bottleName": drinkName,
      "quantity": quantity,
      "price": quantity * 100,
      "timestamps": true
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://nakhredrinkbackend.onrender.com/api/users/api/userCheckOut", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        toast('Order Placed Redirecting to orders Section', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",

        });
        setTimeout(() => {
          navigate('/orders', { state: { Email:Email } });
        }, 2000);

      })
      .catch((error) => console.error(error));




    // Clear form after successful submission
    setEmail("");
    setName("");
    setpNo("");
    setQuantity("");

    //REDIRECT TO /PRODUCTS END POINT AFTER SUCCESS ORDER
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section className='min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-12 px-4'>
        <div className='max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 flex flex-col lg:flex-row items-start justify-center gap-8'>
          <div className="flex-1 w-full">
            <div className="title flex justify-start gap-3 flex-col mb-8">
              <div className="heading text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Checkout
              </div>
              <div className="about text-xl text-gray-600">
                A checkout counter, where you pay for the things you buy
              </div>
            </div>

            <div className="contactInfo bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg">
              <div className="heading text-2xl font-semibold mb-6 text-gray-800">
                Enter your Details Here :
              </div>
              <div className='flex flex-col gap-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className={`hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300 border-2 ${errors.name ? 'border-red-500' : 'border-purple-200'} bg-white rounded-2xl p-4 flex items-center gap-4`}>
                    <div className="image flex items-center justify-center">
                      <lord-icon
                        src="https://cdn.lordicon.com/cmopfgnr.json"
                        trigger="hover"
                        stroke="bold"
                        style={{ width: 50, height: 50 }}>
                      </lord-icon>
                    </div>
                    <div className='flex-1'>
                      <div className="label text-gray-500 text-sm mb-1">
                        Name {errors.name && <span className="text-red-500">*Required</span>}
                      </div>
                      <input
                        type="text"
                        placeholder='Enter name'
                        name='name'
                        value={Name}
                        onChange={nameHandle}
                        className={`w-full border-2 ${errors.name ? 'border-red-500' : 'border-purple-200'} pl-3 rounded-xl h-10 outline-none focus:border-purple-500 transition-colors`}
                      />
                    </div>
                  </div>

                  <div className={`hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300 border-2 ${errors.email ? 'border-red-500' : 'border-purple-200'} bg-white rounded-2xl p-4 flex items-center gap-4`}>
                    <div className="image flex items-center justify-center">
                      <lord-icon
                        src="https://cdn.lordicon.com/zuaeygxz.json"
                        trigger="hover"
                        stroke="bold"
                        style={{ width: 50, height: 50 }}>
                      </lord-icon>
                    </div>
                    <div className='flex-1'>
                      <div className="label text-gray-500 text-sm mb-1">
                        Email {errors.email && <span className="text-red-500">*Required</span>}
                      </div>
                      <input
                        type="email"
                        placeholder='Enter Email'
                        name='email'
                        onChange={emailHandle}
                        value={Email}
                        className={`w-full border-2 ${errors.email ? 'border-red-500' : 'border-purple-200'} pl-3 rounded-xl h-10 outline-none focus:border-purple-500 transition-colors`}
                      />
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className={`hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300 border-2 ${errors.pNo ? 'border-red-500' : 'border-purple-200'} bg-white rounded-2xl p-4 flex items-center gap-4`}>
                    <div className="image flex items-center justify-center">
                      <lord-icon
                        src="https://cdn.lordicon.com/sqwodxek.json"
                        trigger="hover"
                        stroke="bold"
                        style={{ width: 50, height: 50 }}>
                      </lord-icon>
                    </div>
                    <div className='flex-1'>
                      <div className="label text-gray-500 text-sm mb-1">
                        Phone Number {errors.pNo && <span className="text-red-500">*Required</span>}
                      </div>
                      <input
                        type="text"
                        maxLength="10"
                        pattern="[6-9][0-9]{9}"
                        placeholder='Enter pNo'
                        name='pNo'
                        onChange={pNoHandle}
                        value={pNo}
                        className={`w-full border-2 ${errors.pNo ? 'border-red-500' : 'border-purple-200'} pl-3 rounded-xl h-10 outline-none focus:border-purple-500 transition-colors`}
                      />
                    </div>
                  </div>

                  <div className="hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300 border-2 border-purple-200 bg-white rounded-2xl p-4 flex items-center gap-4">
                    <div className="image flex items-center justify-center">
                      <lord-icon
                        src="https://cdn.lordicon.com/yvminjjx.json"
                        trigger="hover"
                        stroke="bold"
                        style={{ width: 50, height: 50 }}>
                      </lord-icon>
                    </div>
                    <div className='flex-1'>
                      <div className="label text-gray-500 text-sm mb-1">
                        Drink
                      </div>
                      <input
                        type="text"
                        placeholder='Your Drink'
                        value={drinkName}
                        className='w-full border-2 border-purple-200 pl-3 rounded-xl h-10 outline-none bg-gray-50'
                        disabled
                      />
                    </div>
                  </div>

                  <div className={`hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300 border-2 ${errors.quantity ? 'border-red-500' : 'border-purple-200'} bg-white rounded-2xl p-4 flex items-center gap-4`}>
                    <div className="image flex items-center justify-center">
                      <lord-icon
                        src="https://cdn.lordicon.com/pynznchd.json"
                        trigger="hover"
                        stroke="bold"
                        style={{ width: 50, height: 50 }}>
                      </lord-icon>
                    </div>
                    <div className='flex-1'>
                      <div className="label text-gray-500 text-sm mb-1">
                        Quantity {errors.quantity && <span className="text-red-500">*Required</span>}
                      </div>
                      <input
                        type="number"
                        min="1"
                        placeholder='Enter Quantity'
                        name='quan'
                        onChange={quantHandle}
                        value={quantity}
                        className={`w-full border-2 ${errors.quantity ? 'border-red-500' : 'border-purple-200'} pl-3 rounded-xl h-10 outline-none focus:border-purple-500 transition-colors`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-6 w-full lg:w-96 text-white lg:sticky lg:top-8'>
            <div className="heading text-3xl font-bold mb-6 pb-3 border-b border-white/30">
              Your Order
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-purple-100">Name:</span>
                <span className="font-semibold">{Name || "-"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-100">Email:</span>
                <span className="font-semibold text-sm break-all">{Email || "-"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-100">Drink:</span>
                <span className="font-semibold">{drinkName || "-"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-100">Quantity:</span>
                <span className="font-semibold">{quantity || 0}</span>
              </div>

              <div className="pt-4 border-t border-white/30">
                <div className="flex justify-between items-center text-xl">
                  <span className="font-semibold">Total Price:</span>
                  <span className="font-bold">₹{quantity * 100}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/20 rounded-lg p-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Payment: Cash on Delivery</span>
              </div>
            </div>

            <button
              onClick={submit}
              className=" cursor-pointer w-full bg-white text-purple-600 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Place Order</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserCheckout;
