const express = require("express");
const router = express.Router();
const { getDebts, createDebt, updateDebt, deleteDebt } = require("../controller/debtController");

router.get("/", getDebts);
router.post("/", createDebt);
router.put("/:id", updateDebt);
router.delete("/:id", deleteDebt);

module.exports = router;
