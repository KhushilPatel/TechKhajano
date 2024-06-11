import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";
import FormatPrice from "../Helpers/FormatPrice";

const Checkout = () => {
  const { cart, total_price, shipping_fee } = useCartContext();

  const [paymentMethod, setPaymentMethod] = useState(""); // State to store selected payment method
  const [upiID, setUpiID] = useState(""); 

  const handlePaymentChange = (method) => {
    setPaymentMethod(method); // Update selected payment method
  };

  const handleInputChange = (e) => {
    setUpiID(e.target.value); // Update UPI ID input value
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log("Payment method:", paymentMethod);
    console.log("UPI ID:", );
    // Add more logic as needed
  };


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Delivery Address */}
          <div className="bg-white p-6 shadow rounded mb-6">
            <h2 className="text-2xl font-semibold mb-4">Delivery Address</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Street Address</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700">City</label>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option value="">Select City</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                    <option value="Phoenix">Phoenix</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Postal Code</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
            </form>
          </div>

          {/* Payment Information */}
          <div className="bg-white p-6 shadow rounded mb-6">
            <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
            <form onSubmit={handlePaymentSubmit}>
              {/* Checkbox for Credit Card / Debit Card */}
              <div className="mb-4">
                <input
                  type="checkbox"
                  id="card"
                  name="paymentMethod"
                  checked={paymentMethod === "card"}
                  onChange={() => handlePaymentChange("card")}
                  className="mr-2"
                />
                <label htmlFor="card" className="text-gray-700 font-bold">
                  Credit Card / Debit Card
                </label>
                {paymentMethod === "card" && (
                  <div className="mt-2">
                    {/* Add fields for credit card / debit card */}
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    {/* Add other fields as needed */}
                  </div>
                )}
              </div>

              {/* Checkbox for UPI */}
              <div className="mb-4">
                <input
                  type="checkbox"
                  id="upi"
                  name="paymentMethod"
                  checked={paymentMethod === "upi"}
                  onChange={() => handlePaymentChange("upi")}
                  className="mr-2"
                />
                <label htmlFor="upi" className="text-gray-700 font-bold">
                  UPI
                </label>
                {paymentMethod === "upi" && (
                  <div className="mt-2">
                    <p>Please enter your UPI ID</p>
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="UPI ID"
                        value={upiID}
                        onChange={handleInputChange}
                        className="w-3/4 border border-gray-300 rounded"
                      />
                      <button
                        className={ ` ${upiID ? 'text-black' : 'text-gray-400'} border-2 border-yellow-200 rounded-2xl ${upiID ? 'bg-yellow-400' : 'bg-yellow-50'} p-2`}
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Checkbox for Cash on Delivery (COD) */}
              <div className="mb-4">
                <input
                  type="checkbox"
                  id="cod"
                  name="paymentMethod"
                  checked={paymentMethod === "cod"}
                  onChange={() => handlePaymentChange("cod")}
                  className="mr-2"
                />
                <label htmlFor="cod" className="text-gray-700 font-bold">
                  Cash on Delivery
                </label>
                {paymentMethod === "cod" && (
                  <p className="mt-2 text-gray-700">No additional details required for Cash on Delivery.</p>
                )}
              </div>

              {/* Payment Button */}
              <div className="flex justify-end">
                <button
                onClick={handlePaymentSubmit}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Order Summary */}
          <div className="bg-white p-6 shadow rounded mb-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="border-t border-gray-200 pt-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <FormatPrice price={item.price * item.amount} />
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span>Shipping Fee:</span>
                <FormatPrice price={shipping_fee} />
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <FormatPrice price={shipping_fee + total_price} />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
