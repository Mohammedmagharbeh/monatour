// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// // دالة لحساب قوة كلمة المرور
// function calculatePasswordStrength(password) {
//   let strength = 0;
//   if (password.length >= 6) strength++;
//   if (password.length >= 8) strength++;
//   if (/[A-Z]/.test(password)) strength++;
//   if (/[0-9]/.test(password)) strength++;
//   if (/[^A-Za-z0-9]/.test(password)) strength++;
//   return strength;
// }

// // دالة لتحديد لون شريط القوة
// function getStrengthColor(strength) {
//   switch (strength) {
//     case 1: return '#ff4d4d'; // ضعيف
//     case 2: return '#ff944d'; // متوسط
//     case 3: return '#ffdb4d'; // جيد
//     case 4: return '#a3ff4d'; // قوي
//     case 5: return '#4dff4d'; // ممتاز
//     default: return '#ddd'; 
//   }
// }

// function RegistrationForm() {
//   const navigate = useNavigate();
//   const [logData, setLogData] = useState({ username: '', email: '', password: '', confirmPassword: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLogData({ ...logData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { username, email, password, confirmPassword } = logData;

//     // تحقق من تطابق كلمتي المرور
//     if (password !== confirmPassword) {
//       alert('كلمتا المرور غير متطابقتين');
//       return;
//     }

//     // تحقق من قوة كلمة المرور
//     const passwordStrength = calculatePasswordStrength(password);
//     if (passwordStrength < 4) {
//       alert('كلمة المرور ضعيفة. استخدم كلمة مرور قوية أو ممتازة');
//       return;
//     }

//     try {
//       // إرسال البيانات مباشرة للباك-إند
//       const res = await axios.post('http://127.0.0.1:5000/api/users/postuser', {
//         username, email, password
//       });
//       console.log(res.data); // بيانات المستخدم المرجعة
//       alert('تم التسجيل بنجاح');
//       navigate('/login'); // بعد التسجيل، الانتقال لصفحة تسجيل الدخول
//     } catch (error) {
//       console.error(error);
//       alert('حدث خطأ أثناء التسجيل');
//     }
//   };

//   // حساب مؤشر القوة
//   const passwordStrength = calculatePasswordStrength(logData.password);
//   const strengthPercent = (passwordStrength / 5) * 100;
//   const strengthColor = getStrengthColor(passwordStrength);

//   // تسمية مؤشر القوة
//   let strengthLabel = '';
//   if (passwordStrength <= 1) strengthLabel = 'ضعيف';
//   else if (passwordStrength === 2) strengthLabel = 'متوسط';
//   else if (passwordStrength === 3) strengthLabel = 'جيد';
//   else if (passwordStrength === 4) strengthLabel = 'قوي';
//   else if (passwordStrength === 5) strengthLabel = 'ممتاز';

//   return (
//     <div className="registration-container">
//       <form onSubmit={handleSubmit} className="registration-form">
//         <h2>تسجيل مستخدم جديد</h2>

//         <label>اسم المستخدم</label>
//         <input type="text" name="username" value={logData.username} onChange={handleChange} required />

//         <label>البريد الإلكتروني</label>
//         <input type="email" name="email" value={logData.email} onChange={handleChange} required />

//         <label>كلمة المرور</label>
//         <input type="password" name="password" value={logData.password} onChange={handleChange} required />
//         <div className="password-strength-meter" style={{ marginBottom: '5px', height: '8px', background: '#ddd', borderRadius: '4px' }}>
//           <div style={{
//             width: `${strengthPercent}%`,
//             backgroundColor: strengthColor,
//             height: '100%',
//             borderRadius: '4px',
//             transition: 'width 0.3s ease'
//           }}></div>
//         </div>
//         <span>{strengthLabel}</span>

//         <label>تأكيد كلمة المرور</label>
//         <input type="password" name="confirmPassword" value={logData.confirmPassword} onChange={handleChange} required />

//         <button type="submit" style={{ marginTop: '10px' }}>تسجيل</button>
//         <button type="button" onClick={() => navigate('/login')} style={{ marginLeft: '10px' }}>الانتقال إلى تسجيل الدخول</button>
//       </form>
//     </div>
//   );
// }

// export default RegistrationForm;
