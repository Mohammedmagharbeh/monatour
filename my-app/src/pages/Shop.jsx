// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";

// const Shop = () => {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState({ name: "", quantity: "", price: "" });
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // 1. إضافة حالة نص البحث
//   const [searchQuery, setSearchQuery] = useState("");

//   const fetchItems = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         "https://monatour-ckd4.onrender.com/api/shop",
//       );
//       setItems(res.data);
//     } catch (error) {
//       console.error("خطأ في جلب البيانات:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formattedForm = {
//       ...form,
//       quantity: Number(form.quantity),
//       price: Number(form.price),
//     };

//     try {
//       if (editingId) {
//         await axios.put(
//           `https://monatour-ckd4.onrender.com/api/shop/${editingId}`,
//           formattedForm,
//         );
//       } else {
//         await axios.post(
//           "https://monatour-ckd4.onrender.com/api/shop",
//           formattedForm,
//         );
//       }

//       setForm({ name: "", quantity: "", price: "" });
//       setEditingId(null);
//       fetchItems();
//     } catch (error) {
//       console.error("خطأ في حفظ البيانات:", error);
//     }
//   };

//   const handleEdit = (item) => {
//     setForm({
//       name: item.name,
//       quantity: item.quantity,
//       price: item.price,
//     });
//     setEditingId(item._id);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("هل تريد حذف هذا العنصر؟")) {
//       try {
//         await axios.delete(`https://monatour-ckd4.onrender.com/api/shop/${id}`);
//         fetchItems();
//       } catch (error) {
//         console.error("خطأ في حذف العنصر:", error);
//       }
//     }
//   };

//   // 2. تصفية العناصر بناءً على البحث
//   const filteredItems = items.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase()),
//   );

//   // 3. حساب المجموع الكلي للعناصر المعروضة فقط
//   const totalAmount = filteredItems
//     .reduce((sum, item) => sum + item.quantity * item.price, 0)
//     .toFixed(2);

//   return (
//     <div
//       className="min-h-screen p-4 sm:p-6 md:p-8"
//       style={{
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//       }}
//       dir="rtl"
//     >
//       <div className="max-w-6xl mx-auto text-right">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
//             🛍️ جرد المحل
//           </h1>
//           <p className="text-white text-opacity-80">
//             إدارة مخزون المحل بكفاءة وسهولة
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8">
//           <h2 className="text-xl font-bold text-gray-800 mb-6">
//             {editingId ? "✏️ تعديل بيانات المنتج" : "➕ إضافة منتج جديد للمحل"}
//           </h2>
//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
//           >
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 اسم المنتج
//               </label>
//               <input
//                 type="text"
//                 placeholder="أدخل اسم المنتج"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500 transition"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 الكمية
//               </label>
//               <input
//                 type="number"
//                 placeholder="الكمية"
//                 value={form.quantity}
//                 onChange={(e) => setForm({ ...form, quantity: e.target.value })}
//                 className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500 transition"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 السعر
//               </label>
//               <input
//                 type="number"
//                 step="0.01"
//                 placeholder="السعر"
//                 value={form.price}
//                 onChange={(e) => setForm({ ...form, price: e.target.value })}
//                 className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500 transition"
//                 required
//               />
//             </div>
//           </form>

//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition transform hover:scale-105"
//           >
//             {editingId ? "تحديث المنتج" : "إضافة منتج"}
//           </button>
//         </div>

//         {/* 4. حقل البحث */}
//         <div className="mb-6 relative">
//           <input
//             type="text"
//             placeholder="🔍 ابحث عن منتج داخل المحل..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full p-4 pr-12 border-none rounded-xl shadow-xl focus:ring-4 focus:ring-purple-300 focus:outline-none transition-all text-lg"
//           />
//         </div>

