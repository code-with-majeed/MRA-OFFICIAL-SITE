import React, { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
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
      {/* Outer container: no top padding (so heading aligns directly under navbar), bottom padding consistent with other sections */}
      <div className="w-full bg-gray-50 pt-0 pb-12 md:pb-16">
        {/* Container width matches other sections (e.g., Contactus) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl shadow-2xl transition-all duration-1000 transform ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <div
              className={`text-center px-6 py-12 md:px-8 md:py-16 transition-all duration-700 delay-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {/* Remove default h1 top margin */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight mt-0">
                Sign up to our newsletter
              </h1>

              <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Receive latest news, updates, and many other things every week.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-full text-gray-800 bg-white outline-none pr-14 text-base shadow-lg border-2 border-transparent focus:border-blue-300 focus:ring-4 focus:ring-blue-200 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-800 p-3 rounded-full hover:bg-blue-900 hover:scale-110 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl focus:ring-2 focus:ring-blue-300"
                    aria-label="Subscribe"
                  >
                    <FaPaperPlane className="text-white text-base" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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