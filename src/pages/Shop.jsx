import React from "react";
import Breadcrumb from "../components/Breadcrumb";

// Sample products data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59,
    image: "https://source.unsplash.com/400x400/?headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 120,
    image: "https://source.unsplash.com/400x400/?smartwatch",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 75,
    image: "https://source.unsplash.com/400x400/?shoes",
  },
  {
    id: 4,
    name: "Sunglasses",
    price: 35,
    image: "https://source.unsplash.com/400x400/?sunglasses",
  },
  {
    id: 5,
    name: "Backpack",
    price: 50,
    image: "https://source.unsplash.com/400x400/?backpack",
  },
  {
    id: 6,
    name: "Laptop",
    price: 899,
    image: "https://source.unsplash.com/400x400/?laptop",
  },
  {
    id: 7,
    name: "Perfume",
    price: 45,
    image: "https://source.unsplash.com/400x400/?perfume",
  },
  {
    id: 8,
    name: "Camera",
    price: 499,
    image: "https://source.unsplash.com/400x400/?camera",
  },
];

const Shop = () => {
  return (

    <>
    
    <Breadcrumb/>
    
    
    <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Shop All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer group"
          >
            <div className="relative h-48">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-500 mb-4">${product.price}</p>
              <button className="bg-violet-500 text-white w-full py-2 rounded-full hover:bg-violet-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>


    </>
  );
};

export default Shop;
