import React from "react";
import { Navigate } from "react-router-dom";

// ✅ تحقق من التوكن قبل السماح بالدخول
const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem("jwt");

  if (!token) {
    // إذا التوكن غير موجود، رجع المستخدم على صفحة تسجيل الدخول
    return <Navigate to="/" replace />;
  }

  return children; // إذا موجود، اعرض الصفحة المطلوبة
};

export default PrivateRoute;
