// components/Navigation.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navigation({ isLoggedIn, Logout }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "الدائنين", path: "/creditors" },
    { label: "المدينين", path: "/debtors" },
    { label: "جرد المحل", path: "/shop" },
    { label: "المستودع الرئيسي", path: "/warehouse" },
    { label: "المستودع الثاني", path: "/warehouses" },
  ];

  if (!isLoggedIn) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
      >
        <span className="font-semibold">القائمة</span>
        <ChevronDown size={20} className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <nav className="absolute top-full mt-2 bg-white border-2 border-blue-600 rounded-lg shadow-lg z-50 w-full sm:w-56">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block w-full text-right px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors first:rounded-t-lg border-b last:border-b-0"
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => {
              Logout();
              setIsOpen(false);
            }}
            className="w-full text-right px-4 py-3 bg-red-50 text-red-600 hover:bg-red-100 transition-colors rounded-b-lg font-semibold"
          >
            تسجيل الخروج
          </button>
        </nav>
      )}

      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  );
}
