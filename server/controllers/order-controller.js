const Order=require("../models/order-model")

const orderCollection=async (req,res)=>{
    try {
     const response =req.body       
     console.log("orderCollection",response)
     await Order.create(response)
     return res.status(201).json({msg:"Message Sent"});
    } catch (error) {
        console.error("Error creating order:", error);  // Log the error
        return res.status(500).json({ msg: "Message Not Sent", error: error.message });
    }
 }
 const viewOrders = async (req, res) => {
    try {
        // Fetch all orders from the database
        const orders = await Order.find();
        return res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        return res.status(500).json({ msg: "Failed to fetch orders", error: error.message });
    }
};
 
 module.exports={orderCollection,viewOrders};