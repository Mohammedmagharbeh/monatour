const express = require("express");
const router = express.Router();
const controller = require("../controller/warehouse2Controller");

router.get("/", controller.getItems);
router.post("/", controller.addItem);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);

module.exports = router;
