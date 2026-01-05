const WarehouseMoataz = require("../models/WarehouseMoataz");

exports.getItems = async (req, res) => {
  const items = await WarehouseMoataz.find();
  res.json(items);
};

exports.createItem = async (req, res) => {
  const item = await WarehouseMoataz.create(req.body);
  res.json(item);
};

exports.updateItem = async (req, res) => {
  const item = await WarehouseMoataz.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  await WarehouseMoataz.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
};
