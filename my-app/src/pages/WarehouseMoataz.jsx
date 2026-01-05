// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";

// const WarehouseMoataz = () => {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState({ name: "", quantity: "", price: "" });
//   const [editingId, setEditingId] = useState(null);

//   const API = "http://localhost:5000/api/warehouse-moataz";

//   // جلب البيانات
//   const fetchItems = async () => {
//     try {
//       const res = await axios.get(API);
//       setItems(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   // إضافة أو تحديث
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       ...form,
//       quantity: Number(form.quantity),
//       price: Number(form.price),
//     };

//     try {
//       editingId
//         ? await axios.put(`${API}/${editingId}`, data)
//         : await axios.post(API, data);

//       setForm({ name: "", quantity: "", price: "" });
//       setEditingId(null);
//       fetchItems();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // تعديل عنصر
//   const handleEdit = (item) => {
//     setForm(item);
//     setEditingId(item._id);
//   };

//   // حذف عنصر
//   const handleDelete = async (id) => {
//     if (!window.confirm("هل تريد حذف العنصر؟")) return;
//     try {
//       await axios.delete(`${API}/${id}`);
//       fetchItems();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const total = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

//   return (
//     <div className="min-h-screen p-6 bg-slate-50">
//       <h1 className="text-3xl font-bold mb-6">📦 مستودع معتز</h1>

//       {/* نموذج الإضافة / التحديث */}
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-4 gap-3 mb-6 bg-white p-6 rounded shadow"
//       >
//         <input
//           placeholder="اسم المنتج"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="الكمية"
//           value={form.quantity}
//           onChange={(e) => setForm({ ...form, quantity: e.target.value })}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="السعر"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           className="border p-2 rounded"
//           required
//         />
//         <button className="bg-blue-600 text-white rounded font-bold">
//           {editingId ? "تحديث" : "إضافة"}
//         </button>
//       </form>

//       {/* جدول العرض */}
//       <table className="w-full bg-white rounded shadow">
//         <thead className="bg-blue-600 text-white">
//           <tr>
//             <th className="p-2">الاسم</th>
//             <th>الكمية</th>
//             <th>السعر</th>
//             <th>الإجمالي</th>
//             <th>إجراءات</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((i) => (
//             <tr key={i._id} className="border-t text-center">
//               <td>{i.name}</td>
//               <td>{i.quantity}</td>
//               <td>{i.price}</td>
//               <td>{(i.quantity * i.price).toFixed(2)}</td>
//               <td className="flex gap-2 justify-center p-2">
//                 <button
//                   onClick={() => handleEdit(i)}
//                   className="bg-yellow-400 px-3 py-1 rounded"
//                 >
//                   تعديل
//                 </button>
//                 <button
//                   onClick={() => handleDelete(i._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                 >
//                   حذف
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="mt-4 text-xl font-bold">
//         💰 المجموع: {total.toFixed(2)} د.أ
//       </div>
//     </div>
//   );
// };

// export default WarehouseMoataz;
"use client";

// import { useState, useEffect } from "react";
// import axios from "axios";

// const WarehouseMoataz = () => {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState({ name: "", quantity: "", price: "" });
//   const [editingId, setEditingId] = useState(null);

//   // لينك رندر مباشر
//   const API = "https://monatour-ckd4.onrender.com/api/warehouse-moataz";

//   const fetchItems = async () => {
//     try {
//       const res = await axios.get(API);
//       setItems(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       ...form,
//       quantity: Number(form.quantity),
//       price: Number(form.price),
//     };

//     try {
//       editingId
//         ? await axios.put(`${API}/${editingId}`, data)
//         : await axios.post(API, data);

//       setForm({ name: "", quantity: "", price: "" });
//       setEditingId(null);
//       fetchItems();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleEdit = (item) => {
//     setForm(item);
//     setEditingId(item._id);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("هل تريد حذف العنصر؟")) return;
//     try {
//       await axios.delete(`${API}/${id}`);
//       fetchItems();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const total = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

