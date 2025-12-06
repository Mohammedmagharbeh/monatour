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













import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => { // ✅ نمرّر setIsLoggedIn من App
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://monatour-3.onrender.com/auth/login", {
        username,
        password,
      });

      if (res.data.token) {
        sessionStorage.setItem("jwt", res.data.token);
        sessionStorage.setItem("username", username);

        setIsLoggedIn(true); // ✅ يحدث render جديد فوراً
        alert("✅ تم تسجيل الدخول بنجاح");
        navigate("/shop"); // أو أي صفحة محمية تحب توصلها
      } else {
        alert("❌ لم يتم استلام التوكن من السيرفر");
      }
    } catch (error) {
      console.error(error);
      alert("❌ بيانات تسجيل الدخول غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-2">Login Page</h1>
        <p className="text-gray-600 mb-6">أدخل بياناتك لتسجيل الدخول</p>
        <form onSubmit={LoginHandler} className="space-y-4">
          <input
            type="text"
            placeholder="اسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-bold transition"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;











// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = ({ setIsLoggedIn }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const LoginHandler = async (e) => {
//     e.preventDefault();
//     try {
//       // ✅ رابط الباك اند على Render
//       const res = await axios.post("https://monatour-3.onrender.com/api/login", { username, password });
//         console.log("Response from server:", res.data
//       );

//       if (res.data.token) {
//         sessionStorage.setItem("jwt", res.data.token);
//         sessionStorage.setItem("username", username);
//         setIsLoggedIn(true);
//         navigate("/creditors"); // صفحة بعد تسجيل الدخول
//       } else {
//         alert("❌ لم يتم استلام التوكن من السيرفر");
//       }
//     } catch (error) {
//       alert("❌ بيانات تسجيل الدخول غير صحيحة");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md text-center">
//         <h1 className="text-2xl font-bold text-blue-800 mb-2">تسجيل الدخول</h1>
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
