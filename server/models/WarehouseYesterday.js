const mongoose = require("mongoose");

const warehouseYesterdaySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model(
  "WarehouseYesterday",
  warehouseYesterdaySchema
);
