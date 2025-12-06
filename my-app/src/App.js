// // // // // import React from "react";
// // // // // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // // // // import Warehouse from "./pages/Warehouse";
// // // // // import Shop from "./pages/Shop";
// // // // // import Debt from "./pages/Debts";
// // // // // import Warehouses from "./pages/Warehouses";
// // // // // import Login from "./pages/log";
// // // // // import RegistrationForm from "./pages/regitration";
// // // // // function App() {
// // // // //   return (
// // // // //     <Router>
// // // // //       <div className="min-h-screen bg-gray-100">

// // // // //         <header className="bg-white shadow p-4 sm:p-6 text-center">
// // // // //           <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">
// // // // //             مؤسسة الناطور للمواد الصحية
// // // // //           </h1>
// // // // //         </header>

// // // // //         {/* Navbar */}
// // // // //         <nav className="bg-blue-700 text-white p-4 flex justify-around">
// // // // //                     <Link to="/shop" className="hover:text-yellow-300 font-semibold">جرد المحل</Link>
// // // // //           <Link to="/warehouse" className="hover:text-yellow-300 font-semibold">المستودع الاول</Link>
// // // // //                     <Link to="/warehouses" className="hover:text-yellow-300 font-semibold">المستودع الثاني</Link>
// // // // //           <Link to="/debt" className="hover:text-yellow-300 font-semibold">الديون</Link>

// // // // //         </nav>

// // // // //         <div className="p-6">
// // // // //           <Routes>
// // // // //   {/* <Route path="/" element={<Shop />} /> */}
// // // // //   <Route path="/shop" element={<Shop />} />
// // // // //   <Route path="/warehouse" element={<Warehouse />} />
// // // // //   <Route path="/warehouses" element={<Warehouses />} />
// // // // //   <Route path="/debt" element={<Debt />} />
// // // // //   <Route path="/" element={<Login />} />
// // // // //   <Route path="/register" element={<RegistrationForm />} />
// // // // // </Routes>

// // // // //         </div>
// // // // //       </div>
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // // // export default App;

// // // // import React from "react";
// // // // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// // // // import Warehouse from "./pages/Warehouse";
// // // // import Shop from "./pages/Shop";
// // // // import Debt from "./pages/Debts";
// // // // import Warehouses from "./pages/Warehouses";
// // // // import Login from "./pages/log";
// // // // import RegistrationForm from "./pages/regitration";

// // // // function App() {
// // // //   return (
// // // //     <Router>
// // // //       <div className="min-h-screen bg-gray-100">

// // // //         {/* ✅ العنوان */}
// // // //         <header className="bg-white shadow p-4 sm:p-6 text-center">
// // // //           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
// // // //             مؤسسة الناطور للمواد الصحية
// // // //           </h1>
// // // //         </header>

// // // //         {/* ✅ navbar يظهر فقط بعد تسجيل الدخول حسب الصفحات */}
// // // //         <nav className="bg-blue-700 text-white p-3 sm:p-4 flex flex-wrap gap-4 justify-center">
// // // //           <Link to="/shop" className="hover:text-yellow-300 font-semibold">
// // // //             جرد المحل
// // // //           </Link>
// // // //           <Link to="/warehouse" className="hover:text-yellow-300 font-semibold">
// // // //             المستودع الاول
// // // //           </Link>
// // // //           <Link to="/warehouses" className="hover:text-yellow-300 font-semibold">
// // // //             المستودع الثاني
// // // //           </Link>
// // // //           <Link to="/debt" className="hover:text-yellow-300 font-semibold">
// // // //             الديون
// // // //           </Link>
// // // //         </nav>

// // // //         {/* ✅ الصفحات */}
// // // //         <div className="p-4 sm:p-6">
// // // //           <Routes>

// // // //             {/* ✅ الصفحة الرئيسية = تسجيل الدخول */}
// // // //             <Route path="/" element={<Login />} />

// // // //             {/* ✅ صفحة التسجيل */}
// // // //             <Route path="/register" element={<RegistrationForm />} />

// // // //             {/* ✅ الصفحات بعد تسجيل الدخول */}
// // // //             <Route path="/shop" element={<Shop />} />
// // // //             <Route path="/warehouse" element={<Warehouse />} />
// // // //             <Route path="/warehouses" element={<Warehouses />} />
// // // //             <Route path="/debt" element={<Debt />} />

// // // //           </Routes>
// // // //         </div>

// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;
// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// // // import Warehouse from "./pages/Warehouse";
// // // import Shop from "./pages/Shop";
// // // import Debt from "./pages/Debts";
// // // import Warehouses from "./pages/Warehouses";
// // // import Login from "./pages/log";
// // // import RegistrationForm from "./pages/regitration";

