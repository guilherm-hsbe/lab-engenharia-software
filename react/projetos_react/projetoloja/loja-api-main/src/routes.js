const express = require("express");
const products = require("./controllers/products");
const purchases = require("./controllers/purchases");

const router = express.Router();
router.get("/products", products.select);
router.post("/purchases", purchases.create);

module.exports = router;