//         {/* Loading / Content */}
//         {loading ? (
//           <div className="text-center py-10 text-white text-xl">
//             جاري التحميل...
//           </div>
//         ) : (
//           <>
//             {/* Desktop Table */}
//             <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden mb-8">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
//                     <th className="p-4 text-right font-bold">اسم المنتج</th>
//                     <th className="p-4 text-center font-bold">الكمية</th>
//                     <th className="p-4 text-center font-bold">السعر</th>
//                     <th className="p-4 text-center font-bold">الإجمالي</th>
//                     <th className="p-4 text-center font-bold">إجراءات</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-100">
//                   {filteredItems.length > 0 ? (
//                     filteredItems.map((item, index) => (
//                       <tr
//                         key={item._id}
//                         className={`transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-purple-50`}
//                       >
//                         <td className="p-4 text-right font-semibold text-gray-800">
//                           {item.name}
//                         </td>
//                         <td className="p-4 text-center text-gray-700">
//                           {item.quantity}
//                         </td>
//                         <td className="p-4 text-center text-gray-700">
//                           {Number(item.price).toFixed(2)} د.أ
//                         </td>
//                         <td className="p-4 text-center font-bold text-purple-600">
//                           {(item.quantity * item.price).toFixed(2)} د.أ
//                         </td>
//                         <td className="p-4 text-center flex gap-2 justify-center">
//                           <button
//                             onClick={() => handleEdit(item)}
//                             className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-3 py-1 rounded-lg transition"
//                           >
//                             ✏️ تعديل
//                           </button>
//                           <button
//                             onClick={() => handleDelete(item._id)}
//                             className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 rounded-lg transition"
//                           >
//                             🗑️ حذف
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td
//                         colSpan="5"
//                         className="text-center py-10 text-gray-500 italic"
//                       >
//                         لا توجد نتائج مطابقة لبحثك عن "{searchQuery}"
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* Mobile Cards */}
//             <div className="md:hidden space-y-4 mb-8">
//               {filteredItems.map((item) => (
//                 <div
//                   key={item._id}
//                   className="bg-white rounded-lg shadow-lg p-4 border-r-4 border-purple-500"
//                 >
//                   <div className="mb-3">
//                     <h3 className="text-lg font-bold text-gray-800">
//                       {item.name}
//                     </h3>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
//                     <div>
//                       <span className="text-gray-600">الكمية:</span>
//                       <p className="font-bold text-gray-800">{item.quantity}</p>
//                     </div>
//                     <div>
//                       <span className="text-gray-600">السعر:</span>
//                       <p className="font-bold text-gray-800">
//                         {Number(item.price).toFixed(2)} د.أ
//                       </p>
//                     </div>
//                   </div>
//                   <div className="bg-purple-100 rounded p-2 mb-4">
//                     <span className="text-gray-600">الإجمالي: </span>
//                     <span className="font-bold text-purple-600 text-lg">
//                       {(item.quantity * item.price).toFixed(2)} د.أ
//                     </span>
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleEdit(item)}
//                       className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 rounded-lg transition"
//                     >
//                       ✏️ تعديل
//                     </button>
//                     <button
//                       onClick={() => handleDelete(item._id)}
//                       className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition"
//                     >
//                       🗑️ حذف
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Total Section */}
//             <div
//               className="mt-8 p-6 rounded-xl shadow-2xl"
//               style={{
//                 background:
//                   "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)",
//                 borderRight: "6px solid #764ba2",
//               }}
//             >
//               <h3 className="text-lg text-gray-700 mb-2 font-semibold">
//                 📊 إجمالي قيمة بضاعة المحل (بناءً على البحث):
//               </h3>
//               <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 {Number(totalAmount).toLocaleString()} د.أ
//               </p>
//               <p className="text-gray-500 text-sm mt-2 font-medium">
//                 عدد الأصناف المعروضة: {filteredItems.length}
//               </p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx"; // استيراد مكتبة التصدير

