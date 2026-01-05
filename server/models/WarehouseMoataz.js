const mongoose = require("mongoose");

const warehouseMoatazSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WarehouseMoataz", warehouseMoatazSchema);
