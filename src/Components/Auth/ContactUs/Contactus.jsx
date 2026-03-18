import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdOutlineLocalPhone, MdLocationPin, MdEmail } from "react-icons/md";
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

// Validation schema
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
          <p className="text-gray-500 mt-3 text-base md:text-lg max-w-2xl mx-auto">
            Any question or remarks? Just write us a message!
          </p>
        </div>
      </div>

      <section className="w-full pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl shadow-xl overflow-hidden bg-white">
            {/* LEFT - Contact Info (unchanged) */}
            <div className="bg-gradient-to-br from-[#1B388E] to-[#051b6b] text-white p-10 lg:p-12 flex flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
                  Contact Information
                </h3>
                <p className="text-blue-100 mb-3 text-sm md:text-base leading-relaxed">
                  Say something to start a live chat!
                </p>
                <p className="text-white mb-10 text-sm md:text-base font-semibold leading-relaxed whitespace-pre-line">
                  Comprehensive Technology Solutions
                  for Your Business
                </p>

                <ul className="space-y-6 text-sm md:text-base">
                  <motion.li
                    whileHover={{ x: 8 }}
                    className="flex gap-4 items-start group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-10 h-10 rounded-full bg-[#1B388E]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B388E]/60 transition-colors"
                    >
                      <MdOutlineLocalPhone className="text-xl text-blue-100" />
                    </motion.div>
                    <span className="leading-relaxed pt-1">+92 301 8144802</span>
                  </motion.li>

                  <motion.li
                    whileHover={{ x: 8 }}
                    className="flex gap-4 items-start group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-10 h-10 rounded-full bg-[#1B388E]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B388E]/60 transition-colors"
                    >
                      <MdLocationPin className="text-xl text-blue-100" />
                    </motion.div>
                    <span className="leading-relaxed pt-1">
                      Office#04 , Block#17C, Main Service Rd E, near Tower 101, G-11/3, Islamabad, 41100
                    </span>
                  </motion.li>

                  <motion.li
                    whileHover={{ x: 8 }}
                    className="flex gap-4 items-start group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-10 h-10 rounded-full bg-[#1B388E]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B388E]/60 transition-colors"
                    >
                      <MdEmail className="text-xl text-blue-100" />
                    </motion.div>
                    <span className="leading-relaxed pt-1">www.mradevelopers.com</span>
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 mt-10"
              >
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/company/mradevs/posts/?feedView=all"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#1B388E] hover:text-white transition-all duration-300 backdrop-blur-sm"
                  aria-label="LinkedIn"
                >
                  <TiSocialLinkedinCircular className="text-2xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/mra.devs/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#1B388E] hover:text-white transition-all duration-300 backdrop-blur-sm"
                  aria-label="Instagram"
                >
                  <SlSocialInstagram className="text-xl" />
                </motion.a>
              </motion.div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white p-10 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* INPUT GRID - Two columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-sm font-medium text-gray-600 tracking-wide">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register("firstName")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B388E]/20 focus:border-[#1B388E] transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50/50 hover:bg-white"
                      placeholder="Enter first name"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-sm font-medium text-gray-600 tracking-wide">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B388E]/20 focus:border-[#1B388E] transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50/50 hover:bg-white"
                      placeholder="Enter last name"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-sm font-medium text-gray-600 tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B388E]/20 focus:border-[#1B388E] transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50/50 hover:bg-white"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-sm font-medium text-gray-600 tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B388E]/20 focus:border-[#1B388E] transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50/50 hover:bg-white"
                      placeholder="+1234567890"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* SERVICES */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4 tracking-wide">
                    Select Service <span className="text-red-500">*</span>
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {services.map((service) => (
                      <div
                        key={service}
                        onClick={() => {
                          setSelectedService(service);
                        }}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                            selectedService === service
                              ? "border-[#1B388E] bg-[#1B388E]"
                              : "border-gray-300 group-hover:border-[#1B388E]"
                          }`}
                        >
                          {selectedService === service && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span
                          className={`text-sm ${
                            selectedService === service
                              ? "text-[#1B388E] font-medium"
                              : "text-gray-600 group-hover:text-gray-900"
                          }`}
                        >
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Other requests options */}
                  {selectedService === "Other Requests" && (
                    <div className="mt-6 flex flex-wrap gap-4">
                      {otherOptions.map((item) => (
                        <div
                          key={item}
                          onClick={() => setSelectedOtherService(item)}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <div
                            className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                              selectedOtherService === item
                                ? "border-[#1B388E] bg-[#1B388E]"
                                : "border-gray-300 group-hover:border-[#1B388E]"
                            }`}
                          >
                            {selectedOtherService === item && (
                              <div className="w-2 h-2 bg-white rounded-sm" />
                            )}
                          </div>
                          <span
                            className={`text-sm ${
                              selectedOtherService === item
                                ? "text-[#1B388E] font-medium"
                                : "text-gray-600 group-hover:text-gray-900"
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Service validation error */}
                  {errors.service && (
                    <span className="text-red-500 text-xs mt-2 block">
                      {errors.service.message}
                    </span>
                  )}
                  {errors.otherService && (
                    <span className="text-red-500 text-xs mt-2 block">
                      {errors.otherService.message}
                    </span>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-600 tracking-wide block">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    {...register("message")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B388E]/20 focus:border-[#1B388E] transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50/50 hover:bg-white resize-none"
                    placeholder="Write your message..."
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-[#1B388E] text-white px-8 py-3.5 rounded-lg hover:bg-[#082375] hover:shadow-xl transition-all duration-300 font-semibold text-sm md:text-base focus:ring-4 focus:ring-[#1B388E]/30 shadow-md cursor-pointer"
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