// // // function App() {
// // //   // ✅ التحقق من وجود JWT لتحديد ما إذا المستخدم مسجل دخول
// // //   const isLoggedIn = !!sessionStorage.getItem("jwt");

// // //   return (
// // //     <Router>
// // //       <div className="min-h-screen bg-gray-100">

// // //         {/* ✅ العنوان */}
// // //         <header className="bg-white shadow p-4 sm:p-6 text-center">
// // //           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
// // //             مؤسسة الناطور للمواد الصحية
// // //           </h1>
// // //         </header>

// // //         {/* ✅ navbar يظهر فقط بعد تسجيل الدخول */}
// // //         {isLoggedIn && (
// // //           <nav className="bg-blue-700 text-white p-3 sm:p-4 flex flex-wrap gap-4 justify-center">
// // //             <Link to="/shop" className="hover:text-yellow-300 font-semibold">
// // //               جرد المحل
// // //             </Link>
// // //             <Link to="/warehouse" className="hover:text-yellow-300 font-semibold">
// // //               المستودع الاول
// // //             </Link>
// // //             <Link to="/warehouses" className="hover:text-yellow-300 font-semibold">
// // //               المستودع الثاني
// // //             </Link>
// // //             <Link to="/debt" className="hover:text-yellow-300 font-semibold">
// // //               الديون
// // //             </Link>
// // //           </nav>
// // //         )}

// // //         {/* ✅ الصفحات */}
// // //         <div className="p-4 sm:p-6">
// // //           <Routes>
// // //             {/* الصفحة الرئيسية = تسجيل الدخول */}
// // //             <Route path="/" element={<Login />} />

// // //             {/* صفحة التسجيل */}
// // //             <Route path="/register" element={<RegistrationForm />} />

// // //             {/* الصفحات بعد تسجيل الدخول */}
// // //             <Route path="/shop" element={<Shop />} />
// // //             <Route path="/warehouse" element={<Warehouse />} />
// // //             <Route path="/warehouses" element={<Warehouses />} />
// // //             <Route path="/debt" element={<Debt />} />
// // //           </Routes>
// // //         </div>

// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// // import Warehouse from "./pages/Warehouse";
// // import Shop from "./pages/Shop";
// // import Debt from "./pages/Debts";
// // import Warehouses from "./pages/Warehouses";
// // import Login from "./pages/log";
// // import RegistrationForm from "./pages/regitration";
// // import PrivateRoute from "../src/pages/PrivateRoute";

// // function App() {
// //   const isLoggedIn = !!sessionStorage.getItem("jwt");

// //   return (
// //     <Router>
// //       <div className="min-h-screen bg-gray-100">
// //         {/* العنوان */}
// //         <header className="bg-white shadow p-4 sm:p-6 text-center">
// //           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
// //             مؤسسة الناطور للمواد الصحية
// //           </h1>
// //         </header>

// //         {/* Navbar يظهر فقط بعد تسجيل الدخول */}
// //         {isLoggedIn && (
// //           <nav className="bg-blue-700 text-white p-3 sm:p-4 flex flex-wrap gap-4 justify-center">
// //             <Link to="/shop" className="hover:text-yellow-300 font-semibold">
// //               جرد المحل
// //             </Link>
// //             <Link to="/warehouse" className="hover:text-yellow-300 font-semibold">
// //               المستودع الاول
// //             </Link>
// //             <Link to="/warehouses" className="hover:text-yellow-300 font-semibold">
// //               المستودع الثاني
// //             </Link>
// //             <Link to="/debt" className="hover:text-yellow-300 font-semibold">
// //               الديون
// //             </Link>
// //           </nav>
// //         )}

// //         {/* الصفحات */}
// //         <div className="p-4 sm:p-6">
// //           <Routes>
// //             {/* صفحات عامة */}
// //             <Route path="/" element={<Login />} />
// //             <Route path="/register" element={<RegistrationForm />} />

// //             {/* صفحات محمية */}
// //             <Route
// //               path="/shop"
// //               element={
// //                 <PrivateRoute>
// //                   <Shop />
// //                 </PrivateRoute>
// //               }
// //             />
// //             <Route
// //               path="/warehouse"
// //               element={
// //                 <PrivateRoute>
// //                   <Warehouse />
// //                 </PrivateRoute>
// //               }
// //             />
// //             <Route
// //               path="/warehouses"
// //               element={
// //                 <PrivateRoute>
// //                   <Warehouses />
// //                 </PrivateRoute>
// //               }
// //             />
// //             <Route
// //               path="/debt"
// //               element={
// //                 <PrivateRoute>
// //                   <Debt />
// //                 </PrivateRoute>
// //               }
// //             />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Warehouse from "./pages/Warehouse";
// import Shop from "./pages/Shop";
// import Debt from "./pages/Debts";
// import Warehouses from "./pages/Warehouses";
// import Login from "./pages/log";
//  import RegistrationForm from "./pages/regitration";
// import PrivateRoute from "../src/pages/PrivateRoute";
// import { useNavigate } from "react-router-dom";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("jwt"));
//   const navigate = useNavigate();


