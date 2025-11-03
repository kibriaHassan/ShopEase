import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Product_Card from "../components/Product_Card";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API থেকে প্রোডাক্ট ফেচ করা
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // API রেসপন্সে products আছে
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
          Shop All Products
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Product_Card key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
