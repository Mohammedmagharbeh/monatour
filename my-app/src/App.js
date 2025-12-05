import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Warehouse from "./pages/Warehouse";
import Shop from "./pages/Shop";
import Debt from "./pages/Debts";
import Warehouses from "./pages/Warehouses";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">

        <header className="bg-white shadow p-4 sm:p-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">
            مؤسسة الناطور للمواد الصحية
          </h1>
        </header>

        {/* Navbar */}
        <nav className="bg-blue-700 text-white p-4 flex justify-around">
                    <Link to="/shop" className="hover:text-yellow-300 font-semibold">جرد المحل</Link>
          <Link to="/warehouse" className="hover:text-yellow-300 font-semibold">المستودع الاول</Link>
                    <Link to="/warehouses" className="hover:text-yellow-300 font-semibold">المستودع الثاني</Link>
          <Link to="/debt" className="hover:text-yellow-300 font-semibold">الديون</Link>

        </nav>

        <div className="p-6">
          <Routes>
  <Route path="/" element={<Shop />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/warehouse" element={<Warehouse />} />
  <Route path="/warehouses" element={<Warehouses />} />
  <Route path="/debt" element={<Debt />} />
</Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