//   const handleLogout = () => {
//     sessionStorage.removeItem("jwt");
//     sessionStorage.removeItem("username");
//     setIsLoggedIn(false);
//     navigate("/"); // إعادة التوجيه لصفحة تسجيل الدخول
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
//             <Link to="/shop" className="hover:text-yellow-300 font-semibold">جرد المحل</Link>
//             <Link to="/warehouse" className="hover:text-yellow-300 font-semibold">المستودع الاول</Link>
//             <Link to="/warehouses" className="hover:text-yellow-300 font-semibold">المستودع الثاني</Link>
//             <Link to="/debt" className="hover:text-yellow-300 font-semibold">الديون</Link>

//              <button
//         onClick={handleLogout}
//         className="ml-4 bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg font-semibold transition"
//       >
//         تسجيل خروج
//       </button>
//           </nav>
//         )}

//         {/* الصفحات */}
//         <div className="p-4 sm:p-6">
//           <Routes>
//             <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//             <Route path="/register" element={<RegistrationForm />} />

//             <Route path="/shop" element={<PrivateRoute><Shop /></PrivateRoute>} />
//             <Route path="/warehouse" element={<PrivateRoute><Warehouse /></PrivateRoute>} />
//             <Route path="/warehouses" element={<PrivateRoute><Warehouses /></PrivateRoute>} />
//             <Route path="/debt" element={<PrivateRoute><Debt /></PrivateRoute>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";

// import Warehouse from "./pages/Warehouse";
// import Shop from "./pages/Shop";
// import Warehouses from "./pages/Warehouses";
//  import Login from "./pages/log";
//   import RegistrationForm from "./pages/regitration";
//   import Debtors from "./pages/Debtors";
//   import Creditors from "./pages/Creditors";

// // -----------------------
// // PrivateRoute لحماية الصفحات
// // -----------------------
// function PrivateRoute({ children }) {
//   const token = sessionStorage.getItem("jwt");
//   return token ? children : <Navigate to="/" />;
// }

// // -----------------------
// // Navbar داخل Router مع زر Logout
// // -----------------------
// function Navbar({ setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("jwt");
//     sessionStorage.removeItem("username");
//     setIsLoggedIn(false);
//     navigate("/"); // إعادة التوجيه للـ Login
//   };

//   return (
//     <nav className="bg-blue-700 text-white p-3 sm:p-4 flex flex-wrap gap-4 justify-center items-center">
//       <Link to="/shop" className="hover:text-yellow-300 font-semibold">جرد المحل</Link>
//       <Link to="/warehouse" className="hover:text-yellow-300 font-semibold">المستودع الاول</Link>
//       <Link to="/warehouses" className="hover:text-yellow-300 font-semibold">المستودع الثاني</Link>
// <Link to="/creditors" className="hover:text-yellow-300 font-semibold">الدائنين</Link>
// <Link to="/debtors" className="hover:text-yellow-300 font-semibold">المدينين</Link>      <button
//         onClick={handleLogout}
//         className="ml-4 bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg font-semibold transition"
//       >
//         تسجيل خروج
//       </button>
//     </nav>
//   );
// }

// // -----------------------
// // Main App
// // -----------------------
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("jwt"));

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
//         {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}

//         {/* الصفحات */}
//         <div className="p-4 sm:p-6">
//           <Routes>
//             {/* الصفحة الرئيسية = Login */}
//             <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//             {/* صفحة التسجيل */}
//             <Route path="/register" element={<RegistrationForm />} />

//             {/* الصفحات المحمية */}
//             <Route path="/shop" element={<PrivateRoute><Shop /></PrivateRoute>} />
//             <Route path="/warehouse" element={<PrivateRoute><Warehouse /></PrivateRoute>} />
//             <Route path="/warehouses" element={<PrivateRoute><Warehouses /></PrivateRoute>} />
//             <Route path="/creditors" element={<PrivateRoute><Creditors /></PrivateRoute>} />
// <Route path="/debtors" element={<PrivateRoute><Debtors /></PrivateRoute>} />

//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

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
