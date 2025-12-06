

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

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// import Login from "./pages/log";
// import Creditors from "./pages/Creditors";
// import Debtors from "./pages/Debtors";
// import Shop from "./pages/Shop";
// import Warehouse from "./pages/Warehouse";
// import Warehouses from "./pages/Warehouses";

// // مكون Navbar منفصل

// const Navbar = ({ onLogout, username }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* اسم المستخدم */}
//           <div className="flex items-center space-x-3 rtl:space-x-reverse">
//             <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
//               <span className="font-bold">{username?.charAt(0) || "م"}</span>
//             </div>
//             <span className="hidden sm:inline font-medium">
//               {username || "مستخدم"}
//             </span>
//           </div>

//           {/* زر القائمة للهاتف */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* روابط سطح المكتب */}
//           <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
//             <Link 
//               to="/shop" 
//               className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-medium flex items-center"
//             >
//               <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//               </svg>
//               المحل
//             </Link>
            
//             <div className="relative group">
//               <button className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-medium flex items-center">
//                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                 </svg>
//                 المستودعات
//                 <svg className="w-4 h-4 mr-2 transform group-hover:rotate-180 transition duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
              
//               <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-200">
//                 <Link 
//                   to="/warehouse" 
//                   className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100 rounded-t-lg"
//                 >
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//                     </svg>
//                     المستودع الرئيسي
//                   </div>
//                 </Link>
//                 <Link 
//                   to="/warehouses" 
//                   className="block px-4 py-3 hover:bg-blue-50 rounded-b-lg"
//                 >
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                     </svg>
//                     المستودع الثاني
//                   </div>
//                 </Link>
//               </div>
//             </div>
            
//             <div className="relative group">
//               <button className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-medium flex items-center">
//                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                 </svg>
//                 الحسابات
//                 <svg className="w-4 h-4 mr-2 transform group-hover:rotate-180 transition duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
              
//               <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-200">
//                 <Link 
//                   to="/creditors" 
//                   className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100 rounded-t-lg"
//                 >
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     الدائنين
//                   </div>
//                 </Link>
//                 <Link 
//                   to="/debtors" 
//                   className="block px-4 py-3 hover:bg-blue-50 rounded-b-lg"
//                 >
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 ml-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     المدينين
//                   </div>
//                 </Link>
//               </div>
//             </div>
            
//             <button
//               onClick={onLogout}
//               className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition duration-200 font-medium flex items-center"
//             >
//               <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//               </svg>
//               خروج
//             </button>
//           </div>
//         </div>

//         {/* القائمة المنسدلة للهاتف */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white text-gray-800 rounded-lg shadow-lg mt-2 mb-4 overflow-hidden border border-gray-200">
//             <div className="px-4 py-3 bg-blue-50 border-b">
//               <p className="font-bold text-blue-700">مرحباً {username}</p>
//             </div>
            
//             <Link 
//               to="/shop" 
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100"
//             >
//               <div className="flex items-center">
//                 <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//                 </svg>
//                 المحل
//               </div>
//             </Link>
            
//             <div className="border-b border-gray-100">
//               <div className="px-4 py-3 font-medium text-gray-700 bg-gray-50">
//                 المستودعات
//               </div>
//               <Link 
//                 to="/warehouse" 
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-6 py-3 hover:bg-blue-50 text-sm"
//               >
//                 <div className="flex items-center">
//                   <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//                   </svg>
//                   المستودع الرئيسي
//                 </div>
//               </Link>
//               <Link 
//                 to="/warehouses" 
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-6 py-3 hover:bg-blue-50 text-sm"
//               >
//                 <div className="flex items-center">
//                   <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                   المستودع الثاني
//                 </div>
//               </Link>
//             </div>
            
//             <div className="border-b border-gray-100">
//               <div className="px-4 py-3 font-medium text-gray-700 bg-gray-50">
//                 الحسابات
//               </div>
//               <Link 
//                 to="/creditors" 
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-6 py-3 hover:bg-blue-50 text-sm"
//               >
//                 <div className="flex items-center">
//                   <svg className="w-4 h-4 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   الدائنين
//                 </div>
//               </Link>
//               <Link 
//                 to="/debtors" 
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-6 py-3 hover:bg-blue-50 text-sm"
//               >
//                 <div className="flex items-center">
//                   <svg className="w-4 h-4 ml-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   المدينين
//                 </div>
//               </Link>
//             </div>
            
//             <button
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 onLogout();
//               }}
//               className="w-full text-left px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 font-medium flex items-center"
//             >
//               <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//               </svg>
//               تسجيل الخروج
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// // حماية الصفحات حسب التوكن
// const PrivateRoute = ({ children }) => {
//   const token = sessionStorage.getItem("jwt");
//   return token ? children : <Navigate to="/" />;
// };

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return !!sessionStorage.getItem("jwt");
//   });
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const token = sessionStorage.getItem("jwt");
//     const storedUsername = sessionStorage.getItem("username");
    
//     if (token && !isLoggedIn) {
//       setIsLoggedIn(true);
//     }
    
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, [isLoggedIn]);

//   const handleLogout = () => {
//     sessionStorage.removeItem("jwt");
//     sessionStorage.removeItem("username");
//     setIsLoggedIn(false);
//     setUsername("");
//   };

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         {/* العنوان */}
//         <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
//           <div className="container mx-auto px-4 py-6 text-center">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//               مؤسسة الناطور للمواد الصحية
//             </h1>
//             <p className="text-blue-200 mt-2 text-sm sm:text-base">
//               نظام إدارة المخازن والحسابات
//             </p>
//           </div>
//         </header>

