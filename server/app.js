// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const warehouseRoutes = require("./routes/warehouseRoutes");
// const shopRoutes = require("./routes/shopRoutes");
// const debtRoutes = require("./routes/debtRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/warehouse", warehouseRoutes);
// app.use("/api/shop", shopRoutes);
// app.use("/api/debt", debtRoutes);

// // 🔥 MongoDB connection بدون خيارات غير مدعومة
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB connection error:", err));

// mongoose.connection.once("open", () => {
//   console.log("MongoDB is ready");
// });

// module.exports = app;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const warehouse2Routes = require("./routes/warehouse2Routes");

const warehouseRoutes = require("./routes/warehouseRoutes");
const shopRoutes = require("./routes/shopRoutes");
const debtRoutes = require("./routes/debtRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/warehouse", warehouseRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/debt", debtRoutes);
app.use("/api/warehouse2", warehouse2Routes);


// Connect MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

module.exports = app;
