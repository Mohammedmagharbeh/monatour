const WarehouseYesterday = require("../models/WarehouseYesterday");

exports.getItems = async (req, res) => {
  const items = await WarehouseYesterday.find();
  res.json(items);
};

exports.createItem = async (req, res) => {
  const item = new WarehouseYesterday(req.body);
  await item.save();
  res.json(item);
};

exports.updateItem = async (req, res) => {
  const updated = await WarehouseYesterday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteItem = async (req, res) => {
  await WarehouseYesterday.findByIdAndDelete(req.params.id);
  res.json({ message: "تم الحذف" });
};
