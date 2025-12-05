const WarehouseItem = require("../models/WarehouseItem");

exports.getItems = async (req, res) => {
  const items = await WarehouseItem.find();
  res.json(items);
};

exports.createItem = async (req, res) => {
  const item = new WarehouseItem(req.body);
  await item.save();
  res.json(item);
};

exports.updateItem = async (req, res) => {
  const updated = await WarehouseItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteItem = async (req, res) => {
  await WarehouseItem.findByIdAndDelete(req.params.id);
  res.json({ message: "تم الحذف" });
};
