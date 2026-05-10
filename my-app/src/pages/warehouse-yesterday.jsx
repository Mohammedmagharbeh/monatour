// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";

// const WarehouseYesterday = () => {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState({ name: "", quantity: "", price: "" });
//   const [editingId, setEditingId] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   // رابط الرندر المباشر
//   const API = "https://monatour-ckd4.onrender.com/api/warehouse-yesterday";

//   // جلب البيانات
//   const fetchItems = async () => {
//     try {
//       const res = await axios.get(API);
//       setItems(res.data);
//     } catch (err) {
//       console.error("خطأ في جلب البيانات:", err);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   // إضافة أو تعديل عنصر
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       ...form,
//       quantity: Number(form.quantity),
//       price: Number(form.price),
//     };

//     try {
//       if (editingId) {
//         await axios.put(`${API}/${editingId}`, data);
//       } else {
//         await axios.post(API, data);
//       }
//       setForm({ name: "", quantity: "", price: "" });
//       setEditingId(null);
//       fetchItems();
//     } catch (err) {
//       console.error("خطأ في حفظ البيانات:", err);
//     }
//   };

//   // تعبئة البيانات للتعديل
//   const handleEdit = (item) => {
//     setForm(item);
//     setEditingId(item._id);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // حذف عنصر
//   const handleDelete = async (id) => {
//     if (!window.confirm("هل تريد حذف العنصر؟")) return;
//     try {
//       await axios.delete(`${API}/${id}`);
//       fetchItems();
//     } catch (err) {
//       console.error("خطأ في الحذف:", err);
//     }
//   };

//   // فلترة العناصر بناءً على البحث
//   const filteredItems = items.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase()),
//   );

//   // مجموع العناصر المعروضة
//   const total = filteredItems
//     .reduce((sum, i) => sum + i.quantity * i.price, 0)
//     .toFixed(2);

//   return (
//     <div className="min-h-screen bg-slate-50 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-blue-900">
//         📦 جرد مستودع البارحة
//       </h1>

//       {/* نموذج الإدخال */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow mb-8 grid md:grid-cols-4 gap-4 border border-blue-100"
//       >
//         <input
//           placeholder="اسم المنتج"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <input
//           type="number"
//           placeholder="الكمية"
//           value={form.quantity}
//           onChange={(e) => setForm({ ...form, quantity: e.target.value })}
//           className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <input
//           type="number"
//           placeholder="السعر"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <button className="bg-blue-600 hover:bg-blue-700 text-white rounded font-bold transition-colors">
//           {editingId ? "تحديث العنصر" : "إضافة منتج"}
//         </button>
//       </form>

//       {/* حقل البحث */}
//       <div className="mb-6 relative">
//         <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//           <span className="text-gray-500">🔍</span>
//         </div>
//         <input
//           type="text"
//           placeholder="ابحث عن اسم المنتج هنا..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-3 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//       </div>

//       {/* جدول العرض */}
//       <div className="overflow-x-auto bg-white shadow rounded-lg">
//         <table className="w-full">
//           <thead className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
//             <tr>
//               <th className="p-4 text-right">الاسم</th>
//               <th className="p-4 text-center">الكمية</th>
//               <th className="p-4 text-center">السعر</th>
//               <th className="p-4 text-center">الإجمالي</th>
//               <th className="p-4 text-center">إجراءات</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredItems.length > 0 ? (
//               filteredItems.map((i) => (
//                 <tr
//                   key={i._id}
//                   className="border-t hover:bg-blue-50 transition-colors"
//                 >
//                   <td className="p-3 text-right font-medium">{i.name}</td>
//                   <td className="p-3 text-center">{i.quantity}</td>
//                   <td className="p-3 text-center">{i.price}</td>
//                   <td className="p-3 text-center font-bold text-blue-800">
//                     {(i.quantity * i.price).toFixed(2)}
//                   </td>
//                   <td className="flex gap-2 justify-center p-3">
//                     <button
//                       onClick={() => handleEdit(i)}
//                       className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded transition-colors"
//                     >
//                       تعديل
//                     </button>
//                     <button
//                       onClick={() => handleDelete(i._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition-colors"
//                     >
//                       حذف
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center p-6 text-gray-500">
//                   لا توجد نتائج مطابقة للبحث "{searchQuery}"
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-6 bg-blue-100 p-4 rounded-lg text-xl font-bold text-blue-900 text-center md:text-right border border-blue-200">
//         💰 مجموع العناصر المعروضة: {total} د.أ
//       </div>
//     </div>
//   );
// };

