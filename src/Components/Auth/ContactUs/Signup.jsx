import React, { useState, useEffect } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error('Email is required!');
    } else if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email!');
    } else {
      toast.success('Subscribed successfully!');
      setEmail('');
    }
  };

  return (
    <>
      <div className="relative w-full">
        {/* Main Signup Container */}
        <div
          className={`bg-blue-600 w-full max-w-[1280px] h-auto min-h-[180px] xs:min-h-[200px] sm:min-h-[220px] md:min-h-[250px] lg:min-h-[300px] xl:min-h-[358px] rounded-lg flex items-center justify-center mx-auto mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 transition-all duration-1000 transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div
            className={`text-center w-full max-w-[90%] xs:max-w-[85%] sm:max-w-[80%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] px-4 xs:px-4 sm:px-5 md:px-6 lg:px-8 transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-5 transition-all duration-500 hover:scale-105 leading-tight">
              Sign up to our newsletter
            </h1>

            <p className="text-[#C4C4C4] text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 px-1 xs:px-2 sm:px-2 md:px-3 leading-relaxed mx-auto w-full">
              Receive latest news, update, and many other things every week.
            </p>

            {/* Form container with same width as text content */}
            <form 
              onSubmit={handleSubmit} 
              className="relative transition-all duration-500 hover:scale-[1.02] w-full max-w-full mx-auto"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 xs:px-5 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 md:py-3.5 rounded-full text-gray-700 bg-white outline-none pr-10 xs:pr-12 sm:pr-14 text-sm xs:text-base sm:text-base md:text-lg border-2 border-transparent focus:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 xs:right-2 sm:right-2.5 md:right-3 top-1/2 transform -translate-y-1/2 bg-[#062397] p-1.5 xs:p-2 sm:p-2.5 md:p-2.5 rounded-full hover:opacity-90 hover:scale-110 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Subscribe"
                >
                  <FaLocationArrow className="text-white text-xs xs:text-sm sm:text-sm md:text-base" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Toast Container */}
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Signup;