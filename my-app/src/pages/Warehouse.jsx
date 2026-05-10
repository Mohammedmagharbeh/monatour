// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";

// const Warehouse = () => {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState({ name: "", quantity: "", price: "" });
//   const [editingId, setEditingId] = useState(null);

//   // 1. إضافة حالة للبحث
//   const [searchQuery, setSearchQuery] = useState("");

//   const fetchItems = async () => {
//     try {
//       const res = await axios.get(
//         "https://monatour-ckd4.onrender.com/api/warehouse",
//       );
//       setItems(res.data);
//     } catch (err) {
//       console.error("Error fetching data", err);
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
//           `https://monatour-ckd4.onrender.com/api/warehouse/${editingId}`,
//           formattedForm,
//         );
//       } else {
//         await axios.post(
//           "https://monatour-ckd4.onrender.com/api/warehouse",
//           formattedForm,
//         );
//       }

//       setForm({ name: "", quantity: "", price: "" });
//       setEditingId(null);
//       fetchItems();
//     } catch (err) {
//       console.error("Error saving data", err);
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
//         await axios.delete(
//           `https://monatour-ckd4.onrender.com/api/warehouse/${id}`,
//         );
//         fetchItems();
//       } catch (err) {
//         console.error("Error deleting", err);
//       }
//     }
//   };

//   // 2. تصفية العناصر بناءً على البحث
//   const filteredItems = items.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase()),
//   );

//   // 3. حساب المجموع الكلي بناءً على العناصر المصفاة
//   const totalAmount = filteredItems
//     .reduce((sum, item) => sum + item.quantity * item.price, 0)
//     .toFixed(2);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 sm:p-6 lg:p-8">
//       <div className="max-w-6xl mx-auto text-right" dir="rtl">
//         <div className="mb-8 text-right">
//           <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-2">
//             جرد المستودع الرئيسي 🏭
//           </h1>
//           <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded"></div>
//         </div>

//         {/* نموذج الإدخال */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-blue-100"
//         >
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">
//             {editingId ? "تحديث المنتج" : "إضافة منتج جديد"}
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="sm:col-span-2 lg:col-span-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 اسم المنتج
//               </label>
//               <input
//                 type="text"
//                 placeholder="أدخل اسم المنتج"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="sm:col-span-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 الكمية
//               </label>
//               <input
//                 type="number"
//                 placeholder="0"
//                 value={form.quantity}
//                 onChange={(e) => setForm({ ...form, quantity: e.target.value })}
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="sm:col-span-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 السعر
//               </label>
//               <input
//                 type="number"
//                 step="0.01"
//                 placeholder="0.00"
//                 value={form.price}
//                 onChange={(e) => setForm({ ...form, price: e.target.value })}
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="sm:col-span-2 lg:col-span-1 flex items-end">
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
//               >
//                 {editingId ? "تحديث" : "إضافة"}
//               </button>
//             </div>
//           </div>
//         </form>

//         {/* حقل البحث الجديد */}
//         <div className="bg-white rounded-xl shadow-md p-4 mb-8 border border-blue-50 flex items-center gap-3">
//           <span className="text-2xl text-blue-500">🔍</span>
//           <input
//             type="text"
//             placeholder="ابحث عن اسم المنتج هنا..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full p-2 text-lg focus:outline-none bg-transparent"
//           />
//         </div>

