const express=require("express");
const router=express.Router();
// const orderCollection=require("../controllers/order-controller");
const Orders=require("../controllers/order-controller");

router.route("/collections").post(Orders.orderCollection)
router.route("/view").get(Orders.viewOrders)

module.exports=router;