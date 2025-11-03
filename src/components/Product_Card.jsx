import React from "react";

const Product_Card = ({ product }) => {
  return (

    <>
    
    
    
    
   <div className="flex flex-col md:flex-row bg-white shadow-md max-md:max-w-80">
                <img className='w-80 md:w-64 h-80 object-cover object-top'
                    src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=500&auto=format&fit=crop"
                    alt="image" />
                <div className="p-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-medium text-slate-800">White crew-Neck T-Shirt</h3>
                        <span className="px-3 py-1 bg-red-500 text-white rounded text-sm">SALE</span>
                    </div>
                    <p className="max-w-xs text-sm mt-2 text-slate-500">Buy crew neck T-shirts online at India's best online
                        shopping store.</p>
                    <p className="text-xl font-medium text-slate-800 mt-4">$ 29.00</p>
                    <div className="flex items-center gap-3 mt-5">
                        <label className="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" className="hidden peer" />
                            <span className="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span className="text-gray-700 select-none">XS</span>
                        </label>
                        <label className="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" className="hidden peer" />
                            <span className="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span className="text-gray-700 select-none">S</span>
                        </label>
                        <label className="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" className="hidden peer" />
                            <span className="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span className="text-gray-700 select-none">M</span>
                        </label>
                        <label className="flex flex-col gap-1 items-center cursor-pointer">
                            <input type="checkbox" className="hidden peer" />
                            <span className="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                            <span className="text-gray-700 select-none">L</span>
                        </label>
                    </div>
                    <button className="px-12 py-2 bg-slate-800 hover:shadow-lg transition-all text-white mt-6 uppercase">
                        Add to cart
                    </button>
                </div>
            </div>


            </>
  );
};

export default Product_Card;