//         {/* عرض الجدول للشاشات الكبيرة */}
//         <div className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
//           <table className="w-full text-right">
//             <thead>
//               <tr className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
//                 <th className="p-4 font-semibold">اسم المنتج</th>
//                 <th className="p-4 font-semibold text-center">الكمية</th>
//                 <th className="p-4 font-semibold text-center">السعر</th>
//                 <th className="p-4 font-semibold text-center">الإجمالي</th>
//                 <th className="p-4 font-semibold text-center">إجراءات</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredItems.length > 0 ? (
//                 filteredItems.map((item, index) => (
//                   <tr
//                     key={item._id}
//                     className={`${
//                       index % 2 === 0 ? "bg-white" : "bg-blue-50"
//                     } border-b border-gray-200 hover:bg-blue-100 transition-colors duration-150`}
//                   >
//                     <td className="p-4">{item.name}</td>
//                     <td className="p-4 text-center">{item.quantity}</td>
//                     <td className="p-4 text-center">
//                       {Number(item.price).toFixed(2)}
//                     </td>
//                     <td className="p-4 text-center font-bold text-green-600">
//                       {(item.quantity * item.price).toFixed(2)}
//                     </td>
//                     <td className="p-4 flex gap-2 justify-center">
//                       <button
//                         onClick={() => handleEdit(item)}
//                         className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-lg text-sm font-semibold transition-colors duration-150"
//                       >
//                         ✏️ تعديل
//                       </button>
//                       <button
//                         onClick={() => handleDelete(item._id)}
//                         className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-colors duration-150"
//                       >
//                         🗑️ حذف
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="p-10 text-center text-gray-500">
//                     لا يوجد نتائج تطابق بحثك...
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* عرض البطاقات للشاشات الصغيرة */}
//         <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {filteredItems.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white rounded-xl shadow-lg p-4 border border-blue-100 hover:shadow-xl transition-shadow duration-200"
//             >
//               <h3 className="text-lg font-bold text-gray-800 text-right mb-3">
//                 {item.name}
//               </h3>
//               <div className="space-y-2 mb-4">
//                 <div className="flex justify-between flex-row-reverse">
//                   <span className="text-gray-600">:الكمية</span>
//                   <span className="font-semibold">{item.quantity}</span>
//                 </div>
//                 <div className="flex justify-between flex-row-reverse">
//                   <span className="text-gray-600">:السعر</span>
//                   <span className="font-semibold">
//                     {Number(item.price).toFixed(2)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between flex-row-reverse bg-green-50 p-2 rounded">
//                   <span className="text-gray-700 font-semibold">:الإجمالي</span>
//                   <span className="text-green-600 font-bold">
//                     {(item.quantity * item.price).toFixed(2)}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleEdit(item)}
//                   className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg font-semibold transition-colors duration-150"
//                 >
//                   ✏️ تعديل
//                 </button>
//                 <button
//                   onClick={() => handleDelete(item._id)}
//                   className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors duration-150"
//                 >
//                   🗑️ حذف
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ملخص المجموع */}
//         <div className="mt-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl shadow-lg p-6">
//           <div className="flex flex-col sm:flex-row-reverse sm:justify-between sm:items-center gap-4 text-right">
//             <div className="text-right">
//               <p className="text-sm opacity-90">المجموع المصفى للمستودع</p>
//               <p className="text-3xl sm:text-4xl font-bold">{totalAmount}</p>
//             </div>
//             <div className="text-right">
//               <p className="text-sm opacity-90">عدد العناصر الظاهرة</p>
//               <p className="text-2xl sm:text-3xl font-bold">
//                 {filteredItems.length}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Warehouse;

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx"; // استيراد المكتبة

