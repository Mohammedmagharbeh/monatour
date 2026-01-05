// "use client"

// import { useState, useEffect } from "react"
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"

// import Login from "./pages/log"
// import Creditors from "./pages/Creditors"
// import Debtors from "./pages/Debtors"
// import Shop from "./pages/Shop"
// import Warehouse from "./pages/Warehouse"
// import Warehouses from "./pages/Warehouses"
// import WarehouseYesterday from "./pages/warehouse-yesterday"
// import WarehouseMoataz from "./pages/WarehouseMoataz"


// const Navbar = ({ onLogout, username }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white shadow-2xl">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* اسم المستخدم */}
//           <div className="flex items-center space-x-3 rtl:space-x-reverse">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg font-bold text-white">
//               {username?.charAt(0) || "م"}
//             </div>
//             <span className="hidden sm:inline font-semibold text-blue-50">{username || "مستخدم"}</span>
//           </div>

//           {/* زر القائمة للهاتف */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white hover:bg-blue-700 p-2 rounded-lg transition duration-200"
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
//           <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
//             <Link
//               to="/shop"
//               className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold flex items-center"
//             >
//               <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                 />
//               </svg>
//               المحل
//             </Link>

//             <div className="relative group">
//               <button className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold flex items-center">
//                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//                   />
//                 </svg>
//                 المستودعات
//                 <svg
//                   className="w-4 h-4 mr-2 transform group-hover:rotate-180 transition duration-200"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-200">
//                 <Link
//                   to="/warehouse"
//                   className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100 rounded-t-lg"
//                 >
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
//                       />
//                     </svg>
//                     المستودع الرئيسي
//                   </div>
//                 </Link>
//                 <Link to="/warehouses" className="block px-4 py-3 hover:bg-blue-50 rounded-b-lg">
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                       />
//                     </svg>
//                     المستودع الثانوي
//                   </div>
//                 </Link>
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold flex items-center">
//                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                   />
//                 </svg>
//                 الحسابات
//                 <svg
//                   className="w-4 h-4 mr-2 transform group-hover:rotate-180 transition duration-200"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-200">
//                 <Link
//                   to="/creditors"
//                   className="block px-4 py-3 hover:bg-green-50 border-b border-gray-100 rounded-t-lg"
//                 >
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                     الدائنين
//                   </div>
//                 </Link>
//                 <Link to="/debtors" className="block px-4 py-3 hover:bg-red-50 rounded-b-lg">
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 ml-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                     المدينين
//                   </div>
//                 </Link>
//               </div>
//             </div>

//             <button
//               onClick={onLogout}
//               className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition duration-200 font-semibold flex items-center ml-4"
//             >
//               <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                 />
//               </svg>
//               خروج
//             </button>
//           </div>
//         </div>

//         {/* القائمة المنسدلة للهاتف */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white text-gray-800 rounded-lg shadow-2xl mt-2 mb-4 overflow-hidden border border-gray-200">
//             <div className="px-4 py-3 bg-gradient-to-r from-blue-100 to-blue-50 border-b">
//               <p className="font-bold text-blue-800">مرحباً {username}</p>
//             </div>

//             <Link
//               to="/shop"
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100"
//             >
//               <div className="flex items-center">
//                 <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                   />
//                 </svg>
//                 المحل
//               </div>
//             </Link>

//             <div className="border-b border-gray-100">
//               <div className="px-4 py-3 font-semibold text-gray-700 bg-gray-50">المستودعات</div>
//               <Link
//                 to="/warehouse"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-6 py-3 hover:bg-blue-50 text-sm border-b border-gray-100"
//               >
//                 <div className="flex items-center">
//                   <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
//                     />
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
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                     />
//                   </svg>
//                   المستودع الثانوي
//                 </div>
//               </Link>
//             </div>

