import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 🏪 Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Shop<span className="text-violet-500">Ease</span>
          </h2>
          <p className="text-sm leading-6 mb-4">
            Your one-stop destination for high-quality products, unbeatable
            deals, and fast delivery. Shop smart, live better.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-violet-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-violet-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-violet-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-violet-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* 🛍️ Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                On Sale
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* 🧭 Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 📨 Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Join Our Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get special offers, free giveaways, and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 📜 Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