//   return (
//     <div className="min-h-screen p-6 bg-slate-50">
//       <h1 className="text-3xl font-bold mb-6">📦 مستودع معتز</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-4 gap-3 mb-6 bg-white p-6 rounded shadow"
//       >
//         <input
//           placeholder="اسم المنتج"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="الكمية"
//           value={form.quantity}
//           onChange={(e) => setForm({ ...form, quantity: e.target.value })}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="السعر"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           className="border p-2 rounded"
//           required
//         />
//         <button className="bg-blue-600 text-white rounded font-bold">
//           {editingId ? "تحديث" : "إضافة"}
//         </button>
//       </form>

//       <table className="w-full bg-white rounded shadow">
//         <thead className="bg-blue-600 text-white">
//           <tr>
//             <th className="p-2">الاسم</th>
//             <th>الكمية</th>
//             <th>السعر</th>
//             <th>الإجمالي</th>
//             <th>إجراءات</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((i) => (
//             <tr key={i._id} className="border-t text-center">
//               <td>{i.name}</td>
//               <td>{i.quantity}</td>
//               <td>{i.price}</td>
//               <td>{(i.quantity * i.price).toFixed(2)}</td>
//               <td className="flex gap-2 justify-center p-2">
//                 <button
//                   onClick={() => handleEdit(i)}
//                   className="bg-yellow-400 px-3 py-1 rounded"
//                 >
//                   تعديل
//                 </button>
//                 <button
//                   onClick={() => handleDelete(i._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                 >
//                   حذف
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="mt-4 text-xl font-bold">
//         💰 المجموع: {total.toFixed(2)} د.أ
//       </div>
//     </div>
//   );
// };

// export default WarehouseMoataz;
import { useState, useEffect } from "react";
import axios from "axios";

const WarehouseMoataz = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "", price: "" });
  const [editingId, setEditingId] = useState(null);
  
  // 1. حالة جديدة لنص البحث
  const [searchQuery, setSearchQuery] = useState("");

  // لينك رندر مباشر
  const API = "https://monatour-ckd4.onrender.com/api/warehouse-moataz";

  const fetchItems = async () => {
    try {
      const res = await axios.get(API);
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...form,
      quantity: Number(form.quantity),
      price: Number(form.price),
    };

    try {
      editingId
        ? await axios.put(`${API}/${editingId}`, data)
        : await axios.post(API, data);

      setForm({ name: "", quantity: "", price: "" });
      setEditingId(null);
      fetchItems();
    } catch (err) {
      console.error(err);
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
      console.error(err);
    }
  };

  // 2. تصفية العناصر
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 3. حساب المجموع للعناصر المعروضة فقط
  const total = filteredItems.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">📦 مستودع معتز</h1>

      {/* نموذج الإدخال */}
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-4 gap-3 mb-6 bg-white p-6 rounded shadow border border-blue-100"
      >
        <input
          placeholder="اسم المنتج"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="number"
          placeholder="الكمية"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="number"
          placeholder="السعر"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded font-bold transition-colors">
          {editingId ? "تحديث" : "إضافة"}
        </button>
      </form>

      {/* 4. حقل البحث */}
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500">🔍</span>
        </div>
        <input
          type="text"
          placeholder="ابحث عن اسم المنتج..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pr-10 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* الجدول */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-right">الاسم</th>
              <th className="p-3 text-center">الكمية</th>
              <th className="p-3 text-center">السعر</th>
              <th className="p-3 text-center">الإجمالي</th>
              <th className="p-3 text-center">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((i) => (
                <tr key={i._id} className="border-t hover:bg-blue-50 transition-colors">
                  <td className="p-3 text-right">{i.name}</td>
                  <td className="p-3 text-center">{i.quantity}</td>
                  <td className="p-3 text-center">{i.price}</td>
                  <td className="p-3 text-center font-bold">
                    {(i.quantity * i.price).toFixed(2)}
                  </td>
                  <td className="flex gap-2 justify-center p-3">
                    <button
                      onClick={() => handleEdit(i)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition-colors"
                    >
                      تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(i._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
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

      <div className="mt-6 bg-blue-100 p-4 rounded text-xl font-bold text-blue-900 border border-blue-200">
        💰 المجموع: {total.toFixed(2)} د.أ
      </div>
    </div>
  );
};

export default WarehouseMoataz;