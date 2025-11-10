import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (

    <>
    <Breadcrumb/>
    <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-500 text-white font-medium py-3 rounded-lg hover:bg-violet-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center bg-violet-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Our Store
          </h2>
          <p className="text-gray-600 mb-4">
            📍 123 Market Street, Dhaka, Bangladesh
          </p>
          <p className="text-gray-600 mb-4">📞 +880 1234 567890</p>
          <p className="text-gray-600 mb-8">✉️ support@ecommerce.com</p>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
            [ Google Map Placeholder ]
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Contact;