//             <div className="border-b border-gray-100">
//               <div className="px-4 py-3 font-semibold text-gray-700 bg-gray-50">الحسابات</div>
//               <Link
//                 to="/creditors"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-6 py-3 hover:bg-green-50 text-sm border-b border-gray-100"
//               >
//                 <div className="flex items-center">
//                   <svg className="w-4 h-4 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   الدائنين
//                 </div>
//               </Link>
//               <Link
//                 to="/debtors"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-6 py-3 hover:bg-red-50 text-sm"
//               >
//                 <div className="flex items-center">
//                   <svg className="w-4 h-4 ml-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   المدينين
//                 </div>
//               </Link>
//             </div>

//             <button
//               onClick={() => {
//                 setIsMenuOpen(false)
//                 onLogout()
//               }}
//               className="w-full text-left px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 font-semibold flex items-center"
//             >
//               <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                 />
//               </svg>
//               تسجيل الخروج
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-12 shadow-2xl">
//       <div className="container mx-auto px-4 py-8 md:py-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//           {/* القسم الأول */}
//           <div className="text-center md:text-right">
//             <h3 className="font-bold text-lg mb-3 text-blue-300">عن المؤسسة</h3>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               مؤسسة الناطور للمواد الصحية توفر نظام إدارة متكامل للمخازن والحسابات
//             </p>
//           </div>

//           {/* القسم الثاني */}
//           <div className="text-center">
//             <h3 className="font-bold text-lg mb-3 text-blue-300">روابط سريعة</h3>
//             <div className="space-y-2 text-gray-300 text-sm">
//               <p className="hover:text-blue-300 cursor-pointer transition">الرئيسية</p>
//               <p className="hover:text-blue-300 cursor-pointer transition">الحسابات</p>
//               <p className="hover:text-blue-300 cursor-pointer transition">المستودعات</p>
//             </div>
//           </div>

//           {/* القسم الثالث */}
//           <div className="text-center md:text-left">
//             <h3 className="font-bold text-lg mb-3 text-blue-300">معلومات الاتصال</h3>
//             <p className="text-gray-300 text-sm">
//               <span className="block mb-2">البريد الإلكتروني: info@natorh.com</span>
//               <span className="block">الهاتف: +966 XX XXXX XXXX</span>
//             </p>
//           </div>
//         </div>

//         {/* الخط الفاصل */}
//         <div className="border-t border-gray-700 pt-6">
//           <p className="text-center text-gray-400 text-sm mb-2">
//             © {new Date().getFullYear()} مؤسسة الناطور للمواد الصحية. جميع الحقوق محفوظة.
//           </p>
//           <p className="text-center text-gray-500 text-xs">تم تطويره بواسطة فريق التطوير المحترف</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// const PrivateRoute = ({ children }) => {
//   const token = sessionStorage.getItem("jwt")
//   return token ? children : <Navigate to="/" />
// }

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return !!sessionStorage.getItem("jwt")
//   })
//   const [username, setUsername] = useState("")

//   useEffect(() => {
//     const token = sessionStorage.getItem("jwt")
//     const storedUsername = sessionStorage.getItem("username")

//     if (token && !isLoggedIn) {
//       setIsLoggedIn(true)
//     }

//     if (storedUsername) {
//       setUsername(storedUsername)
//     }
//   }, [isLoggedIn])

//   const handleLogout = () => {
//     sessionStorage.removeItem("jwt")
//     sessionStorage.removeItem("username")
//     setIsLoggedIn(false)
//     setUsername("")
//   }

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50 flex flex-col">
//         {/* العنوان */}
//         <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white shadow-2xl">
//           <div className="container mx-auto px-4 py-6 md:py-8 text-center">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">مؤسسة الناطور للمواد الصحية</h1>
//             <p className="text-blue-200 mt-2 text-xs sm:text-sm md:text-base">نظام إدارة المخازن والحسابات المتكامل</p>
//           </div>
//         </header>

//         {/* Navbar */}
//         {isLoggedIn && <Navbar onLogout={handleLogout} username={username} />}

//         {/* المحتوى الرئيسي */}
//         <div className="flex-grow container mx-auto px-4 py-6 md:py-8">
//           <Routes>
//             <Route path="/" element={isLoggedIn ? <Navigate to="/shop" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />

