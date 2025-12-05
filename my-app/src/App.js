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
        {/* Navbar */}
        <nav className="bg-blue-700 text-white p-4 flex justify-around">
                    <Link to="/shop" className="hover:text-yellow-300 font-semibold">جرد المحل</Link>
          <Link to="/warehouse" className="hover:text-yellow-300 font-semibold">المستودع الاول</Link>
                    <Link to="/warehouses" className="hover:text-yellow-300 font-semibold">المستودع الثاني</Link>
          <Link to="/debt" className="hover:text-yellow-300 font-semibold">الديون</Link>

        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/debt" element={<Debt />} />
            <Route path="/warehouses" element={<Warehouses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
