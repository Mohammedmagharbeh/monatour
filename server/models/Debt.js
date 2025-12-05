const mongoose = require("mongoose");

const debtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ["credit","debit"] }, // هنا تأكد ان enum فيها "debit"
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Debt", debtSchema);
