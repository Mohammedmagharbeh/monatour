// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";

// const Creditors = () => {
//   const [creditors, setCreditors] = useState([]);
//   const [form, setForm] = useState({ name: "", amount: "", date: "" });
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // 1. حالة نص البحث
//   const [searchQuery, setSearchQuery] = useState("");

//   const fetchCreditors = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         "https://monatour-ckd4.onrender.com/api/debt",
//       );
//       // تصفية البيانات لتجلب "الدائنين" فقط
//       setCreditors(res.data.filter((item) => item.type === "credit"));
//     } catch (error) {
//       console.error("خطأ في جلب البيانات:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCreditors();
//   }, []);

//   // 2. تصفية القائمة بناءً على البحث
//   const filteredCreditors = creditors.filter((c) =>
//     c.name.toLowerCase().includes(searchQuery.toLowerCase()),
//   );

//   // 3. حساب المجموع الكلي للعناصر الظاهرة فقط
//   const totalAmount = filteredCreditors.reduce(
//     (sum, item) => sum + Number(item.amount),
//     0,
//   );

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = { ...form, type: "credit" };
//       if (editingId) {
//         await axios.put(
//           `https://monatour-ckd4.onrender.com/api/debt/${editingId}`,
//           payload,
//         );
//       } else {
//         await axios.post(
//           "https://monatour-ckd4.onrender.com/api/debt",
//           payload,
//         );
//       }
//       setForm({ name: "", amount: "", date: "" });
//       setEditingId(null);
//       fetchCreditors();
//     } catch (error) {
//       console.error("خطأ في الحفظ:", error);
//     }
//   };

//   const handleEdit = (item) => {
//     setForm({
//       name: item.name,
//       amount: item.amount,
//       date: item.date.split("T")[0],
//     });
//     setEditingId(item._id);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("هل تريد حذف هذا السجل؟")) {
//       try {
//         await axios.delete(`https://monatour-ckd4.onrender.com/api/debt/${id}`);
//         fetchCreditors();
//       } catch (error) {
//         console.error("خطأ في الحذف:", error);
//       }
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-GB");
//   };

//   return (
//     <div
//       className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 sm:p-6 lg:p-8"
//       dir="rtl"
//     >
//       <div className="max-w-6xl mx-auto text-right">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
//             🤝 الدائنين
//           </h1>
//           <p className="text-gray-600 font-medium">
//             إدارة حسابات الموردين والديون المستحقة عليهم
//           </p>
//         </div>

//         {/* Total Card */}
//         <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl p-6 sm:p-8 mb-8 shadow-xl transform hover:scale-[1.01] transition-transform">
//           <p className="text-sm sm:text-base opacity-90 mb-1 font-medium">
//             المجموع الكلي المطلوب منك (بناءً على البحث):
//           </p>
//           <p className="text-3xl sm:text-4xl font-bold">
//             {totalAmount.toLocaleString()} د.أ
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
//           <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
//             {editingId ? "✏️ تعديل بيانات الدائن" : "➕ إضافة دائن جديد"}
//           </h2>
//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
//           >
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 اسم الطرف
//               </label>
//               <input
//                 type="text"
//                 placeholder="مثال: شركة التوريد"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 المبلغ
//               </label>
//               <input
//                 type="number"
//                 placeholder="المبلغ المطلوب"
//                 value={form.amount}
//                 onChange={(e) => setForm({ ...form, amount: e.target.value })}
//                 className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 التاريخ
//               </label>
//               <input
//                 type="date"
//                 value={form.date}
//                 onChange={(e) => setForm({ ...form, date: e.target.value })}
//                 className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition"
//                 required
//               />
//             </div>

//             <div className="flex items-end">
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-6 py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105 active:scale-95"
//               >
//                 {editingId ? "تحديث" : "إضافة"}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* 4. Search Bar */}
//         <div className="mb-6 relative">
//           <input
//             type="text"
//             placeholder="🔍 ابحث عن اسم المورد أو الدائن..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full p-4 pr-12 border-none rounded-xl shadow-md focus:ring-4 focus:ring-cyan-200 focus:outline-none transition-all text-lg"
//           />
//         </div>

