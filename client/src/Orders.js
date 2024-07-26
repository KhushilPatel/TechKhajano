import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from backend API when component mounts
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            // Make GET request to fetch orders from backend API
            const response = await axios.get('http://localhost:4000/api/order/view'); // Adjust URL based on your backend endpoint
            setOrders(response?.data); 
            console.log("ViewData",response?.data)
        } catch (error) {
            console.error('Error fetching orders:', error);
            // Handle error as needed
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Previous Orders</h1>
            <div className="grid grid-cols-1 gap-6">
                {orders?.map(order => (
                    <div key={order._id} className="bg-white p-6 shadow rounded mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
                        <p><strong>Order ID:</strong> {order._id}</p>
                        <p><strong>Customer Name:</strong> {order?.fullName}</p>
                        <p><strong>Address:</strong> {order?.streetAddress}, {order?.city}, {order?.country}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {order?.cart?.map(item => (
                                <div key={item.id} className="bg-gray-100 p-4 rounded-lg">
                                    <p><strong>Name:</strong> {item.name}</p>
                                    <p><strong>Quantity:</strong> {item.amount}</p>
                                    <p><strong>Color:</strong> {item.color}</p>
                                    <p><strong>Price:</strong> ${order.total_price}</p>
                                    <img src={item.image} alt={item.name} className="mt-2 h-32 object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