//         {/* Navbar جديد */}
//         {isLoggedIn && <Navbar onLogout={handleLogout} username={username} />}

//         <div className="container mx-auto px-4 py-6">
//           <Routes>
//             {/* الصفحة الرئيسية = تسجيل الدخول */}
//             <Route 
//               path="/" 
//               element={
//                 isLoggedIn ? 
//                 <Navigate to="/shop" /> : 
//                 <Login setIsLoggedIn={setIsLoggedIn} />
//               } 
//             />

//             {/* الصفحات المحمية */}
//             <Route path="/creditors" element={<PrivateRoute><Creditors /></PrivateRoute>} />
//             <Route path="/debtors" element={<PrivateRoute><Debtors /></PrivateRoute>} />
//             <Route path="/shop" element={<PrivateRoute><Shop /></PrivateRoute>} />
//             <Route path="/warehouse" element={<PrivateRoute><Warehouse /></PrivateRoute>} />
//             <Route path="/warehouses" element={<PrivateRoute><Warehouses /></PrivateRoute>} />

//             {/* صفحة افتراضية للرابط غير موجود */}
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </div>

//         {/* تذييل الصفحة */}
//         <footer className="bg-gray-800 text-white mt-12">
//           <div className="container mx-auto px-4 py-6 text-center">
//             <p className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} مؤسسة الناطور للمواد الصحية. جميع الحقوق محفوظة.
//             </p>
//             <p className="text-gray-500 text-xs mt-2">
//               نظام إدارة متكامل - نسخة 1.0
//             </p>
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import Login from "./pages/log";
import Creditors from "./pages/Creditors";
import Debtors from "./pages/Debtors";
import Shop from "./pages/Shop";
import Warehouse from "./pages/Warehouse";
import Warehouses from "./pages/Warehouses";

/* =========================
        ✅ NAVBAR الأصلي
========================= */
const Navbar = ({ onLogout, username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* اسم المستخدم */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="font-bold">{username?.charAt(0) || "م"}</span>
            </div>
            <span className="hidden sm:inline font-medium">
              {username || "مستخدم"}
            </span>
          </div>

          {/* زر القائمة للموبايل */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          </div>

          {/* روابط الكمبيوتر */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <Link to="/shop">المحل</Link>
            <Link to="/warehouse">المستودع</Link>
            <Link to="/warehouses">المستودعات</Link>
            <Link to="/creditors">الدائنين</Link>
            <Link to="/debtors">المدينين</Link>

            <button
              onClick={onLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
            >
              خروج
            </button>
          </div>
        </div>

        {/* قائمة الموبايل */}
        {isMenuOpen && (
          <div className="md:hidden bg-white text-gray-800 rounded-lg shadow-lg mt-2 mb-4">

            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="block p-3">المحل</Link>
            <Link to="/warehouse" onClick={() => setIsMenuOpen(false)} className="block p-3">المستودع</Link>
            <Link to="/warehouses" onClick={() => setIsMenuOpen(false)} className="block p-3">المستودعات</Link>
            <Link to="/creditors" onClick={() => setIsMenuOpen(false)} className="block p-3">الدائنين</Link>
            <Link to="/debtors" onClick={() => setIsMenuOpen(false)} className="block p-3">المدينين</Link>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onLogout();
              }}
              className="w-full text-left p-3 text-red-600"
            >
              تسجيل خروج
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

/* =========================
   ✅ PrivateRoute آمن للـ Deploy
========================= */
const PrivateRoute = ({ children }) => {
  if (typeof window === "undefined") return null;
  const token = sessionStorage.getItem("jwt");
  return token ? children : <Navigate to="/" />;
};

/* =========================
            ✅ App
========================= */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("jwt");
      const storedUsername = sessionStorage.getItem("username");

      if (token) setIsLoggedIn(true);
      if (storedUsername) setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">

        {/* العنوان */}
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6 text-center">
            <h1 className="text-3xl font-bold">
              مؤسسة الناطور للمواد الصحية
            </h1>
            <p className="text-blue-200 mt-2">
              نظام إدارة المخازن والحسابات
            </p>
          </div>
        </header>

        {/* Navbar */}
        {isLoggedIn && <Navbar onLogout={handleLogout} username={username} />}

        <div className="container mx-auto px-4 py-6">
          <Routes>

            <Route
              path="/"
              element={
                isLoggedIn ?
                  <Navigate to="/shop" /> :
                  <Login setIsLoggedIn={setIsLoggedIn} />
              }
            />

            <Route path="/creditors" element={<PrivateRoute><Creditors /></PrivateRoute>} />
            <Route path="/debtors" element={<PrivateRoute><Debtors /></PrivateRoute>} />
            <Route path="/shop" element={<PrivateRoute><Shop /></PrivateRoute>} />
            <Route path="/warehouse" element={<PrivateRoute><Warehouse /></PrivateRoute>} />
            <Route path="/warehouses" element={<PrivateRoute><Warehouses /></PrivateRoute>} />

            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
        </div>

        <footer className="bg-gray-800 text-white mt-12">
          <div className="container mx-auto px-4 py-6 text-center">
             <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} مؤسسة الناطور للمواد الصحية. جميع الحقوق محفوظة.
            </p>
           <p className="text-gray-500 text-xs mt-2">
               نظام إدارة متكامل - نسخة 1.0
             </p>
           </div>
       </footer>

      </div>
    </Router>
  );
}

export default App;