//             <Route
//               path="/creditors"
//               element={
//                 <PrivateRoute>
//                   <Creditors />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/debtors"
//               element={
//                 <PrivateRoute>
//                   <Debtors />
//                 </PrivateRoute>
//               }
//             />

//             <Route
//   path="/warehouse-yesterday"
//   element={
//     <PrivateRoute>
//       <WarehouseYesterday />
//     </PrivateRoute>
//   }
// />



//        <Route
//   path="/warehouseMoataz"
//   element={
//     <PrivateRoute>
//       <WarehouseMoataz />
//     </PrivateRoute>
//   }
// />

//             <Route
//               path="/shop"
//               element={
//                 <PrivateRoute>
//                   <Shop />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/warehouse"
//               element={
//                 <PrivateRoute>
//                   <Warehouse />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/warehouses"
//               element={
//                 <PrivateRoute>
//                   <Warehouses />
//                 </PrivateRoute>
//               }
//             />

//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </div>

//         {/* Footer */}
//       </div>
//     </Router>
//   )
// }

// export default App
"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"

import Login from "./pages/log"
import Creditors from "./pages/Creditors"
import Debtors from "./pages/Debtors"
import Shop from "./pages/Shop"
import Warehouse from "./pages/Warehouse"
import Warehouses from "./pages/Warehouses"
import WarehouseYesterday from "./pages/warehouse-yesterday"
import WarehouseMoataz from "./pages/WarehouseMoataz"


