const { Schema, model } = require("mongoose");
const orderSchema = new Schema({
    cart: [
        {
            id: { type: String, ref: 'Product', required: true },
            name: { type: String, required: true },
            color: { type: String, required: true },
            amount: { type: Number, required: true },
            image: { type: String, required: true }
        }
    ],
    city: { type: String, required: true },
    country: { type: String, required: true },
    final_total: { type: Number, required: true },
    fullName: { type: String, required: true },
    paymentMethod: { type: String, required: true }, 
    postalCode: { type: String, required: true },
    shipping_fee: { type: Number, required: true },
    streetAddress: { type: String, required: true },
    total_price: { type: Number, required: true }
});

const Order=new model("Order",orderSchema);
module.exports=Order; 