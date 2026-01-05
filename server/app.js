// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();
// const warehouse2Routes = require("./routes/warehouse2Routes");

// const warehouseRoutes = require("./routes/warehouseRoutes");
// const shopRoutes = require("./routes/shopRoutes");
// const debtRoutes = require("./routes/debtRoutes");
// const userroutes=require('./routes/userRoutes')

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/warehouse", warehouseRoutes);
// app.use("/api/shop", shopRoutes);
// app.use("/api/debt", debtRoutes);
// app.use("/api/warehouse2", warehouse2Routes);
// app.use('/api',userroutes)

// // Connect MongoDB
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB connection error:", err));

// module.exports = app;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const warehouse2Routes = require("./routes/warehouse2Routes");
const warehouseRoutes = require("./routes/warehouseRoutes");
const shopRoutes = require("./routes/shopRoutes");
const debtRoutes = require("./routes/debtRoutes");
const warehouseYesterday = require("./routes/warehouseYesterday");
const warehouseMoatazRoutes = require("./routes/warehouseMoatazRoutes");

// ✅ الراوت الجديد
const authRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ REST APIs
app.use("/api/warehouse", warehouseRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/debt", debtRoutes);
app.use("/api/warehouse2", warehouse2Routes);
app.use("/api/warehouse-yesterday", warehouseYesterday);
app.use("/api/warehouse-moataz", require("./routes/warehouseMoatazRoutes"));


// ✅ LOGIN فقط صار هنا
app.use("/auth", authRoutes);

// ✅ MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.error("MongoDB connection error:", err));

module.exports = app;
