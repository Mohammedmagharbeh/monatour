

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// import Login from "./pages/log";
// // import RegistrationForm from "./pages/regitration";
// import Creditors from "./pages/Creditors";
// import Debtors from "./pages/Debtors";
// import Shop from "./pages/Shop";
// import Warehouse from "./pages/Warehouse";
// import Warehouses from "./pages/Warehouses";

// // حماية الصفحات حسب التوكن
// const PrivateRoute = ({ children }) => {
//   const token = sessionStorage.getItem("jwt");
//   return token ? children : <Navigate to="/" />;
// };

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // تحقق من التوكن عند أول تحميل للصفحة
//   useEffect(() => {
//     const token = sessionStorage.getItem("jwt");
//     setIsLoggedIn(!!token);
//   }, []);

//   const Logout = () => {
//     sessionStorage.removeItem("jwt");
//     sessionStorage.removeItem("username");
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         {/* العنوان */}
//         <header className="bg-white shadow p-4 sm:p-6 text-center">
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
//             مؤسسة الناطور للمواد الصحية
//           </h1>
//         </header>

//         {/* Navbar يظهر فقط بعد تسجيل الدخول */}
//         {isLoggedIn && (
//           <nav className="bg-blue-700 text-white p-3 sm:p-4 flex flex-wrap gap-4 justify-center">
//             <Link to="/creditors" className="hover:text-yellow-300 font-semibold">الدائنين</Link>
//             <Link to="/debtors" className="hover:text-yellow-300 font-semibold">المدينين</Link>
//             <Link to="/shop" className="hover:text-yellow-300 font-semibold">جرد المحل</Link>
//             <Link to="/warehouse" className="hover:text-yellow-300 font-semibold">المستودع الرئيسي </Link>
//             <Link to="/warehouses" className="hover:text-yellow-300 font-semibold">المستودع الثاني</Link>


            
//             <button onClick={Logout} className="bg-red-500 px-3 py-1 rounded">تسجيل الخروج</button>
//           </nav>
//         )}

//         <div className="p-4 sm:p-6">
//           <Routes>
//             {/* الصفحة الرئيسية = تسجيل الدخول */}
//             <Route path="/" element={isLoggedIn ? <Navigate to="/creditors" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />

//             {/* صفحة التسجيل */}
//             {/* <Route path="/register" element={<RegistrationForm />} /> */}

//             {/* الصفحات المحمية */}
//             <Route path="/creditors" element={<PrivateRoute><Creditors /></PrivateRoute>} />
//             <Route path="/debtors" element={<PrivateRoute><Debtors /></PrivateRoute>} />
//             <Route path="/shop" element={<PrivateRoute><Shop/></PrivateRoute>} />
//             <Route path="/warehouse" element={<PrivateRoute><Warehouse/></PrivateRoute>} />
//             <Route path="/warehouses" element={<PrivateRoute><Warehouses/></PrivateRoute>} />

//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import Login from "./pages/log";
import Creditors from "./pages/Creditors";
import Debtors from "./pages/Debtors";
import Shop from "./pages/Shop";
import Warehouse from "./pages/Warehouse";
import Warehouses from "./pages/Warehouses";

// حماية الصفحات حسب التوكن
const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem("jwt");
  return token ? children : <Navigate to="/" />;
};

function App() {
  // التحقق من التوكن مباشرة عند التحميل
  const token = sessionStorage.getItem("jwt");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const Logout = () => {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("username");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* العنوان */}
        <header className="bg-white shadow p-4 sm:p-6 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
            مؤسسة الناطور للمواد الصحية
          </h1>
        </header>

        {/* Navbar يظهر فقط بعد تسجيل الدخول */}
        {isLoggedIn && (
          <nav className="bg-blue-700 text-white p-3 sm:p-4 flex flex-wrap gap-4 justify-center">
            <Link to="/creditors" className="hover:text-yellow-300 font-semibold">الدائنين</Link>
            <Link to="/debtors" className="hover:text-yellow-300 font-semibold">المدينين</Link>
            <Link to="/shop" className="hover:text-yellow-300 font-semibold">جرد المحل</Link>
            <Link to="/warehouse" className="hover:text-yellow-300 font-semibold">المستودع الرئيسي</Link>
            <Link to="/warehouses" className="hover:text-yellow-300 font-semibold">المستودع الثاني</Link>
            <button onClick={Logout} className="bg-red-500 px-3 py-1 rounded">تسجيل الخروج</button>
          </nav>
        )}

        <div className="p-4 sm:p-6">
          <Routes>
            {/* الصفحة الرئيسية = تسجيل الدخول */}
            <Route
              path="/"
              element={
                isLoggedIn
                  ? <Navigate to="/creditors" />
                  : <Login setIsLoggedIn={setIsLoggedIn} />
              }
            />

            {/* الصفحات المحمية */}
            <Route path="/creditors" element={<PrivateRoute><Creditors /></PrivateRoute>} />
            <Route path="/debtors" element={<PrivateRoute><Debtors /></PrivateRoute>} />
            <Route path="/shop" element={<PrivateRoute><Shop /></PrivateRoute>} />
            <Route path="/warehouse" element={<PrivateRoute><Warehouse /></PrivateRoute>} />
            <Route path="/warehouses" element={<PrivateRoute><Warehouses /></PrivateRoute>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