// export default WarehouseYesterday;

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx"; // استيراد مكتبة التصدير

const WarehouseYesterday = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "", price: "" });
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const API = "https://monatour-ckd4.onrender.com/api/warehouse-yesterday";

  const fetchItems = async () => {
    try {
      const res = await axios.get(API);
      setItems(res.data);
    } catch (err) {
      console.error("خطأ في جلب البيانات:", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // دالة تصدير البيانات إلى Excel
  const exportToExcel = () => {
    if (filteredItems.length === 0) {
      alert("لا توجد بيانات لتصديرها حالياً");
      return;
    }

    // تجهيز البيانات للتصدير
    const dataToExport = filteredItems.map((item) => ({
      "اسم المنتج": item.name,
      "الكمية": item.quantity,
      "السعر (د.أ)": item.price,
      "الإجمالي (د.أ)": (item.quantity * item.price).toFixed(2),
    }));

    // إضافة سطر المجموع النهائي في أسفل الجدول داخل ملف Excel
    dataToExport.push({
      "اسم المنتج": "المجموع الكلي",
      "الكمية": "",
      "السعر (د.أ)": "",
      "الإجمالي (د.أ)": total,
    });

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "جرد المستودع");

    // تحميل الملف
    XLSX.writeFile(workbook, `جرد_المستودع_البارحة_${new Date().toLocaleDateString("en-GB")}.xlsx`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...form,
      quantity: Number(form.quantity),
      price: Number(form.price),
    };

    try {
      if (editingId) {
        await axios.put(`${API}/${editingId}`, data);
      } else {
        await axios.post(API, data);
      }
      setForm({ name: "", quantity: "", price: "" });
      setEditingId(null);
      fetchItems();
    } catch (err) {
      console.error("خطأ في حفظ البيانات:", err);
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("هل تريد حذف العنصر؟")) return;
    try {
      await axios.delete(`${API}/${id}`);
      fetchItems();
    } catch (err) {
      console.error("خطأ في الحذف:", err);
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const total = filteredItems
    .reduce((sum, i) => sum + i.quantity * i.price, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-slate-50 p-6" dir="rtl">
      <h1 className="text-3xl font-bold mb-6 text-blue-900 text-right">
        📦 جرد مستودع البارحة
      </h1>

      {/* نموذج الإدخال */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8 grid md:grid-cols-4 gap-4 border border-blue-100"
      >
        <input
          placeholder="اسم المنتج"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
          required
        />
        <input
          type="number"
          placeholder="الكمية"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
          required
        />
        <input
          type="number"
          placeholder="السعر"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
          required
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded font-bold transition-colors">
          {editingId ? "تحديث العنصر" : "إضافة منتج"}
        </button>
      </form>

      {/* شريط البحث وزر التصدير */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500">🔍</span>
          </div>
          <input
            type="text"
            placeholder="ابحث عن اسم المنتج هنا..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
          />
        </div>
        <button
          onClick={exportToExcel}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
        >
          📊 تصدير إلى Excel
        </button>
      </div>

      {/* جدول العرض */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-right">
          <thead className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
            <tr>
              <th className="p-4 text-right">الاسم</th>
              <th className="p-4 text-center">الكمية</th>
              <th className="p-4 text-center">السعر</th>
              <th className="p-4 text-center">الإجمالي</th>
              <th className="p-4 text-center">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((i) => (
                <tr
                  key={i._id}
                  className="border-t hover:bg-blue-50 transition-colors"
                >
                  <td className="p-3 text-right font-medium">{i.name}</td>
                  <td className="p-3 text-center">{i.quantity}</td>
                  <td className="p-3 text-center">{i.price}</td>
                  <td className="p-3 text-center font-bold text-blue-800">
                    {(i.quantity * i.price).toFixed(2)}
                  </td>
                  <td className="flex gap-2 justify-center p-3">
                    <button
                      onClick={() => handleEdit(i)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded transition-colors"
                    >
                      تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(i._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition-colors"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  لا توجد نتائج مطابقة للبحث "{searchQuery}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-100 p-4 rounded-lg text-xl font-bold text-blue-900 text-center md:text-right border border-blue-200">
        💰 مجموع العناصر المعروضة: {total} د.أ
      </div>
    </div>
  );
};

export default WarehouseYesterday;