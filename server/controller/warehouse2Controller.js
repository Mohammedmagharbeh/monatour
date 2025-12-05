const Warehouse2Item = require("../models/Warehouse2");

// ✅ جلب كل الأصناف
exports.getItems = async (req, res) => {
  try {
    const items = await Warehouse2Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ إضافة صنف جديد
exports.addItem = async (req, res) => {
  try {
    const item = new Warehouse2Item(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ تعديل صنف
exports.updateItem = async (req, res) => {
  try {
    const updated = await Warehouse2Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ حذف صنف
exports.deleteItem = async (req, res) => {
  try {
    await Warehouse2Item.findByIdAndDelete(req.params.id);
    res.json({ message: "تم الحذف بنجاح" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