const Shop = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "", price: "" });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://monatour-ckd4.onrender.com/api/shop");
      setItems(res.data);
    } catch (error) {
      console.error("خطأ في جلب البيانات:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // دالة تصدير البيانات إلى Excel
  const exportToExcel = () => {
    if (filteredItems.length === 0) {
      alert("لا توجد بيانات لتصديرها");
      return;
    }

    // تجهيز البيانات
    const dataToExport = filteredItems.map((item) => ({
      "اسم المنتج": item.name,
      "الكمية": item.quantity,
      "السعر الفردي (د.أ)": Number(item.price).toFixed(2),
      "الإجمالي (د.أ)": (item.quantity * item.price).toFixed(2),
    }));

    // إضافة سطر المجموع النهائي
    dataToExport.push({
      "اسم المنتج": "الإجمالي الكلي للبضاعة",
      "الكمية": "",
      "السعر الفردي (د.أ)": "",
      "الإجمالي (د.أ)": totalAmount,
    });

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "جرد المحل");

    // تحميل الملف باسم يحتوي على التاريخ
    XLSX.writeFile(workbook, `جرد_المحل_${new Date().toLocaleDateString("en-GB")}.xlsx`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedForm = {
      ...form,
      quantity: Number(form.quantity),
      price: Number(form.price),
    };

    try {
      if (editingId) {
        await axios.put(`https://monatour-ckd4.onrender.com/api/shop/${editingId}`, formattedForm);
      } else {
        await axios.post("https://monatour-ckd4.onrender.com/api/shop", formattedForm);
      }
      setForm({ name: "", quantity: "", price: "" });
      setEditingId(null);
      fetchItems();
    } catch (error) {
      console.error("خطأ في حفظ البيانات:", error);
    }
  };

  const handleEdit = (item) => {
    setForm({ name: item.name, quantity: item.quantity, price: item.price });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل تريد حذف هذا العنصر؟")) {
      try {
        await axios.delete(`https://monatour-ckd4.onrender.com/api/shop/${id}`);
        fetchItems();
      } catch (error) {
        console.error("خطأ في حذف العنصر:", error);
      }
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalAmount = filteredItems
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <div
      className="min-h-screen p-4 sm:p-6 md:p-8"
      style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto text-right">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">🛍️ جرد المحل</h1>
          <p className="text-white text-opacity-80">إدارة مخزون المحل بكفاءة وسهولة</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">{editingId ? "✏️ تعديل منتج" : "➕ إضافة منتج جديد"}</h2>
          <form className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="اسم المنتج"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500"
            />
            <input
              type="number"
              placeholder="الكمية"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500"
            />
            <input
              type="number"
              step="0.01"
              placeholder="السعر"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </form>
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg transform hover:scale-105 transition"
          >
            {editingId ? "تحديث" : "إضافة"}
          </button>
        </div>

        {/* Search & Export Bar */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="🔍 ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pr-12 border-none rounded-xl shadow-xl focus:outline-none transition-all text-lg"
            />
          </div>
          <button
            onClick={exportToExcel}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-xl shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            📊 تصدير ملف Excel
          </button>
        </div>

        {loading ? (
          <div className="text-center py-10 text-white text-xl">جاري التحميل...</div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <th className="p-4 text-right">اسم المنتج</th>
                    <th className="p-4 text-center">الكمية</th>
                    <th className="p-4 text-center">السعر</th>
                    <th className="p-4 text-center">الإجمالي</th>
                    <th className="p-4 text-center">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredItems.map((item, index) => (
                    <tr key={item._id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-semibold">{item.name}</td>
                      <td className="p-4 text-center">{item.quantity}</td>
                      <td className="p-4 text-center">{Number(item.price).toFixed(2)} د.أ</td>
                      <td className="p-4 text-center font-bold text-purple-600">{(item.quantity * item.price).toFixed(2)} د.أ</td>
                      <td className="p-4 text-center flex gap-2 justify-center">
                        <button onClick={() => handleEdit(item)} className="bg-yellow-400 px-3 py-1 rounded-lg">✏️</button>
                        <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-3 py-1 rounded-lg">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-4 mb-8">
              {filteredItems.map((item) => (
                <div key={item._id} className="bg-white rounded-lg p-4 border-r-4 border-purple-500 shadow-md">
                  <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                  <div className="flex justify-between text-sm mb-2">
                    <span>الكمية: {item.quantity}</span>
                    <span>السعر: {item.price} د.أ</span>
                  </div>
                  <div className="font-bold text-purple-600 border-t pt-2 mb-3">الإجمالي: {(item.quantity * item.price).toFixed(2)} د.أ</div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(item)} className="flex-1 bg-yellow-400 py-2 rounded-lg">تعديل</button>
                    <button onClick={() => handleDelete(item._id)} className="flex-1 bg-red-500 text-white py-2 rounded-lg">حذف</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Footer */}
            <div className="bg-white bg-opacity-95 p-6 rounded-xl shadow-2xl border-r-8 border-purple-800">
              <h3 className="text-gray-700 font-semibold mb-1">📊 إجمالي قيمة البضاعة:</h3>
              <p className="text-4xl font-black text-purple-700">{Number(totalAmount).toLocaleString()} د.أ</p>
              <p className="text-sm text-gray-500 mt-2">عدد الأصناف: {filteredItems.length}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;