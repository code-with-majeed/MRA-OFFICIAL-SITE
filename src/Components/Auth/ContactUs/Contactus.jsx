import React, { useState, useEffect } from "react";
import { MdOutlineLocalPhone, MdLocationPin } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const services = [
  "General Inquiry",
  "Project Consultation",
  "Technical Support",
  "Other Requests",
];

const otherOptions = [
  "Web Development",
  "UI / UX Design",
  "SEO",
  "Mobile App Development",
  "Maintenance & Support",
];

const Contactus = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedOtherService, setSelectedOtherService] = useState(""); // 🔥 single select
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full flex-1">
      {/* TOP TEXT - Same width as navbar */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mt-6 mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl font-extrabold">Contact Us</h2>
          <p className="text-gray-500 mt-2">
            Any question or remarks? Just write us a message!
          </p>
        </div>
      </div>

      <section className="w-full pb-12">
        {/* Main container with same width as navbar */}
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl shadow-xl overflow-hidden">
            {/* LEFT - Contact Info */}
            <div className="bg-blue-800 text-white p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Contact Information
                </h3>
                <p className="text-blue-100 mb-6 text-sm sm:text-base">
                  Say something to start a live chat!
                </p>

                <ul className="space-y-4 sm:space-y-5 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start">
                    <MdOutlineLocalPhone className="text-xl mt-0.5 flex-shrink-0" />
                    <span>+92 301 8144802</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdLocationPin className="text-xl mt-0.5 flex-shrink-0" />
                    <span>
                      Office#04, Block#17C, Main Service Rd E, G-11/3, Islamabad
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 mt-6 sm:mt-8">
                <a
                  href="https://www.linkedin.com/company/mradevs/posts/?feedView=all"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-blue-800 transition"
                >
                  <TiSocialLinkedinCircular className="text-xl sm:text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/mra.devs/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-blue-800 transition"
                >
                  <SlSocialInstagram className="text-lg sm:text-xl" />
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white p-6 sm:p-8">
              <form className="space-y-4 sm:space-y-6">
                {/* INPUT GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {["First Name", "Last Name", "Email", "Phone Number"].map(
                    (label) => (
                      <div key={label} className="flex flex-col">
                        <label className="text-xs sm:text-sm text-gray-500 font-semibold mb-1">
                          {label}
                        </label>
                        <input
                          type="text"
                          className="border-b border-gray-300 py-2 focus:outline-none focus:border-blue-700 text-sm sm:text-base"
                        />
                      </div>
                    )
                  )}
                </div>

                {/* SERVICES */}
                <div>
                  <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-700">
                    Select Service
                  </p>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {services.map((service) => (
                      <div
                        key={service}
                        onClick={() => {
                          setSelectedService(service);
                          if (service !== "Other Requests") {
                            setSelectedOtherService(""); // reset
                          }
                        }}
                        className="flex items-center gap-2 cursor-pointer hover:scale-105 transition"
                      >
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedService === service
                              ? "border-blue-700"
                              : "border-gray-400"
                          }`}
                        >
                          {selectedService === service && (
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-700 rounded-full" />
                          )}
                        </div>
                        <span
                          className={`text-xs sm:text-sm ${
                            selectedService === service
                              ? "text-blue-700 font-semibold"
                              : "text-gray-700"
                          }`}
                        >
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* OTHER REQUESTS OPTIONS (SINGLE SELECT) */}
                  {selectedService === "Other Requests" && (
                    <div className="mt-4 sm:mt-5 flex flex-wrap gap-3 sm:gap-4">
                      {otherOptions.map((item) => (
                        <div
                          key={item}
                          onClick={() => setSelectedOtherService(item)}
                          className="flex items-center gap-2 cursor-pointer hover:scale-105 transition"
                        >
                          <div
                            className={`w-4 h-4 sm:w-5 sm:h-5 border-2 rounded flex items-center justify-center ${
                              selectedOtherService === item
                                ? "border-blue-700"
                                : "border-gray-400"
                            }`}
                          >
                            {selectedOtherService === item && (
                              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-700 rounded" />
                            )}
                          </div>
                          <span
                            className={`text-xs sm:text-sm ${
                              selectedOtherService === item
                                ? "text-blue-700 font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-xs sm:text-sm text-gray-500 font-semibold mb-1 block">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-700 text-sm sm:text-base"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-5 sm:px-6 py-2 rounded-lg hover:bg-blue-800 hover:scale-105 transition text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;