const Navbar = ({ onLogout, username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* اسم المستخدم */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg font-bold text-white">
              {username?.charAt(0) || "م"}
            </div>
            <span className="hidden sm:inline font-semibold text-blue-50">{username || "مستخدم"}</span>
          </div>

          {/* زر القائمة للهاتف */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-blue-700 p-2 rounded-lg transition duration-200"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* روابط سطح المكتب */}
          <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
            <Link
              to="/shop"
              className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold flex items-center"
            >
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              المحل
            </Link>

            {/* --- بداية التعديل: القائمة المنسدلة للمستودعات --- */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold flex items-center">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                المستودعات
                <svg
                  className="w-4 h-4 mr-2 transform group-hover:rotate-180 transition duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-200">
                {/* المستودع الرئيسي */}
                <Link
                  to="/warehouse"
                  className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100 rounded-t-lg"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    المستودع الرئيسي
                  </div>
                </Link>

                {/* المستودع الثانوي */}
                <Link to="/warehouses" className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    المستودع الثانوي
                  </div>
                </Link>

                {/* مستودع الابارحة - جديد */}
                <Link to="/warehouse-yesterday" className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    مستودع البارحة
                  </div>
                </Link>

                 {/* مستودع معتز - جديد */}
                <Link to="/warehouseMoataz" className="block px-4 py-3 hover:bg-blue-50 rounded-b-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    مستودع معتز
                  </div>
                </Link>
              </div>
            </div>
            {/* --- نهاية التعديل --- */}

            <div className="relative group">
              <button className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold flex items-center">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                الحسابات
                <svg
                  className="w-4 h-4 mr-2 transform group-hover:rotate-180 transition duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-200">
                <Link
                  to="/creditors"
                  className="block px-4 py-3 hover:bg-green-50 border-b border-gray-100 rounded-t-lg"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    الدائنين
                  </div>
                </Link>
                <Link to="/debtors" className="block px-4 py-3 hover:bg-red-50 rounded-b-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 ml-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    المدينين
                  </div>
                </Link>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition duration-200 font-semibold flex items-center ml-4"
            >
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              خروج
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة للهاتف */}
        {isMenuOpen && (
          <div className="md:hidden bg-white text-gray-800 rounded-lg shadow-2xl mt-2 mb-4 overflow-hidden border border-gray-200">
            <div className="px-4 py-3 bg-gradient-to-r from-blue-100 to-blue-50 border-b">
              <p className="font-bold text-blue-800">مرحباً {username}</p>
            </div>

            <Link
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                المحل
              </div>
            </Link>

            {/* --- بداية تعديل قائمة الهاتف --- */}
            <div className="border-b border-gray-100">
              <div className="px-4 py-3 font-semibold text-gray-700 bg-gray-50">المستودعات</div>
              {/* المستودع الرئيسي */}
              <Link
                to="/warehouse"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 hover:bg-blue-50 text-sm border-b border-gray-100"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  المستودع الرئيسي
                </div>
              </Link>
              {/* المستودع الثانوي */}
              <Link
                to="/warehouses"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 hover:bg-blue-50 text-sm border-b border-gray-100"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  المستودع الثانوي
                </div>
              </Link>
              {/* مستودع الابارحة - جديد */}
              <Link
                to="/warehouse-yesterday"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 hover:bg-blue-50 text-sm border-b border-gray-100"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  مستودع البارحة
                </div>
              </Link>
              {/* مستودع معتز - جديد */}
               <Link
                to="/warehouseMoataz"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 hover:bg-blue-50 text-sm"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  مستودع معتز
                </div>
              </Link>
            </div>
            {/* --- نهاية تعديل قائمة الهاتف --- */}

            <div className="border-b border-gray-100">
              <div className="px-4 py-3 font-semibold text-gray-700 bg-gray-50">الحسابات</div>
              <Link
                to="/creditors"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 hover:bg-green-50 text-sm border-b border-gray-100"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  الدائنين
                </div>
              </Link>
              <Link
                to="/debtors"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 hover:bg-red-50 text-sm"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 ml-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  المدينين
                </div>
              </Link>
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(false)
                onLogout()
              }}
              className="w-full text-left px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 font-semibold flex items-center"
            >
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              تسجيل الخروج
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem("jwt")
  return token ? children : <Navigate to="/" />
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!sessionStorage.getItem("jwt")
  })
  const [username, setUsername] = useState("")

  useEffect(() => {
    const token = sessionStorage.getItem("jwt")
    const storedUsername = sessionStorage.getItem("username")

    if (token && !isLoggedIn) {
      setIsLoggedIn(true)
    }

    if (storedUsername) {
      setUsername(storedUsername)
    }
  }, [isLoggedIn])

  const handleLogout = () => {
    sessionStorage.removeItem("jwt")
    sessionStorage.removeItem("username")
    setIsLoggedIn(false)
    setUsername("")
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* العنوان */}
        <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white shadow-2xl">
          <div className="container mx-auto px-4 py-6 md:py-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">مؤسسة الناطور للمواد الصحية</h1>
            <p className="text-blue-200 mt-2 text-xs sm:text-sm md:text-base">نظام إدارة المخازن والحسابات المتكامل</p>
          </div>
        </header>

        {/* Navbar */}
        {isLoggedIn && <Navbar onLogout={handleLogout} username={username} />}

        {/* المحتوى الرئيسي */}
        <div className="flex-grow container mx-auto px-4 py-6 md:py-8">
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/shop" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />

            <Route
              path="/creditors"
              element={
                <PrivateRoute>
                  <Creditors />
                </PrivateRoute>
              }
            />
            <Route
              path="/debtors"
              element={
                <PrivateRoute>
                  <Debtors />
                </PrivateRoute>
              }
            />

            <Route
              path="/warehouse-yesterday"
              element={
                <PrivateRoute>
                  <WarehouseYesterday />
                </PrivateRoute>
              }
            />

            <Route
              path="/warehouseMoataz"
              element={
                <PrivateRoute>
                  <WarehouseMoataz />
                </PrivateRoute>
              }
            />

            <Route
              path="/shop"
              element={
                <PrivateRoute>
                  <Shop />
                </PrivateRoute>
              }
            />
            <Route
              path="/warehouse"
              element={
                <PrivateRoute>
                  <Warehouse />
                </PrivateRoute>
              }
            />
            <Route
              path="/warehouses"
              element={
                <PrivateRoute>
                  <Warehouses />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        {/* Footer */}
      </div>
    </Router>
  )
}

export default App