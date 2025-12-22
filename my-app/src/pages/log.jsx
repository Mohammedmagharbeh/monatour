// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const LoginHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("https://monatour-3.onrender.com/auth/login",
// {
//         username,
//         password,
//       });

//       if (res.data.token) {
//         sessionStorage.setItem("jwt", res.data.token);
//         sessionStorage.setItem("username", username);

//         alert("✅ تم تسجيل الدخول بنجاح");
//         navigate("/shop");
//       } else {
//         alert("❌ لم يتم استلام التوكن من السيرفر");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("❌ بيانات تسجيل الدخول غير صحيحة");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md text-center">
//         <h1 className="text-2xl font-bold text-blue-800 mb-2">
//           Login Page
//         </h1>
//         <p className="text-gray-600 mb-6">أدخل بياناتك لتسجيل الدخول</p>
//         <form onSubmit={LoginHandler} className="space-y-4">
//           <input
//             type="text"
//             placeholder="اسم المستخدم"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="كلمة المرور"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-bold transition"
//           >
//             تسجيل الدخول
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = ({ setIsLoggedIn }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const LoginHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     try {
//       const res = await axios.post("https://monatour-3.onrender.com/auth/login", {
//         username,
//         password,
//       });

//       if (res.data.token) {
//         sessionStorage.setItem("jwt", res.data.token);
//         sessionStorage.setItem("username", username);
        
//         // تحديث حالة isLoggedIn في App component
//         setIsLoggedIn(true);
        
//         alert("✅ تم تسجيل الدخول بنجاح");
//         navigate("/shop"); // يمكنك تغيير هذا إلى الصفحة الافتراضية التي تريدها
//       } else {
//         alert("❌ لم يتم استلام التوكن من السيرفر");
//       }
//     } catch (error) {
//       console.error(error);
//       if (error.response) {
//         // الخطأ من السيرفر
//         alert(`❌ ${error.response.data.message || "بيانات تسجيل الدخول غير صحيحة"}`);
//       } else if (error.request) {
//         // لم يتم استلام رد
//         alert("❌ تعذر الاتصال بالخادم. يرجى التحقق من اتصال الإنترنت");
//       } else {
//         // خطأ في الإعدادات
//         alert("❌ حدث خطأ غير متوقع");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
//       <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
//         <div className="text-center mb-8">
//           <div className="mb-4">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
//               <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
//               </svg>
//             </div>
//           </div>
//           <h1 className="text-3xl font-bold text-blue-800 mb-2">
//             تسجيل الدخول
//           </h1>
//           <p className="text-gray-600 text-sm">
//             أدخل بياناتك للوصول إلى النظام
//           </p>
//         </div>
        
//         <form onSubmit={LoginHandler} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 text-sm font-medium mb-2 text-right">
//               اسم المستخدم
//             </label>
//             <input
//               type="text"
//               placeholder="أدخل اسم المستخدم"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
//               dir="rtl"
//             />
//           </div>
          
//           <div>
//             <label className="block text-gray-700 text-sm font-medium mb-2 text-right">
//               كلمة المرور
//             </label>
//             <input
//               type="password"
//               placeholder="أدخل كلمة المرور"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
//               dir="rtl"
//             />
//           </div>
          
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-bold transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 جاري التحقق...
//               </>
//             ) : "تسجيل الدخول"}
//           </button>
//         </form>
        
//         {/* <div className="mt-8 text-center">
//           <p className="text-gray-600 text-sm">
//             ليس لديك حساب؟{" "}
//             <Link to="/register" className="text-blue-600 hover:text-blue-800 font-medium">
//               سجل الآن
//             </Link>
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Login;
"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const LoginHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post("https://monatour-ckd4.onrender.com/auth/login", {
        username,
        password,
      })

      if (res.data.token) {
        sessionStorage.setItem("jwt", res.data.token)
        sessionStorage.setItem("username", username)

        setIsLoggedIn(true)

        alert("✅ تم تسجيل الدخول بنجاح")
        navigate("/shop")
      } else {
        alert("❌ لم يتم استلام التوكن من السيرفر")
      }
    } catch (error) {
      console.error(error)
      if (error.response) {
        alert(`❌ ${error.response.data.message || "بيانات تسجيل الدخول غير صحيحة"}`)
      } else if (error.request) {
        alert("❌ تعذر الاتصال بالخادم. يرجى التحقق من اتصال الإنترنت")
      } else {
        alert("❌ حدث خطأ غير متوقع")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 px-3 sm:px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:shadow-3xl transition-shadow duration-300">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 sm:p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">تسجيل الدخول</h1>
            <p className="text-blue-100 text-sm sm:text-base">أدخل بياناتك للوصول إلى النظام</p>
          </div>

          {/* Form section */}
          <form onSubmit={LoginHandler} className="p-6 sm:p-8 space-y-5">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2 text-right">اسم المستخدم</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="أدخل اسم المستخدم"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-right transition-all duration-300"
                  dir="rtl"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  ></path>
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2 text-right">كلمة المرور</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="أدخل كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-right transition-all duration-300"
                  dir="rtl"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  جاري التحقق...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  تسجيل الدخول
                </>
              )}
            </button>
          </form>

          {/* Footer section */}
          <div className="px-6 sm:px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-gray-600 text-xs sm:text-sm">جميع البيانات محمية وآمنة</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
