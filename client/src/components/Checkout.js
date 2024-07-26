import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCartContext } from "../context/cart_context";
import FormatPrice from "../Helpers/FormatPrice";
import RazorpayComponent from "./Razorpay"; // Import the Razorpay component
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  streetAddress: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal Code is required"),
  country: z.string().min(1, "Country is required"),
  paymentMethod: z.enum(["card", "upi", "cod"], {
    required_error: "Payment Method is required",
  }),
  upiID: z.string().optional(),
});

const Checkout = () => {
  const { cart, total_price, shipping_fee } = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const watchedUPIID = watch("upiID");

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    setValue("paymentMethod", method); // Update form value for paymentMethod
  };

  const onSubmit = (data) => {
    const orderData = {
      ...data,
      cart,
      total_price,
      shipping_fee,
      final_total: shipping_fee + total_price,
    };
  
    console.log("orderData",orderData)
    axios.post('http://localhost:4000/api/order/collections', orderData)
      .then(response => {
        console.log('Order placed successfully:', response.data);
        setOrderPlaced(true);
        setTimeout(() => {
          setOrderPlaced(false);
          navigate('/products'); 
        }, 2000);
      })
      .catch(error => {
        console.error('Error placing order:', error);
      });
  };
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 shadow rounded mb-6">
              <h2 className="text-2xl font-semibold mb-4">Delivery Address</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  {...register("fullName")}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Street Address</label>
                <input
                  {...register("streetAddress")}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.streetAddress && <p className="text-red-500">{errors.streetAddress.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    {...register("city")}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-700">Postal Code</label>
                  <input
                    {...register("postalCode")}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.postalCode && <p className="text-red-500">{errors.postalCode.message}</p>}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <select
                  {...register("country")}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                </select>
                {errors.country && <p className="text-red-500">{errors.country.message}</p>}
              </div>
            </div>
            <div className="bg-white p-6 shadow rounded mb-6">
              <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
              <Controller
                name="paymentMethod"
                control={control}
                render={({ field }) => (
                  <>
                    <div className="mb-4">
                      <input
                        type="radio"
                        id="card"
                        value="card"
                        checked={field.value === "card"}
                        onChange={() => handlePaymentChange("card")}
                        className="mr-2"
                      />
                      <label htmlFor="card" className="text-gray-700 font-bold">
                        Credit Card / Debit Card
                      </label>
                      {paymentMethod === "card" && (
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full p-2 border border-gray-300 rounded"
                          />
                      
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <input
                        type="radio"
                        id="upi"
                        value="upi"
                        checked={field.value === "upi"}
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
                              {...register("upiID")}
                              type="text"
                              placeholder="UPI ID"
                              className="w-3/4 border border-gray-300 rounded"
                            />
                            <button
                              className={` ${watchedUPIID ? 'text-black' : 'text-gray-400'} border-2 border-yellow-200 rounded-2xl ${watchedUPIID ? 'bg-yellow-400' : 'bg-yellow-50'} p-2`}
                            >
                              Verify
                            </button>
                          </div>
                          {errors.upiID && <p className="text-red-500">{errors.upiID.message}</p>}
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <input
                        type="radio"
                        id="cod"
                        value="cod"
                        checked={field.value === "cod"}
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
                  </>
                )}
              />
              {errors.paymentMethod && <p className="text-red-500">{errors.paymentMethod.message}</p>}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
          <div>
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
      </form>
      {orderPlaced && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold text-green-600">Order Placed Successfully!</h2>
            <p className="mt-2">Thank you for your purchase. Your order is being processed.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