//         {/* Desktop Table */}
//         {loading ? (
//           <div className="text-center py-10 text-gray-500">
//             جاري تحميل البيانات...
//           </div>
//         ) : (
//           <>
//             <div className="hidden sm:block bg-white rounded-xl shadow-lg overflow-hidden mb-8">
//               <table className="w-full text-right">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white">
//                     <th className="p-4 font-bold">الاسم</th>
//                     <th className="p-4 font-bold">المبلغ</th>
//                     <th className="p-4 font-bold text-center">التاريخ</th>
//                     <th className="p-4 font-bold text-center">إجراءات</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-100">
//                   {filteredCreditors.map((d, index) => (
//                     <tr
//                       key={d._id}
//                       className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-cyan-50 transition`}
//                     >
//                       <td className="p-4 font-semibold text-gray-800">
//                         {d.name}
//                       </td>
//                       <td className="p-4 text-blue-700 font-bold">
//                         {Number(d.amount).toLocaleString()} د.أ
//                       </td>
//                       <td className="p-4 text-gray-600 text-center font-medium">
//                         {formatDate(d.date)}
//                       </td>
//                       <td className="p-4 flex gap-2 justify-center">
//                         <button
//                           onClick={() => handleEdit(d)}
//                           className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-3 py-1.5 rounded-lg transition"
//                         >
//                           ✏️ تعديل
//                         </button>
//                         <button
//                           onClick={() => handleDelete(d._id)}
//                           className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1.5 rounded-lg transition"
//                         >
//                           🗑️ حذف
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Mobile Cards */}
//             <div className="sm:hidden space-y-4 mb-8">
//               {filteredCreditors.map((d) => (
//                 <div
//                   key={d._id}
//                   className="bg-white rounded-xl shadow-md p-5 border-r-8 border-cyan-500"
//                 >
//                   <div className="mb-4">
//                     <p className="text-gray-500 text-xs mb-1 font-bold">
//                       اسم الدائن
//                     </p>
//                     <p className="text-gray-800 font-bold text-lg">{d.name}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 mb-4 bg-gray-50 p-3 rounded-lg">
//                     <div>
//                       <p className="text-gray-500 text-xs mb-1 font-bold">
//                         المبلغ
//                       </p>
//                       <p className="text-blue-600 font-bold text-lg">
//                         {Number(d.amount).toLocaleString()} د.أ
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-xs mb-1 font-bold">
//                         التاريخ
//                       </p>
//                       <p className="text-gray-700 font-bold">
//                         {formatDate(d.date)}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleEdit(d)}
//                       className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-3 py-2.5 rounded-lg font-bold transition shadow-sm"
//                     >
//                       ✏️ تعديل
//                     </button>
//                     <button
//                       onClick={() => handleDelete(d._id)}
//                       className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2.5 rounded-lg font-bold transition shadow-sm"
//                     >
//                       🗑️ حذف
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Empty State */}
//             {filteredCreditors.length === 0 && (
//               <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//                 <p className="text-gray-500 text-xl font-medium">
//                   لا توجد بيانات مطابقة لبحثك
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Creditors;

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
// 1. استيراد مكتبة xlsx
import * as XLSX from "xlsx";