const Warehouse = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "", price: "" });
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchItems = async () => {
    try {
      const res = await axios.get(
        "https://monatour-ckd4.onrender.com/api/warehouse",
      );
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching data", err);
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

    // تجهيز البيانات بتنسيق عربي للملف
    const dataToExport = filteredItems.map((item) => ({
      "اسم المنتج": item.name,
      "الكمية": item.quantity,
      "سعر الوحدة": Number(item.price).toFixed(2),
      "الإجمالي": (item.quantity * item.price).toFixed(2),
    }));

    // إضافة سطر المجموع في نهاية ملف الإكسل
    dataToExport.push({
      "اسم المنتج": "الإجمالي الكلي للمستودع",
      "الكمية": "",
      "سعر الوحدة": "",
      "الإجمالي": totalAmount,
    });

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "جرد المستودع");

    // تنزيل الملف
    XLSX.writeFile(workbook, `جرد_المستودع_${new Date().toLocaleDateString("en-GB")}.xlsx`);
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
        await axios.put(
          `https://monatour-ckd4.onrender.com/api/warehouse/${editingId}`,
          formattedForm,
        );
      } else {
        await axios.post(
          "https://monatour-ckd4.onrender.com/api/warehouse",
          formattedForm,
        );
      }
      setForm({ name: "", quantity: "", price: "" });
      setEditingId(null);
      fetchItems();
    } catch (err) {
      console.error("Error saving data", err);
    }
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    });
    setEditingId(item._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل تريد حذف هذا العنصر؟")) {
      try {
        await axios.delete(
          `https://monatour-ckd4.onrender.com/api/warehouse/${id}`,
        );
        fetchItems();
      } catch (err) {
        console.error("Error deleting", err);
      }
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalAmount = filteredItems
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto text-right" dir="rtl">
        <div className="mb-8 text-right">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-2">
            جرد المستودع الرئيسي 🏭
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded"></div>
        </div>

        {/* نموذج الإدخال */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-blue-100"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {editingId ? "تحديث المنتج" : "إضافة منتج جديد"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">اسم المنتج</label>
              <input
                type="text"
                placeholder="أدخل اسم المنتج"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الكمية</label>
              <input
                type="number"
                placeholder="0"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">السعر</label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                {editingId ? "تحديث" : "إضافة"}
              </button>
            </div>
          </div>
        </form>

        {/* شريط البحث وزر التصدير */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-4 border border-blue-50 flex items-center gap-3 flex-1">
            <span className="text-2xl text-blue-500">🔍</span>
            <input
              type="text"
              placeholder="ابحث عن اسم المنتج هنا..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 text-lg focus:outline-none bg-transparent"
            />
          </div>
          <button
            onClick={exportToExcel}
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-md transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            📊 تصدير Excel
          </button>
        </div>

        {/* عرض الجدول للشاشات الكبيرة */}
        <div className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 mb-8">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                <th className="p-4">اسم المنتج</th>
                <th className="p-4 text-center">الكمية</th>
                <th className="p-4 text-center">السعر</th>
                <th className="p-4 text-center">الإجمالي</th>
                <th className="p-4 text-center">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <tr key={item._id} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4 text-center">{item.quantity}</td>
                    <td className="p-4 text-center">{Number(item.price).toFixed(2)}</td>
                    <td className="p-4 text-center font-bold text-green-600">
                      {(item.quantity * item.price).toFixed(2)}
                    </td>
                    <td className="p-4 flex gap-2 justify-center">
                      <button onClick={() => handleEdit(item)} className="bg-yellow-400 px-3 py-1 rounded-lg text-sm">✏️ تعديل</button>
                      <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">🗑️ حذف</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="5" className="p-10 text-center text-gray-500">لا توجد نتائج...</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* عرض البطاقات للموبايل */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {filteredItems.map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow-lg p-4 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-800 mb-3">{item.name}</h3>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between"><span>الكمية:</span><span className="font-semibold">{item.quantity}</span></div>
                <div className="flex justify-between"><span>السعر:</span><span className="font-semibold">{Number(item.price).toFixed(2)}</span></div>
                <div className="flex justify-between bg-green-50 p-2 rounded"><span>الإجمالي:</span><span className="text-green-600 font-bold">{(item.quantity * item.price).toFixed(2)}</span></div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(item)} className="flex-1 bg-yellow-400 py-2 rounded-lg font-semibold">✏️ تعديل</button>
                <button onClick={() => handleDelete(item._id)} className="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold">🗑️ حذف</button>
              </div>
            </div>
          ))}
        </div>

        {/* ملخص المجموع */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <div className="text-center sm:text-right">
              <p className="text-sm opacity-90">المجموع المصفى للمستودع</p>
              <p className="text-3xl font-bold">{totalAmount} د.أ</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm opacity-90">عدد العناصر</p>
              <p className="text-2xl font-bold">{filteredItems.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;