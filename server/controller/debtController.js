const Debt = require("../models/Debt");

exports.getDebts = async (req, res) => {
  const debts = await Debt.find();
  res.json(debts);
};

exports.createDebt = async (req, res) => {
  const debt = new Debt(req.body);
  await debt.save();
  res.json(debt);
};

exports.updateDebt = async (req, res) => {
  const updated = await Debt.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteDebt = async (req, res) => {
  await Debt.findByIdAndDelete(req.params.id);
  res.json({ message: "تم الحذف" });
};
