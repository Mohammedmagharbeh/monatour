const express = require("express");
const router = express.Router();
const { getItems, createItem, updateItem, deleteItem } = require("../controller/warehouseController");

router.get("/", getItems);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
