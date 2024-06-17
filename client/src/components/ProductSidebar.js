import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import AddToCart from './AddToCart';
import { FaLock } from 'react-icons/fa';

const ProductSidebar = ({ singleProduct,color }) => {
    const {price, stock }=singleProduct
  return (
    <div className="border-2 p-4 max-w-sm mx-auto">
      <p className="text-xl font-bold">₹{price}</p>
      <p className="text-sm text-gray-500">(₹{(price / 100).toFixed(2)} / 100 g)</p>

      {price / 100 > 10000 && (
        <div className="flex gap-2 items-center mt-4">
          <TbTruckDelivery className="text-3xl bg-gray-200 rounded-full p-2" />
          <p className="text-sm mt-2">Free Delivery</p>
        </div>
      )}

      <p className="text-sm text-blue-500 mt-2">FREE delivery Wednesday, 19 June. <a href="#" className="underline">Details</a></p>
      <p className="text-sm text-gray-500">Or fastest delivery Tomorrow 8 AM - 12 PM. Order within <span className="text-green-500">12 hrs 28 mins.</span> <a href="#" className="underline">Details</a></p>

      <div className="mt-4 flex items-center text-sm">
        <span className="text-gray-700">Deliver to Khushil - Adalaj 382421</span>
      </div>

      <div className="mt-4 text-green-600 font-bold">In stock</div>
      <div className="text-sm mt-1">Ships from TechKhajano</div>
      <div className="text-sm mt-1">Sold by FFCP - Yellow Bee</div>

     

      <div className="mt-4 flex space-x-3">
       
      {stock > 0 && <AddToCart product={singleProduct} color={color} />}
      
      </div>
      <div className='flex flex-col items-center mt-4'>

      <FaLock className="text-3xl bg-gray-200 rounded-full p-2"  />
      <div className="mt-4 text-green-500  cursor-pointer">Secure transaction</div>
      </div>

      {/* <div className="mt-2">
        <label>
          <input type="checkbox" className="mr-2" />
          Add gift options
        </label>
      </div>

      <button className="mt-4 text-blue-500 underline">Add to Wish List</button> */}

    </div>
  );
};

export default ProductSidebar;
