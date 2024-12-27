const express = require("express");
const router = express.Router();
const { createOrder, getOrderByEmail } = require("./order.controller");

// create order endpoints
router.post("/", createOrder);

// get orders by email
router.get("/email/:email", getOrderByEmail);

module.exports = router;
