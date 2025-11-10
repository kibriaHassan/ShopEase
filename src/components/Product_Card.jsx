import React from "react";

const Product_Card = ({ product }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer group">
      <div className="relative h-64">
        
        <img
          src={product.thumbnail || product.image}
          alt={product.title || product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.title || product.name}
        </h3>
        <p className="text-gray-500 mb-4">${product.price}</p>
        <button className="bg-gray-800 text-white w-full py-2 rounded-full hover:bg-gray-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product_Card;
