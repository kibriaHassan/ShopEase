import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Product_Card from "../components/Product_Card";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = Array.from(
          new Set(data.products.map((prod) => prod.category))
        );

        const categoriesWithImages = uniqueCategories.map((cat) => ({
          name: cat.charAt(0).toUpperCase() + cat.slice(1),
          value: cat,
          image: `https://source.unsplash.com/400x400/?${encodeURIComponent(
            cat
          )}`,
        }));

        setCategories(categoriesWithImages);
        setProducts(data.products);
        setSelectedCategory(uniqueCategories[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory
  );
  return (
    <>
      <Breadcrumb />
      <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-12">
        {loading ? (
          <p className="text-center text-gray-500">Loading categories...</p>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-64 flex-shrink-0 flex flex-col gap-4 h-[70vh] overflow-y-auto">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`flex items-center gap-3 p-3 rounded-xl shadow-md transition hover:shadow-lg focus:outline-none w-full text-left ${
                    selectedCategory === cat.value
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <span className="font-semibold">{cat.name}</span>
                </button>
              ))}
            </div>
            <div className="flex-1 h-[70vh] overflow-y-auto">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Product_Card key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center mt-10">
                  No products found in this category.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
