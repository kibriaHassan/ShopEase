import React from "react";

const categories = [
  { name: "Electronics", image: "https://source.unsplash.com/400x400/?electronics" },
  { name: "Fashion", image: "https://source.unsplash.com/400x400/?fashion" },
  { name: "Home & Kitchen", image: "https://source.unsplash.com/400x400/?home,kitchen" },
  { name: "Sports", image: "https://source.unsplash.com/400x400/?sports" },
  { name: "Beauty", image: "https://source.unsplash.com/400x400/?beauty" },
  { name: "Toys", image: "https://source.unsplash.com/400x400/?toys" },
  { name: "Books", image: "https://source.unsplash.com/400x400/?books" },
  { name: "Automotive", image: "https://source.unsplash.com/400x400/?car" },
];

const Categories = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Shop by Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer group"
          >
            <div className="relative h-48">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
