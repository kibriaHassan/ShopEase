import React from "react";
import Product_Details from "../../components/Product_Details";

const Home = () => {
  return (
    <div className="relative bg-white text-gray-800">
      <section className="bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shop Smarter, Live Better 🛍️
            </h1>
            <p className="mb-6 text-lg md:text-xl text-gray-600">
              Explore our exclusive collection of trending products with unbeatable deals.
              Your one-stop e-commerce destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#shop"
                className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:bg-gray-700 transition">
                Shop Now
              </a>
              <a
                href="#categories"
                className="border border-gray-800 px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition text-gray-800">
                Browse Categories
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1616628181658-cf8bbfe3c3e5?auto=format&fit=crop&w=600&q=80"
              alt="Shopping"
              className="rounded-xl shadow-md"/>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
            <div
              key={product}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <img
                src={`https://source.unsplash.com/400x400/?product,${product}`}
                alt={`Product ${product}`}
                className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Product {product}
                </h3>
                <p className="text-gray-600 mb-2">
                  $ {Math.floor(Math.random() * 100 + 10)}
                </p>
                <button className="bg-gray-800 text-white w-full py-2 rounded-full hover:bg-gray-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe for Exclusive Deals</h2>
          <p className="mb-6 text-gray-600">
            Get updates on latest products, special offers, and flash sales.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-full text-gray-800 w-full sm:w-auto flex-1 border border-gray-300"
            />
            <button className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
