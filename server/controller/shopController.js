const ShopItem = require("../models/ShopItem");
const WarehouseItem = require("../models/WarehouseItem");

// CRUD
exports.getItems = async (req, res) => {
  const items = await ShopItem.find();
  res.json(items);
};

exports.createItem = async (req, res) => {
  const { name, quantity, price, fromWarehouse } = req.body;

  if(fromWarehouse) {
    // خصم الكمية من المستودع
    const warehouseItem = await WarehouseItem.findOne({ name });
    if(!warehouseItem || warehouseItem.quantity < quantity) 
      return res.status(400).json({ error: "كمية غير كافية في المستودع" });

    warehouseItem.quantity -= quantity;
    await warehouseItem.save();
  }

  const item = new ShopItem({ name, quantity, price });
  await item.save();
  res.json(item);
};

exports.updateItem = async (req, res) => {
  const updated = await ShopItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteItem = async (req, res) => {
  await ShopItem.findByIdAndDelete(req.params.id);
  res.json({ message: "تم الحذف" });
};
