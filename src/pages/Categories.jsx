import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.products.map((prod) => prod.category)),
        ];

        // Map to objects with a sample image
        const categoriesWithImages = uniqueCategories.map((cat) => ({
          name: cat,
          image: `https://source.unsplash.com/400x400/?${cat.replace("&", "")}`,
        }));

        setCategories(categoriesWithImages);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Breadcrumb />

      <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Shop by Categories
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading categories...</p>
        ) : (
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
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cat.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
