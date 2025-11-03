import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const plans = [
  {
    name: "Basic",
    price: 19,
    features: ["Access to all products", "Standard support", "Weekly updates"],
  },
  {
    name: "Standard",
    price: 49,
    features: ["Everything in Basic", "Priority support", "Monthly discounts"],
  },
  {
    name: "Premium",
    price: 99,
    features: ["Everything in Standard", "Exclusive offers", "Personalized recommendations"],
  },
];

const Pricing = () => {
  return (


    <>
    
    
    <Breadcrumb/>
    


    <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Pricing Plans
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {plan.name}
            </h2>
            <p className="text-4xl font-bold text-violet-500 mb-6">
              ${plan.price}
              <span className="text-gray-500 text-lg">/mo</span>
            </p>
            <ul className="mb-6 space-y-3 text-gray-600 text-center">
              {plan.features.map((feature, i) => (
                <li key={i} className="before:content-['✓'] before:text-violet-500 before:mr-2">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-violet-500 text-white px-8 py-3 rounded-full hover:bg-violet-600 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>


    </>
  );
};

export default Pricing;
