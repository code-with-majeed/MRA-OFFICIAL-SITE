import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdOutlineLocalPhone, MdEmail } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { motion } from "framer-motion";

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
  "E-commerce Solutions",
];

// Validation schema (unchanged)
const schema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "Only letters allowed"),
  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Only letters allowed"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
      "Invalid phone number (include country code)"
    ),
  service: yup.string().required("Please select a service"),
  otherService: yup.string().when("service", {
    is: "Other Requests",
    then: (schema) => schema.required("Please specify your request"),
  }),
  message: yup.string().required("Message is required"),
});

const Contactus = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedOtherService, setSelectedOtherService] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  // Sync service state with react-hook-form
  useEffect(() => {
    setValue("service", selectedService);
    if (selectedService !== "Other Requests") {
      setSelectedOtherService("");
      setValue("otherService", "");
    }
  }, [selectedService, setValue]);

  useEffect(() => {
    setValue("otherService", selectedOtherService);
  }, [selectedOtherService, setValue]);

  const watchedService = watch("service");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle form submission (e.g., send to API)
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Google Maps embed URL for the office address
  const mapSrc = "https://www.google.com/maps?q=Office%2304%2C%20Block%2317C%2C%20Main%20Service%20Rd%20E%2C%20near%20Tower%20101%2C%20G-11%2F3%2C%20Islamabad%2C%2041100&output=embed";

  return (
    <div className="w-full flex-1 bg-gray-50 -mt-15">
      {/* TOP TEXT */}
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mt-12 mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Contact Us
          </h2>
        </div>
      </div>

      <section className="w-full pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl shadow-xl overflow-hidden bg-white">
            {/* LEFT - Contact Info with Map */}
            <div className="bg-gradient-to-br from-[#1B388E] to-[#051b6b] text-white p-4 lg:p-6 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col h-full"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 tracking-tight">
                    Contact Information
                  </h3>
                  <p className="text-blue-100 mb-1 text-xs md:text-sm leading-relaxed">
                    Say something to start a live chat!
                  </p>
                  <p className="text-white mb-3 text-xs md:text-sm font-semibold leading-relaxed">
                    Comprehensive Technology Solutions for Your Business
                  </p>
                </div>

                {/* Google Map */}
                <div className="w-full h-28 md:h-32 lg:h-32 rounded-lg overflow-hidden mb-3 shadow-lg">
                  <iframe
                    title="Office Location"
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Contact items */}
                <ul className="space-y-2 text-xs md:text-sm">
                  <motion.li
                    whileHover={{ x: 6 }}
                    className="flex gap-2 items-start group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-7 h-7 rounded-full bg-[#1B388E]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B388E]/60 transition-colors"
                    >
                      <MdOutlineLocalPhone className="text-sm text-blue-100" />
                    </motion.div>
                    <span className="leading-relaxed pt-0.5">+923111321677</span>
                  </motion.li>

                  <motion.li
                    whileHover={{ x: 6 }}
                    className="flex gap-2 items-start group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-7 h-7 rounded-full bg-[#1B388E]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B388E]/60 transition-colors"
                    >
                      <MdEmail className="text-sm text-blue-100" />
                    </motion.div>
                    <span className="leading-relaxed pt-0.5">www.mradevelopers.com</span>
                  </motion.li>
                </ul>

                {/* Social Icons - pushed to bottom with mt-auto */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-2 mt-auto pt-3"
                >
                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/company/mradevs/posts/?feedView=all"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#1B388E] hover:text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label="LinkedIn"
                  >
                    <TiSocialLinkedinCircular className="text-lg" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/mra.devs/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#1B388E] hover:text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label="Instagram"
                  >
                    <SlSocialInstagram className="text-sm" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT FORM - now fills height with flexible message area */}
            <div className="bg-white p-4 lg:p-6 h-full flex flex-col">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full gap-4">
                {/* INPUT GRID - Two columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* First Name */}
                  <div className="flex flex-col space-y-0.5">
                    <label className="text-xs font-medium text-gray-600 tracking-wide">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register("firstName")}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B388E]/20 focus:border-[#1B388E] transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50/50 hover:bg-white text-sm"
                      placeholder="Enter first name"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-xs mt-0.5">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col space-y-0.5">
                    <label className="text-xs font-medium text-gray-600 tracking-wide">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B388E]/20 focus:border-[#1B388E] transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50/50 hover:bg-white text-sm"
                      placeholder="Enter last name"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-xs mt-0.5">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-0.5">
                    <label className="text-xs font-medium text-gray-600 tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B388E]/20 focus:border-[#1B388E] transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50/50 hover:bg-white text-sm"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-0.5">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-0.5">
                    <label className="text-xs font-medium text-gray-600 tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B388E]/20 focus:border-[#1B388E] transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50/50 hover:bg-white text-sm"
                      placeholder="+923000000000"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs mt-0.5">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* MESSAGE - flex-grow wrapper so textarea fills available space */}
                <div className="flex-grow flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600 tracking-wide">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    className="w-full flex-grow px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B388E]/20 focus:border-[#1B388E] transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50/50 hover:bg-white resize-none text-sm min-h-[60px]"
                    placeholder="Write your message..."
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-0.5">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* BUTTON - stays at bottom */}
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-[#1B388E] text-white px-5 py-2 rounded-lg hover:bg-[#082375] hover:shadow-xl transition-all duration-300 font-semibold text-xs md:text-sm focus:ring-4 focus:ring-[#1B388E]/30 shadow-md cursor-pointer"
                  >
                    Send Message
                  </motion.button>
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