const Creditors = () => {
  const [creditors, setCreditors] = useState([]);
  const [form, setForm] = useState({ name: "", amount: "", date: "" });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchCreditors = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://monatour-ckd4.onrender.com/api/debt");
      setCreditors(res.data.filter((item) => item.type === "credit"));
    } catch (error) {
      console.error("خطأ في جلب البيانات:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCreditors();
  }, []);

  const filteredCreditors = creditors.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalAmount = filteredCreditors.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  // 2. دالة تصدير ملف الإكسل
  const exportToExcel = () => {
    if (filteredCreditors.length === 0) {
      alert("لا توجد بيانات لتصديرها");
      return;
    }

    // تجهيز البيانات لتكون ملائمة للإكسل (تغيير أسماء الأعمدة للعربية)
    const dataToExport = filteredCreditors.map((item) => ({
      "اسم الدائن": item.name,
      "المبلغ (د.أ)": item.amount,
      "التاريخ": formatDate(item.date),
    }));

    // إنشاء ورقة العمل
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    // إنشاء كتاب العمل
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "الدائنين");

    // تحميل الملف
    XLSX.writeFile(workbook, `قائمة_الدائنين_${new Date().toLocaleDateString()}.xlsx`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form, type: "credit" };
      if (editingId) {
        await axios.put(`https://monatour-ckd4.onrender.com/api/debt/${editingId}`, payload);
      } else {
        await axios.post("https://monatour-ckd4.onrender.com/api/debt", payload);
      }
      setForm({ name: "", amount: "", date: "" });
      setEditingId(null);
      fetchCreditors();
    } catch (error) {
      console.error("خطأ في الحفظ:", error);
    }
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      amount: item.amount,
      date: item.date.split("T")[0],
    });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل تريد حذف هذا السجل؟")) {
      try {
        await axios.delete(`https://monatour-ckd4.onrender.com/api/debt/${id}`);
        fetchCreditors();
      } catch (error) {
        console.error("خطأ في الحذف:", error);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 sm:p-6 lg:p-8" dir="rtl">
      <div className="max-w-6xl mx-auto text-right">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">🤝 الدائنين</h1>
            <p className="text-gray-600 font-medium">إدارة حسابات الموردين والديون المستحقة عليهم</p>
          </div>
          
          {/* زر التصدير */}
          <button
            onClick={exportToExcel}
            className="bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white font-bold px-5 py-2.5 rounded-lg transition flex items-center gap-2 shadow-sm"
          >
            <span>📊 تصدير Excel</span>
          </button>
        </div>

        {/* Total Card */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl p-6 sm:p-8 mb-8 shadow-xl transform hover:scale-[1.01] transition-transform">
          <p className="text-sm sm:text-base opacity-90 mb-1 font-medium">المجموع الكلي المطلوب منك (بناءً على البحث):</p>
          <p className="text-3xl sm:text-4xl font-bold">{totalAmount.toLocaleString()} د.أ</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            {editingId ? "✏️ تعديل بيانات الدائن" : "➕ إضافة دائن جديد"}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">اسم الطرف</label>
              <input
                type="text"
                placeholder="مثال: شركة التوريد"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">المبلغ</label>
              <input
                type="number"
                placeholder="المبلغ المطلوب"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">التاريخ</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition"
                required
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-6 py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105 active:scale-95"
              >
                {editingId ? "تحديث" : "إضافة"}
              </button>
            </div>
          </form>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="🔍 ابحث عن اسم المورد أو الدائن..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 pr-12 border-none rounded-xl shadow-md focus:ring-4 focus:ring-cyan-200 focus:outline-none transition-all text-lg"
          />
        </div>

        {/* Desktop Table & Mobile Cards (Same as before) */}
        {loading ? (
          <div className="text-center py-10 text-gray-500">جاري تحميل البيانات...</div>
        ) : (
          <>
            <div className="hidden sm:block bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <table className="w-full text-right">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white">
                    <th className="p-4 font-bold">الاسم</th>
                    <th className="p-4 font-bold">المبلغ</th>
                    <th className="p-4 font-bold text-center">التاريخ</th>
                    <th className="p-4 font-bold text-center">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredCreditors.map((d, index) => (
                    <tr key={d._id} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-cyan-50 transition`}>
                      <td className="p-4 font-semibold text-gray-800">{d.name}</td>
                      <td className="p-4 text-blue-700 font-bold">{Number(d.amount).toLocaleString()} د.أ</td>
                      <td className="p-4 text-gray-600 text-center font-medium">{formatDate(d.date)}</td>
                      <td className="p-4 flex gap-2 justify-center">
                        <button onClick={() => handleEdit(d)} className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-3 py-1.5 rounded-lg transition">✏️ تعديل</button>
                        <button onClick={() => handleDelete(d._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1.5 rounded-lg transition">🗑️ حذف</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden space-y-4 mb-8">
              {filteredCreditors.map((d) => (
                <div key={d._id} className="bg-white rounded-xl shadow-md p-5 border-r-8 border-cyan-500">
                  <div className="mb-4">
                    <p className="text-gray-500 text-xs mb-1 font-bold">اسم الدائن</p>
                    <p className="text-gray-800 font-bold text-lg">{d.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 bg-gray-50 p-3 rounded-lg">
                    <div>
                      <p className="text-gray-500 text-xs mb-1 font-bold">المبلغ</p>
                      <p className="text-blue-600 font-bold text-lg">{Number(d.amount).toLocaleString()} د.أ</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1 font-bold">التاريخ</p>
                      <p className="text-gray-700 font-bold">{formatDate(d.date)}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(d)} className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-3 py-2.5 rounded-lg font-bold transition shadow-sm">✏️ تعديل</button>
                    <button onClick={() => handleDelete(d._id)} className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2.5 rounded-lg font-bold transition shadow-sm">🗑️ حذف</button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCreditors.length === 0 && (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <p className="text-gray-500 text-xl font-medium">لا توجد بيانات مطابقة لبحثك</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Creditors;