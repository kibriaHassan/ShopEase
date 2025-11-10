import React from "react";
import Product_Details from "../../components/Product_Details";

const Home = () => {
  return (
    <div className="relative bg-white text-gray-800">
      
      <section className="relative bg-gray-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1616628181658-cf8bbfe3c3e5?auto=format&fit=crop&w=1600&q=80"
          alt="Shopping"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Shop Smarter, Live Better 🛍️
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-200">
            Discover handpicked deals and trending products — everything you love in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#shop"
              className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
              Shop Now
            </a>
            <a
              href="#categories"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition">
              Browse Categories
            </a>
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
                className="w-full h-48 object-cover"
              />
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
      <section id="categories" className="bg-gray-100 py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Explore Popular Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Electronics", "Fashion", "Home Decor"].map((category, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
              <img
                src={`https://source.unsplash.com/600x400/?${category}`}
                alt={category}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="font-semibold text-gray-800 text-xl">{category}</h3>
                <p className="text-gray-600 mt-2">
                  Discover our latest {category.toLowerCase()} collections.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          What Our Customers Say ❤️
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition text-center">
              <img
                src={`https://i.pravatar.cc/100?img=${id + 10}`}
                alt="Customer"
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 mb-4">
                "Amazing quality and super fast delivery! Highly recommend."
              </p>
              <h4 className="font-semibold text-gray-800">Customer {id}</h4>
              <span className="text-gray-500 text-sm">Verified Buyer</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Latest from Our Blog 📰
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((blog) => (
            <div
              key={blog}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <img
                src={`https://source.unsplash.com/600x400/?shopping,${blog}`}
                alt="Blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Tips for Smarter Online Shopping
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to grab the best deals and avoid common online shopping mistakes.
                </p>
                <a href="#" className="text-gray-800 font-semibold hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-900 py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-6 text-gray-300">
          Subscribe to receive exclusive offers and product updates.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full text-gray-800 w-full sm:w-auto flex-1"
          />
          <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Subscribe
          </button>
        </form>
      </section>
      <footer className="bg-gray-800 text-gray-300 py-8 text-center">
        <p>© {new Date().getFullYear()} ShopSmart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
